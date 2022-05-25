import { Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';
import sequelize from '../database/database.js';
import 'dotenv/config'

const User = sequelize.define('users', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   email: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   username: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   password: {
      type: Sequelize.STRING,
      allowNull: false,
   },
});


if (process.env.NODE_ENV !== 'production') {
   // User seed
   console.log("\n#### User seed ####\n")
   bcrypt.hash("test01", 12, (_, passwordHash) => {
      User.create(({
         email: "test01@test.com",
         username: "test01",
         password: passwordHash,
      })).catch(console.error)
   })
}

export default User;