const User = require("../models/schema/schema");
const bcrypt = require('bcrypt');


//create user using post method
module.exports.signup_post= (req, res, next) => {
    //get the user from the user model
    User.find({
            email: req.body.email
        })
        .exec()
        //get the user email check if it exists
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "email exists"
                });
            } else {
                //password ecnryption with bcrypt
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });

                    } else {
                        const user = new User({
                            email: req.body.email,
                            password: hash
                        });
                        //save user created to database
                        user.save().then(result => {
                           // console.log(result);
                            res.status(201).json({
                                message: 'user created successfully'
                            });

                        }).catch(err => {
                           // console.log(err);
                            res.status(500).json({
                                error: err
                            });
                        });
                    }

                });
            }
        });

};


module.exports.signup_usr =  async (req, res) => {
    const user = await User.find();
    res.send(user);
  };
