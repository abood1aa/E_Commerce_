import slugify from "slugify"
import SubCategory from "../../../DB/models/SubCategory.model.js"
import asyncHandler from "../../middleware/asyncHandler.js"



export const AddSubCategory=asyncHandler(async(req,res,next)=>{
    const {name,category} = req.body
        const slug=slugify(name)  
        const subCategory= await SubCategory.create({name,slug,category})
    
    return res.json({message:"done", subCategory})
    }

)



export const getSubcategory=asyncHandler(async(req,res,next)=>{
    const subCategory= await SubCategory.findById(req.params.id).populate('category')
    return !subCategory?
    res.json("not found"):
    res.json({message:"done", subCategory})


})


export const getSubcategories=asyncHandler(async(req,res,next)=>{
    const subCategories= await SubCategory.find().populate('category')
    return subCategories.length==0?
    res.json("not found"):
    res.json({message:"done",subCategories})
})




export const updateSubCategory=asyncHandler(async(req,res,next)=>{
    const {name,category}=req.body
    const slug=slugify(name)  
    const subCategory= await SubCategory.findByIdAndUpdate(req.params._id,{name,category,slug},{new:true}).populate('category')
    return !subCategory?
    res.json("not found"):
    res.json({message:"done", subCategory})

})


export const deleteSubCategory=asyncHandler(async(req,res,next)=>{
    const subCategory= await SubCategory.findByIdAndDelete(req.params._id)
    return !subCategory?
    res.json("not found"):
    res.json({message:"done", subCategory})

})





