import express from 'express';
import { fuelExpenses, spentMoneyPercent, patrolStationVisited } from '../controllers/statistics.js';
import { getUser } from '../controllers/user.js';
import { signup, login, isAuth } from '../controllers/auth.js';
import { getInvoice, getUserInvoices, createInvoice, getAllInvoices } from '../controllers/invoice.js';
import 'dotenv/config'

const router = express.Router();

router.get('/statistics/fuelExpenses', fuelExpenses);

router.post('/statistics/monthly/spentMoneyPercent', spentMoneyPercent);

router.post('/statistics/monthly/patrolStationVisited', patrolStationVisited);

router.post('/invoices', createInvoice);

router.get('/invoices/:invoiceId', getInvoice);

router.get('/invoices/:userId', getUserInvoices);

router.get('/invoices', getAllInvoices);

router.get('/users/:userId', getUser);

router.post('/signup', signup);

router.post('/login', login);

router.post('/signup', signup);

router.get('/me', isAuth);

router.use('/', (_, res) => {
    res.status(200).json({ message: "Welcome!" });
});

export default router;