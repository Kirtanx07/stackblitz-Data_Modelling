import mongoose, { Schema } from "mongoose";

new mongoose.Schema(
    {user:{
        type:String,
        unique: true,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        unique: true,
        required:true,
        lowercase:true

    },
    password:{
        type:String,
        required:true
    }


},{timestamps:true})

export const User = mongoose.model("User",userSchema)