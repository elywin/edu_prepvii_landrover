const jwt = require('jsonwebtoken') //import jwt
const validation = require('../helpers/validation') //import validation module

const maxAge = 3*24*60*60; // set maxAge of token to 3 days

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
    res.send('login page');
}

//Validation and authentication
module.exports.login_post = async function (req,res) {
    const {email, password} = req.body;
    try {
        const user = await validation.auth(email, password);
        const token = createToken(user._id);
        res.cookie('jwt',token, {httpOnly:true, maxAge: maxAge * 1000})
        res.status(200).json("Login successful")
    } catch (err) {
        const error = handleErrors(err);
        res.status(400).json({error})
    }
}