import express from 'express';
import { signup, login, isAuth } from '../controllers/auth.js';
import 'dotenv/config'

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/me', isAuth);

router.use('/', (req, res, next) => {
    res.status(200).json({ message: "Welcome!" });
});

export default router;