import slugify from "slugify"
import Category from "../../../DB/models/Category.model.js"
import asyncHandler from "../../middleware/asyncHandler.js"



export const AddCategory=asyncHandler(async(req,res,next)=>{
   
    const {name} = req.body
        const slug=slugify(name)  
        const category= await Category.create({name,slug,image:req.file?.filename})
        console.log(req.file);

    return res.json({message:"done", category})
    
     }

)




export const getcategory=asyncHandler(async(req,res,next)=>{
    const category= await Category.findById(req.params.id)
    return !category?
    res.json("not found"):
    res.json({message:"done", category})

})


export const getcategorys=asyncHandler(async(req,res,next)=>{
    const categoryies= await Category.find()
    return categoryies.length==0?
    res.json("not found"):
    res.json({message:"done",categoryies})
})




export const updateCategory=asyncHandler(async(req,res,next)=>{
    const {name}=req.body
    const slug=slugify(name)  
    const category= await Category.findByIdAndUpdate(req.params._id,{name,slug,image:req.file?.filename},{new:true})
    return !category?
    res.json("not found"):
    res.json({message:"done", category})

})


export const deleteCategory=asyncHandler(async(req,res,next)=>{
    const category= await Category.findByIdAndDelete(req.params._id)
    return !category?
    res.json("not found"):
    res.json({message:"done", category})

})





