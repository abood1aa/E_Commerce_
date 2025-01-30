import Review from "../../../DB/models/Review.js"
import asyncHandler from "../../middleware/asyncHandler.js"




export const getReviews = asyncHandler(async (req, res, next) => {
    const reviews= await Review.find();
    if(!reviews){
        return res.json({message:"not found coupons"})
    }
    return res.status(200).json({ message: "success", reviews, status: 200 }); 
})
    
       
export const addReview = asyncHandler(async (req, res, next) => {
    req.body.user=req.user._id
        const exist = await Review.find({product:req.body.product,user:req.user._id})
        if(exist.length>0){
            return res.json({message:"you already review on this product"})
        }
        const review=await Review.create(req.body);
        
        return res.status(200).json({ message: "success", review, status: 200 }); 
        
    })



 export const updateReview= asyncHandler(async (req, res, next)=>{
        const exist = await Review.findById(req.params._id)
        if(!exist){
            return res.json({message:"not found review "})
        }
        if(exist.user.toString()===req.user._id||req.user.rolse===rolse.Admin){

            const review = await Review.findByIdAndUpdate(req.params._id, req.body,{new:true})
            if(!review){
                return res.json({message:"not found review "})
            }
            return res.json({message:"done",review})
        }
        return res.json({message:"you are not allow to Updete this review"})

 })


export const deleteReview = asyncHandler(async (req, res, next)=>{
    const exist = await Review.findById(req.params._id)
    if(!exist){
        return res.json({message:"not found review "})
    }
    if(exist.user.toString()===req.user._id||req.user.rolse===rolse.Admin){
            const review = await Review.findByIdAndDelete(req.params._id,{new:true})
            if(!review){
                return res.json({message:"not found review"})
            }
            return res.json({message:"done",review})

          }
        })
                