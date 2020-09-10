const User = require("../models/schema/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); //import jwt
const validation = require('../helpers/validation'); //import validation module


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
                            //error: err
                            message:"password is required"
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
    res.json({user:user});
  };

  const maxAge = 3*24*60*60;

  //Creating a jwt token
const createToken = (id) =>{
    return jwt.sign({id}, process.env.SECRET_KEY, {
        expiresIn: maxAge
    })
}

// function to handle errors
const handleErrors = (err) =>{
    let error = {}

    //incorrect email
    if (err.message === 'incorrect email'){
        error = 'that email is not registered'
    }

    //incorrect password
    if (err.message === 'incorrect password'){
        error = 'that password is incorrect'
    }
    return error
}

// user requests for login page
module.exports.login_get = (req,res) => {
    res.json({message:'login page'});
}

//Validation and authentication
module.exports.login_post = async function (req,res) {
    const {email, password} = req.body;
    try {
        const user = await validation.auth(email, password);
        const token = createToken(user._id);
        res.cookie('jwt',token, {httpOnly:true, maxAge: maxAge * 1000})
        res.status(200).json({message:"Login successful"})
    } catch (err) {
        const error = handleErrors(err);
        res.status(400).json({error})
    }
}
