import mongoose, { Types } from "mongoose";

const subcategorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
       unique:true,
       minLength:3,
       maxLength:55,
    },
    image:String,
    createdBy:{
    type:Types.ObjectId,
    // required:true
    // ref:'User'
    },
    updatedBy:{
        type:Types.ObjectId,
        // ref:'User'
    },
    category:{
        type:Types.ObjectId,
        required:true,
        ref:'Category'
    },
    slug:{
   type:String,
   required:true,
   lowercase:true
    }
},{
    timestamps:true,
    versionKey:false
})


const Subcategory=mongoose.model('Subcategory',subcategorySchema)
export default Subcategory