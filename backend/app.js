import express from 'express';
import sequelize from './database/database.js';
import router from './routes/routes.js';
import 'dotenv/config'

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(router);

sequelize.sync(); 

app.listen(process.env.PORT || 8000);