import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';

import User from '../models/user.js';

const signup = (req, res, next) => {
    // TODO
    console.log("signup");
}

const login = (req, res, next) => {
    // TODO
    console.log("login");
}

const isAuth = (req, res, next) => {
    // TODO
    console.log("isAuth");
};

export { signup, login, isAuth };