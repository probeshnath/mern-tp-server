const User = require("../models/user-model")
const bcrypt = require('bcryptjs');

const home = async ( req,res) =>{
    try {
        res.status(200).send("Welcome to thhe best serice of mern i love ")
    } catch (error) {
        console.log(error)
    }
}

//  register user
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
       

        res.status(201).send({message: "Registration Successful", token: await result.generateToken(), userId: result._id.toString() })

    } catch (error) {
        res.status(500).send({message: "page not found"})
    }
}

// login user
const login = async(req,res) =>{
try {
    const {email,password} = req.body;

    const userExist = await User.findOne({ email})
    console.log(userExist)

    if(!userExist){
        return res.status(400).json({message: "Invalid Credentials"})
    }

    // const user = await bcrypt.compare(password, userExist.password)
    const user = await userExist.comparePassword(password)

    if(user){
        res.status(200).send({message: "Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString() })
    }else{
        res.status(401).json({message: "Invalid email or password"})
    }


} catch (error) {
    res.status(500).send({message: "server error"})
}
}

module.exports = {home,register,login} 