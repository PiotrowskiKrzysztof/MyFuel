import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';

import User from '../models/user.js';

const signup = (req, res) => {
    User.findOne({ where : {
        email: req.body.email, 
    }})
    .then(dbUser => {
        if (dbUser) {
            return res.status(409).json({message: "email already exists"});
        } 

        if (!req.body.password) {
            return res.status(400).json({message: "password not provided"});
        }

        if (!req.body.email) {
            return res.status(400).json({message: "email not provided"});
        };
        
        bcrypt.hash(req.body.password, 12, (err, passwordHash) => {
            if (err) {
                return res.status(500).json({message: "couldnt hash the password"}); 
            } 

            return User.create(({
                email: req.body.email,
                username: req.body.username,
                password: passwordHash,
            }))
            .then((user) => {
                const {id, email, username} = user
                res.status(200).json({message: "user created", user: {id, email, username}});
            })
            .catch(err => {
                console.log(err);
                res.status(502).json({message: "error while creating the user"});
            });
        });
  
    })
    .catch(console.error);
}

const login = (req, res) => {
    User.findOne({ where : {
        email: req.body.email, 
    }})
    .then(dbUser => {
        if (!dbUser) {
            return res.status(404).json({message: "user not found"});
        }

        bcrypt.compare(req.body.password, dbUser.password, (err, compareRes) => {
            if (err) {
                return res.status(502).json({message: "error while checking user password"});
            }

            if (compareRes) { 
                const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '1h' });
                const {id, email, username} = dbUser
                return res.status(200).json({user: {id, email, username, token},  message: "user logged in"});
            }

            return res.status(401).json({message: "invalid credentials"});
        });
    })
    .catch(console.error);
}

const isAuth = (req, res) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        return res.status(401).json({ message: 'not authenticated' });
    };
    const token = authHeader.split(' ')[1];
    let decodedToken; 
    try {
        decodedToken = jwt.verify(token, 'secret');
    } catch (err) {
        return res.status(500).json({ message: err.message || 'could not decode the token' });
    };

    if (!decodedToken) {
        return res.status(401).json({ message: 'unauthorized' });
    }

    return res.status(200).json({ message: 'here is your resource' });
};

export { signup, login, isAuth };