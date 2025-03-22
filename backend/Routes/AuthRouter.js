const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const Router = require('express').Router();



//login Router
Router.post('/login',loginValidation,login);



//Signup Router
Router.post('/signup',signupValidation,signup);


module.exports=Router;