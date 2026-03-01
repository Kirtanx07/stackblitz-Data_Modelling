import mongoose, { Mongoose, mongo } from "mongoose"



const doctorSchema = mongoos.Mongoose.Schema(
    {name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        default:0,
    },
    workInHospitals:[{
        type: mongoos.schema.Types.ObjectId,
        ref:"Hospital"
    },]


    },
    {timestamp:true});

export const Docter = mongoose.model("Doctor",doctorSchema);