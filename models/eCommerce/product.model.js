import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true},
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
      ref: "User"
      },
      productImage:{
        type:String
      },
      price:{
        type:Number,
        default:0
      },
      stock:{
        type:Number,
        default:0
      },
      category:{
        type:mongoose.Schema.type.ObjectId,
        ref: "Category",
        required:true
      },
      owner:{
        type:mongoose.Schema.type.ObjectId,
        ref: "User"

      }
      

},{timestamp:true})

export const Product = mongoose.model("Product",productSchema )