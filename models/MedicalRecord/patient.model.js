import mongoose, { Mongoose, mongo } from "mongoose"

const patientSchema = mongoos.Mongoose.Schema(
    {name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["M","F","O"]
    },
    admitedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    },

    diagonsedWith:{
        type:String,
        required:true
    }
    },
    {timestamp:true});

export const Paitent = mongoose.model("Paitent",patientSchemaSchema);