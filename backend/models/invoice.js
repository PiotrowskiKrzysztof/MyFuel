import { Sequelize } from 'sequelize';
import sequelize from '../database/database.js';
import 'dotenv/config'
import User from './user.js';

// @example
// id: '236K25/9401/19',
// value: '822.31',
// date: '21/04/2022 19:31',
// street: 'Kawaleryjska 27',
// city: Bialystok

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


const addZero = (num) => {
   if (num.toString().length === 1) {
      return `0${num}`;
   }

   return num;
}



const getRandomNumber = (offset, add = 0) => addZero(Math.round(Math.random() * offset + add));

if (process.env.NODE_ENV !== 'production') {
   // Invoice seed
   setTimeout(() => {
      console.log("\n#### Invoice seed ####\n")
      for(let i = 0; i < 50; i++) {
         const randomValue = getRandomNumber(400, 50);
         const randomMonth = getRandomNumber(6, 1);
         const randomDay = getRandomNumber(25, 1);
         const randomHour = getRandomNumber(24);
         const randomMinute = getRandomNumber(60);
         const randomDate = `2022-${randomMonth}-${randomDay} ${randomHour}:${randomMinute}`

         Invoice.create(({
            id: `236K25/9401/${i}`,
            value: randomValue,
            date: randomDate,
            street: 'Kawaleryjska 27',
            city: 'Bialystok',
            userId: 1
         })).catch(console.error)
      }
   }, 1000)
 }

export default Invoice;