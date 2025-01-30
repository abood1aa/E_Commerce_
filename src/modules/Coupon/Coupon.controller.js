import Coupon from "../../../DB/models/Coupon.js"
import asyncHandler from "../../middleware/asyncHandler.js"



export const getCoupons = asyncHandler(async (req, res, next) => {
    const coupons= await Coupon.find();
    if(!coupons){
        return res.json({message:"not found coupons"})
    }
    return res.status(200).json({ message: "success", coupons, status: 200 }); 

})
    
       
export const addCoupon = asyncHandler(async (req, res, next) => {
        const exist=await Coupon.findOne({code:req.body.code});
         if (exist)return res.json({message:"not found coupons"}) ;
         const coupon = await Coupon.create(req.body);
          return res.status(201).json( {message: "success", coupon, status: 201} )
       })




 export const updateCoupon = asyncHandler(async (req, res, next)=>{
            const coupon = await Coupon.findByIdAndUpdate(req.params._id,req.body,{new:true})
            if(!coupon){
                return res.json({message:"not found coupons"})
            }
            return res.json({message:"done",coupon})

          })


export const deleteCoupon = asyncHandler(async (req, res, next)=>{
            const coupon = await Coupon.findByIdAndDelete( req.params._id,{new:true})
            if(!coupon){
                return res.json({message:"not found coupons"})
            }
            return res.json({message:"done",coupon})

          })
                