import mongoos from 'mongoose'

const subTodo = new mongoos.Schema(
  {
    content:{
      type:String,
      required:true
    },

    complete: {
      type: Boolean,
      default:false
    },

    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
    ref: "User"
    }

},{timestamps:true})

export const SubTodo = mongoos.model("SubTodo",subTodoSchema)