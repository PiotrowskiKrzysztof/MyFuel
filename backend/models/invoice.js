import { Sequelize } from 'sequelize';
import sequelize from '../database/database.js';
import 'dotenv/config'
import User from './user.js';

const Invoice = sequelize.define('invoices', {
   id: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
   },
   userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true,
   },
   value: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
   },
   date: {
      type: Sequelize.DATE,
      allowNull: false
   },
   street: {
      type: Sequelize.STRING,
      allowNull: false
   },
   city: {
      type: Sequelize.STRING,
      allowNull: false
   }
});

Invoice.belongsTo(User, {
   foreignKey: 'userId'
});

export default Invoice;