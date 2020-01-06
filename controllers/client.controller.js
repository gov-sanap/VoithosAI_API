const mongoose = require('mongoose');

const Client = mongoose.model('Client');

module.exports.register = (req, res, next) => {
    var client = new Client();
    client.fullName = req.body.fullName;
    client.email = req.body.email;
    client.password = req.body.password;
    client.save((err, doc) => {
        if (!err){
            console.dir(doc);
            res.send(doc);  
        }
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }
    });
}