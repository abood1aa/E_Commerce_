import mongoose, { Types } from "mongoose";
const cartSchena=new mongoose.Schema({
    user:{
        type:Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },
    CartItems:[{ 
        product:{
            type:Types.ObjectId,
            ref:"product",
            required:true,
            unique:true 
        },
        quantity:{
            type:Number,
            default:1
        },
        price:{
            type:Number
        }
   
    }],
    totalCartPrice:{
        type:Number,
        min:0
    },
    discount:{
        type:Number,
        default:0
    },
    totalAfterdiscount:{
        type:Number,
        min:0
    }
},
{
timeseries:true,
versionKey:false
})



const Cart=mongoose.model('Cart',cartSchena)
export default Cart