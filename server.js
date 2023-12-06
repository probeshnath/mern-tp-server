const express = require('express');
require('dotenv').config()
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router')
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(express.json())


// mount the router
app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)


app.get("/",(req,res)=>{
    res.status(200).send("This is my Home Route!!!")
})

// error middleware
app.use(errorMiddleware)

connectDB().then(() =>{
    app.listen(port, () =>{
        console.log(`server is running at port ${port}`)
    })
})

