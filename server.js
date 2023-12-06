const express = require('express');
require('dotenv').config()
const router = require('./router/auth-router');
const connectDB = require('./utils/db');
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(express.json())


// mount the router
app.use("/api/auth", router)


app.get("/",(req,res)=>{
    res.status(200).send("This is my Home Route!!!")
})

connectDB().then(() =>{
    app.listen(port, () =>{
        console.log(`server is running at port ${port}`)
    })
})

