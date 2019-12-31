const User = require("../../DB/models/user");
const { errorHandler } = require("../../Helpers/dbErrorHandler");

exports.getUserById = (req, res, next, id) => {
    User.findById(id).execute((err, user) => {
        if(err || !user) {
            res.status(400).json({error: 'No user found'})
        }
        req.profile = user
        next();
    })
}