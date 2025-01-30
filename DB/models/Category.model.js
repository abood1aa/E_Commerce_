import mongoose, { Types } from "mongoose";

const categorySchema= new mongoose.Schema({
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
    }
    ,
    slug:{
   type:String,
   required:true,
   lowercase:true
    }
},{
    timestamps:true,
    versionKey:false
})

categorySchema.post('init',(doc)=>{
    if(  doc.image){
        doc.image= 'http://localhost:3003/uploads/category' + doc.image
    }
})



const Category=mongoose.model('Category',categorySchema)
export default Category