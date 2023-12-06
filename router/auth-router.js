const express = require('express');
const router = express.Router();


// router.get("/",(req,res)=>{
//     res.status(200).send("This is my Home Route using router   .....!!!")
// })

// or
router.route("/").get((req,res)=>{
    res.status(200).send("This is my Home Route using router  test .....!!!")
})

router.route("/register").get((req,res) =>{
    res.status(200).send("Register page...")
})


module.exports = router;