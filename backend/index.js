import mongoose from 'mongoose'
import express from 'express'   
import dotenv from 'dotenv';
import router from './routes/loginRoutes.js'
import cors from 'cors';

dotenv.config();


const app = express();

app.use(cors());

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        console.log('listening on port', process.env.PORT)
    })
    .catch((error) => {
        console.log(error)
    })

    app.use('/api', router);

    app.listen(process.env.PORT, () => {
        console.log('listening on port', process.env.PORT)
    })


