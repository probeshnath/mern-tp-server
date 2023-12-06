const express = require('express');
const authcontrollers = require('../controllers/auth-controller');
const router = express.Router();


// router.get("/",(req,res)=>{
//     res.status(200).send("This is my Home Route using router   .....!!!")
// })

// or
router.route("/").get(authcontrollers.home)

router.route("/register").get(authcontrollers.register)


module.exports = router;