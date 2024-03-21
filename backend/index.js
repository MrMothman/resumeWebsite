import mongoose from 'mongoose'
import express from 'express'   
import dotenv from 'dotenv';

dotenv.config()


const app = express()



mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        console.log('listening on port', process.env.PORT)
    })
    .catch((error) => {
        console.log(error)
    })




