import User from '../models/user.js';
import bcrypt from 'bcryptjs';

const getUser = (req, res) => {
    return User.findOne({ where : {
        id: req.params.userId, 
    }}).then(dbUser => {
        if (!dbUser) {
            return res.status(404).json({message: "user not found"});
        }

        const {id, email, username} = dbUser
        return res.status(200).json({user: {id, email, username}});
    }).catch(err => {
        console.error(err);
        return res.status(502).json({message: "error while fetching the user"});
    });
}

const updateUser = async (req, res) => {
    return User.findOne({ where : {
        id: req.body.id, 
    }}).then(async dbUser => {
        if (!dbUser) {
            return res.status(404).json({message: "user not found"});
        }
        
        if (req.body.email) {
            dbUser.email = req.body.email
        }

        if (req.body.password && req.body.password.length() >= 6) {
            bcrypt.hash(req.body.password, 12, (err, passwordHash) => {
                if (err) {
                    return res.status(500).json({message: "couldnt hash the password"}); 
                } 
    
                dbUser.password = passwordHash;
            });
        }

        await dbUser.save();

        const {id, email, username} = dbUser
        return res.status(200).json({user: {id, email, username}});
    }).catch(err => {
        console.error(err);
        return res.status(502).json({message: "error while updating the user"});
    });
}


export { getUser, updateUser }