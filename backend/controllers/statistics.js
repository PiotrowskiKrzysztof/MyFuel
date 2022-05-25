import Invoice from '../models/invoice.js';
import { Op } from 'sequelize';

const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);
const getLastDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);
const moduloWithNetagive = (num, total) => ((num % total) + total) % total;

const getSpentMoneyInMonth = async (date) => {
    const startOfMonth = getFirstDayOfMonth(date);
    const endOfMonth = getLastDayOfMonth(date);
    const sum = await Invoice.sum('value', {
        where: {
            date: {
                [Op.between]: [startOfMonth, endOfMonth]
            },
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

    return [fromDate, now]
}

const fuelExpenses = (_, res) => {
    const [fromDate, now] = handleDate(3)

    getSpentMoneyBetweenDates(fromDate.toISOString(), now.toISOString()).then(sum => {
        return res.status(200).json({sum});
    });
   
}

const spentMoneyPercent = (_, res) => {
    const [lastMonth, now] = handleDate(1)

    const sums = Promise.all([getSpentMoneyInMonth(lastMonth), getSpentMoneyInMonth(now)])
    const lastMonthSum = sums[0];
    const currentMonthSum = sums[1];
    const diff = currentMonthSum - lastMonthSum;
    const diffInPercentage = diff / lastMonthSum * 100;

    return res.status(200).json({difference: diffInPercentage});
}

const patrolStationVisited = async (_, res) => {
    const allInvoices = await Invoice.findAll({
        attributes: ['id', 'street']
    });

    const now = new Date();
    const startOfMonth = getFirstDayOfMonth(now);
    const endOfMonth = getLastDayOfMonth(now);
    const invoicesInThisMonth = await Invoice.findAll({
        where: {
            date: {
                [Op.between]: [startOfMonth.toISOString(), endOfMonth.toISOString()]
            },
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