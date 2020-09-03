const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../models/user");//import user model

//create user using post method
router.post("/signup", (req, res, next) => {

    //password ecnryption with bcrypt
    bcrypt.hash(req.body.password, 10, (err,hash)=>{
        if(err){
            return res.status(500).json({
                error:err
            });

        }else{
            const user = new User({
                email:req.body.email,
                password:hash
                });
                //save user created to database
                user.save().then(result =>{
                    console.log(result);
                    res.status(201).json({
                        message:'user created successfully'
                    });
               
            }).catch(err =>{
                console.log(err);
                res.status(500).json({
                    error:err
                });
            });
        }
   
    });
});

module.exports = router;