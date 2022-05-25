import User from '../models/user.js';

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

export { getUser }