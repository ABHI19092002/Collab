import express from 'express';

const app = express();

app.use(express.json());

app.use('/api/v1/all',routes);

app.get('/loading',)

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