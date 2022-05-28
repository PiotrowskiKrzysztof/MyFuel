import Invoice from '../models/invoice.js';
import User from '../models/user.js';
import 'dotenv/config'
import bcrypt from 'bcryptjs';

const addZero = (num) => {
    if (num.toString().length === 1) {
       return `0${num}`;
    }
 
    return num;
 }
 
 const getRandomNumber = (offset, add = 0) => addZero(Math.round(Math.random() * offset + add));
 
 const invoiceSeed = () => {
    if (process.env.NODE_ENV !== 'production') {
        setTimeout(() => {
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
 }

 const userSeed = () => {
    if (process.env.NODE_ENV !== 'production') {
        bcrypt.hash("test01", 12, (_, passwordHash) => {
           User.create(({
              email: "test01@test.com",
              username: "test01",
              password: passwordHash,
           })).catch(console.error)
        })
     }
 }

 export {invoiceSeed, userSeed}