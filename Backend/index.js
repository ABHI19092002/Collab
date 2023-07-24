import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
import connectDB from './db/connect.js';


import authRouter from './routes/authRoutes.js'
import postRouter from './routes/postRoutes.js'
app.use(express.json())
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/post',postRouter);

app.get('/',(req,res) => {
    res.send('Welcome');
})

const port = process.env.PORT || 5000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port,()=>{
            console.log(`Server is listiong on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();