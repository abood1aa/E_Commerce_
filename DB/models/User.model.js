import mongoose from "mongoose";

const userScema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        lowercase:true,
        trim:true
    },
    email:{
     type:String,
     required:true,
     unique:true
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:['male','female'],
        default:'male'
    },
    roles:{
        type:String,
        enum:['User','Admin'],
        default:'User'
    },
    age:Number,
    isDelete:{
        type:Boolean,
        default : false
    },
    confirmEmail:{
        type:Boolean,
        default:false
    },
    code:{
type:Number
    },
    wishlist:[{
        type:mongoose.Types.ObjectId,
        ref:'Product',
        required:true
    }],
    addresses:[{
      city:String,
        street:String,
        phone:String,
    }]
},
{
    timestamps:true
})

const User = mongoose.model('User',userScema)

export default User