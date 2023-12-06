const express = require('express');
const authcontrollers = require('../controllers/auth-controller');
const validate = require('../middlewares/validate-middleware');
const {signupSchema, signInSchema} = require('../validators/auth-validator');
const router = express.Router();


// router.get("/",(req,res)=>{
//     res.status(200).send("This is my Home Route using router   .....!!!")
// })

// or
router.route("/").get(authcontrollers.home)

router.route("/register").post(validate(signupSchema), authcontrollers.register)
router.route("/login").post(validate(signInSchema) ,authcontrollers.login)


module.exports = router;