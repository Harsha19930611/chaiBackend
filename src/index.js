//require ('dotenv').config({path: './env'})
import dotenv from "dotenv"
//import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`app is listening at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db conneciton failed");
    app.on("error",(error)=>{
        console.log("Err:", error);
        throw error
    })
})



/*
import express from "express"
const app = express()

;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("Err", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR: ", error)
        throw error
    }
})()
    */