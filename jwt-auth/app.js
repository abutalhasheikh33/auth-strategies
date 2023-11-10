const dotenv = require('dotenv')
dotenv.config({ path: './.env' });
const express = require('express');
const connectDB = require('./conn')


const app = express();
connectDB();

const userRouter = require('./routers/userRouter');
const errorControllers = require('./controllers/errorControllers');


app.use(express.json())
app.use("/auth/v1",userRouter)
app.use(errorControllers)


app.listen(3000,()=>{
    console.log("Listening");
})