import mongoose from 'mongoose'


let LoginSchema = new mongoose.Schema({
        username:{
        },
        password:{
        }, 
    },{
        timestamps: true
    })


    export const Login = mongoose.model('Login', LoginSchema)





