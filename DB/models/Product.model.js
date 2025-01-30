import mongoose ,{Types} from "mongoose";

const productSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
       unique:true,
       minLength:3,
       maxLength:55,
    },
    slug:{
        type:String,
        required:true,
        lowercase:true
         },
    description:{
        type:String,
        required:true,
        trim:true,
       unique:true,
       minLength:3,
       maxLength:1500,
    },
    mainImage:String,
    coverImage:[String],
    price:{
        type:Number,
        required:true,
        min:[0]
    },
    priceAfterDiscount:{
        type:Number,
        min:[0]
    },
    stock:{
        type:Number,
        required:true,
        min:[0]
    },
    sold:{
        type:Number,
        min:[0],
        default:0
    },
    rateCount:{
        type:Number,
        min:[0],
        default:0
    },
    rateAvrage:{
        type:Number,
        min:[0],
        default:0
    },

    createdBy:{
    // type:Types.ObjectId,
    // required:true,
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
    subcategory:{
        type:Types.ObjectId,
        required:true,
        ref:'Subcategory'
    },
    brand:{
        type:Types.ObjectId,
        required:true,
        ref:'Brand'
    },
   
},{
    timestamps:true,
    versionKey:false,
    toJSON:{virtuals:true}
})
productSchema.post('init',(doc)=>{
    if(  doc.mainImage){
        doc.mainImage = 'http://localhost:3003/uploads/product/' + doc.mainImage
    }
    
     let data=   doc.coverImage.map (element=> `http://localhost:3003/uploads/product/${element}`)
    doc.coverImage=data
})
productSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'product',
    justOne: true
})
productSchema.pre("find",function(){
     this.populate("reviews")
})


const product=mongoose.model('product',productSchema)
export default product