const User = require('../models/schema/user') //import user model
const jwt = require('jsonwebtoken') //import jwt

const maxAge = 3*24*60*60; // set maxAge of token to 3 days
const createToken = (id) =>{
    return jwt.sign({id}, 'secret', {
        expiresIn: maxAge
    })
}

// function to handle errors
const handleErrors = (err) =>{
    console.log(err.message, err.code)
    let errors = {email : '', password : ''}

    //incorrect email
    if (err.message === 'incorrect email'){
        errors.email = 'that email is not registered'
    }

    //incorrect password
    if (err.message === 'incorrect password'){
        errors.password = 'that password is incorrect'
    }
    return errors
}

// user requests for login page
module.exports.login_get = (req,res) => {
    res.send('login page');
}

//Comfirming user details before logging in
module.exports.login_post = async (req,res) => {
    const {email, password} = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt',token, {httpOnly:true, maxAge: maxAge * 1000})
        res.status(200).json("Login successful")
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({errors})
    }
}