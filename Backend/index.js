import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

import authRouter from './routes/authRoutes'
import postRouter from './routes/postRoutes'

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/post',postRouter);

app.get('/',(req,res) => {
    res.send('Welcome');
})

const port = process.env.PORT || 5000;

const start = async() => {
    try {
        app.listen(port,()=>{
            console.log(`Server is listiong on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();