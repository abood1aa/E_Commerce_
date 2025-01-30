import mongoose from "mongoose";
const couponSchena=new mongoose.Schema({
    code:{
        type:String,
        required:true,
        unique:true

    },
    expier:{
        type:Date,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
},
{
timeseries:true,
versionKey:false
})



const Coupon=mongoose.model('Coupon',couponSchena)
export default Coupon