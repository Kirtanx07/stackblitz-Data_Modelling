import mongoose, { Mongoose } from "mongoose"

const orderTtemsSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.types.ObjectID,
            ref:"Product"
        },
        quantity:{
            type:Number,
            required:true
        }
        

    })

const orderSchema = new  mongoose.Schema(
    {orderprice:{
        type:Number,
        required:true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderitems:{
        type:[orderTtemsSchema]
    },
    address:{
        type:String,
        required:true
    },
    Status:{
        type: String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    },

    },{timestamps:true})

    export const Order = mongoose.model("order", orderSchema)