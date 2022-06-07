import express from 'express';
import { fuelExpenses, spentMoneyPercent, patrolStationVisited } from '../controllers/statistics.js';
import { getUser, updateUser } from '../controllers/user.js';
import { signup, login, isAuth } from '../controllers/auth.js';
import { getInvoice, getUserInvoices, createInvoice, getAllInvoices } from '../controllers/invoice.js';
import 'dotenv/config'

const router = express.Router();

router.get('/statistics/:userId/fuelExpenses/:nLastMonths', fuelExpenses);

router.get('/statistics/:userId/monthly/spentMoneyPercent', spentMoneyPercent);

router.get('/statistics/:userId/monthly/patrolStationVisited', patrolStationVisited);

router.post('/invoices', createInvoice);

router.get('/invoices/:invoiceId', getInvoice);
////////

router.get('/invoices', getAllInvoices);

router.get('/users/:userId/invoices', getUserInvoices);

router.put('/users', updateUser);

router.get('/users/:userId', getUser);

router.post('/signup', signup);

router.post('/login', login);

router.get('/me', isAuth);

router.use('/', (_, res) => {
    res.status(200).json({ message: "Welcome!" });
});

export default router;