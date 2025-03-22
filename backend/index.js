const express =require('express');
require ('./Models/db');
const bodyParser=require('body-parser');
const cors =require('cors');
const AuthRouter=require('./Routes/AuthRouter');
const middleware=require('./Middlewares/AuthValidation');
// const Controllers=require('./Controllers/AuthController');

const app=express();
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.get('/', (req,res)=>{
    res.send("Hello from Node Server");
})

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);

 

app.listen(PORT, ()=>{
    
    console.log(`Server is running on port ${PORT}`);
})
  