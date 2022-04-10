import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('MyFuelDB', 'root', process.env.DATABASE_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;