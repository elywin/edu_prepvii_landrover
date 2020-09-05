const User = require('../models/schema/user') //import user model
const jwt = require('jsonwebtoken') //import jwt


const maxAge = 3*24*60*60; // set maxAge of token to 3 days
const createToken = (id) =>{
    return jwt.sign({id}, 'secret', {
        expiresIn: maxAge
    })
}

const handleErrors = (err) =>{
    console.log(err.message, err.code)
    let errors = {email : '', password : ''}

    //incorrect email
    if (err.messsage === 'incorrect email'){
        errors.email = 'that email is not registered'
    }

    //incorrect password
    if (err.messsage === 'incorrect password'){
        errors.password = 'that password is incorrect'
    }
    return errors
}



// user requests for login page
module.exports.login_get = (req,res) => {
    res.send('login page');
}

//Comfirming user details after logging in
module.exports.login_post = async (req,res) => {
    const {email, password} = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt',token, {httpOnly:true, maxAge: maxAge * 1000})
        res.status(200).json({user: user._id})
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({errors})
    }
}