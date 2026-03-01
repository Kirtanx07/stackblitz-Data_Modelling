import mongoose, { Mongoose, mongo } from "mongoose"

const hospitalSchema = mongoos.Mongoose.Schema(
    {name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    specializedIn:[{
        type:String
    }]

    },
    {timestamp:true});

export const Hospital = mongoose.model("Hospital",hospitalSchemaSchema);