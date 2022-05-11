import express from 'express';
import { signup, login, isAuth } from '../controllers/auth.js';
import 'dotenv/config'

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/me', isAuth);

router.use('/', (_, res) => {
    res.status(200).json({ message: "Welcome!" });
});

// TODO:
// - create invoice
// - get invoices (by userID)
// - get invoice (by invoiceID)
// - get statistics (by userID)

export default router;