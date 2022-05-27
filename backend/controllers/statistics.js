import Invoice from '../models/invoice.js';
import { Op } from 'sequelize';
import sequelize from '../database/database.js';

const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);
const getLastDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);
const moduloWithNetagive = (num, total) => ((num % total) + total) % total;

const getSpentMoneyInMonth = async (date, userId) => {
    const startOfMonth = getFirstDayOfMonth(date);
    const endOfMonth = getLastDayOfMonth(date);
    const sum = await Invoice.sum('value', {
        where: {
            date: {
                [Op.between]: [startOfMonth, endOfMonth]
            },
            userId: {
                [Op.eq]: userId
            }
        },
    })

    return sum;
}

const getSpentMoneyBetweenDates = async (fromDate, toDate) => {
    const sum = await Invoice.sum('value', {
        where: {
            date: {
                [Op.between]: [fromDate, toDate]
            },
        },
    })
    

    return sum;
}

const handleDate = (num) => {
    const now = new Date();
    const currentMonthNumer = now.getMonth()
    const pastMonth = moduloWithNetagive(currentMonthNumer - num, 12)

    const fromDate = new Date();
    fromDate.setMonth(pastMonth);
    if (currentMonthNumer - num < 0) {
        fromDate.setFullYear(fromDate.getFullYear() - 1);
    }

    return [fromDate.toISOString(), now.toISOString()]
}

const getSumsFromNLastMonths = async (nLastMonths, userId) => {
    const [fromDate, now] = handleDate(nLastMonths)
    const [results] = await sequelize.query(
        `SELECT SUM(value) as sum, date FROM Invoices WHERE date BETWEEN '${fromDate}' AND '${now}' AND userId = '${userId}' GROUP BY strftime('%m', date);`
    );

    return results
}

const fuelExpenses = async (req, res) => {
    const {nLastMonths, userId} = req.params;
    const arr = await getSumsFromNLastMonths(nLastMonths, userId)
    console.log(arr)
    return res.status(200).json(arr);
}

const diffToPercent = (newVal, oldVal) => {
    const diff = newVal - oldVal;
    return diff / oldVal * 100;
}

const spentMoneyPercent = async (req, res) => {
    // const [lastMonth, now] = handleDate(1);
    const {userId} = req.params;
    const sums = await getSumsFromNLastMonths(2, userId)
    
    // const sums = await Promise.all([getSpentMoneyInMonth(lastMonth, userId), getSpentMoneyInMonth(now, userId)])
    const lastMonthSum = sums[0].sum;
    const currentMonthSum = sums[1].sum;
    const difference = diffToPercent(currentMonthSum, lastMonthSum)

    return res.status(200).json({difference});
}

const patrolStationVisited = async (req, res) => {
    const userId = req.params.userId;
    const allInvoices = await Invoice.findAll({
        attributes: ['id', 'street'],
        where: {
            userId: {
                [Op.eq]: userId
            }
        },
    });

    const now = new Date();
    const startOfMonth = getFirstDayOfMonth(now);
    const endOfMonth = getLastDayOfMonth(now);
    const invoicesInThisMonth = await Invoice.findAll({
        where: {
            date: {
                [Op.between]: [startOfMonth.toISOString(), endOfMonth.toISOString()]
            },
            userId: {
                [Op.eq]: userId
            }
        },
    })

    let total = 0;
    for(const invoice in invoicesInThisMonth) {
        if (!allInvoices.includes(it => it.street === invoice.street)) {
            ++total;
        }
    }

    return res.status(200).json({new: total});
}


export { fuelExpenses, spentMoneyPercent, patrolStationVisited }