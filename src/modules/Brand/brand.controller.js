import slugify from "slugify"
import Brand from "../../../DB/models/Brand.model.js"
import asyncHandler from "../../middleware/asyncHandler.js"



export const AddBrand=asyncHandler(async(req,res,next)=>{
    const {name} = req.body
        const slug=slugify(name)  
        const brand= await Brand.create({name,slug})
    
    return res.json({message:"done", brand})
    }

)



export const getBrand=asyncHandler(async(req,res,next)=>{
    const brand= await Brand.findById(req.params.id)
    return !brand?
    res.json("not found"):
    res.json({message:"done", brand})

})


export const getBrands=asyncHandler(async(req,res,next)=>{
    const brands= await Brand.find()
    return brands.length==0?
    res.json("not found"):
    res.json({message:"done",brands})
})




export const updateBrand=asyncHandler(async(req,res,next)=>{
    const {name}=req.body
    const slug=slugify(name)  
    const brand= await Brand.findByIdAndUpdate(req.params._id,{name,slug},{new:true})
    return !brand?
    res.json("not found"):
    res.json({message:"done", brand})

})


export const deleteBrand=asyncHandler(async(req,res,next)=>{
    const brand= await Brand.findByIdAndDelete(req.params._id)
    return !brand?
    res.json("not found"):
    res.json({message:"done", brand})

})





