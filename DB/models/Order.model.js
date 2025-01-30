import mongoose, { Types } from "mongoose";
const orderSchena=new mongoose.Schema({
    user:{
        type:Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },
    orderItrms:[{
        product:{
            type:Types.ObjectId,
            ref:"product",
            required:true,
            unique:true 
        },
        quntity:{
            type:Number,
            default:1
        },
        price:{
            type:Number,
            required:true,
            min:0
        }
   
    }],
   
    totalOrderPrice:{
        type:Number,
        min:0
    },
    shippingAddress:{
        city:String,
        street:String,
        phone:String,

    },
     
    paymentType:{
        type:String,
        enum:["cash","card"],
        default:"cash"
    },
    ispaid:{
        type:
        Boolean,
        default:false
    },
    paidAt:Date,
    isDelivered:{
        type:Boolean,
        default:false
    },
    DeliveredAt:Date,
    
},
{
timeseries:true,
versionKey:false
})



const Order=mongoose.model('Order',orderSchena)
export default Order