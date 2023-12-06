const express = require('express');
const app = express();
const port = process.env.PORT || 5000;






app.get("/",(req,res)=>{
    res.status(200).send("This is my Home Route!!!")
})


app.listen(port, () =>{
    console.log(`server is running at port ${port}`)
})