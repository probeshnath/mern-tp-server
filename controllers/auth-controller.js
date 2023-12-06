const User = require("../models/user-model")
const bcrypt = require('bcryptjs');

const home = async ( req,res) =>{
    try {
        res.status(200).send("Welcome to thhe best serice of mern i love ")
    } catch (error) {
        console.log(error)
    }
}

const register = async (req,res) =>{
    try {
        // console.log(req.body)
        const {username,email,password,phone} = req.body;

        const userExist = await User.findOne({ email})

        if(userExist){
            return res.status(400).json({message: "Email Already Exist"})
        }

        // hash the password
        // const saltRound = 10;
        // const hast_password = await bcrypt.hash(password, saltRound)

      const result = await User.create({username,email,password ,phone})
       

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send({message: "page not found"})
    }
}

module.exports = {home,register}