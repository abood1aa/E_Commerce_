import slugify from "slugify"
import Product from "../../../DB/models/Product.model.js"
import asyncHandler from "../../middleware/asyncHandler.js"
import Apifeatures from "../../utils/apiFeatures.js"

export const AddProduct=asyncHandler(async(req,res,next)=>{
    req.body.mainImage=req.files.mainImage[0].filename
    req.body.coverImage=req.files.coverImage.map(element=>element.filename)
     req.body.slug=slugify(req.body.title)  
        const product= await Product.insertMany(req.body)
    
    return res.json({message:"done", product})
    }

)



export const getProduct=asyncHandler(async(req,res,next)=>{
    
    const product= await Product.findById(req.params.id).populate([
        {
            path:'category'
        },
        {
            path:'subcategory'
        },
        {
            path:'brand'
        },
    ])
    return !product?
    res.json("not found"):
    res.json({message:"done", product})

})


export const getProducts=asyncHandler(async(req,res,next)=>{
    let Apifeature= new Apifeatures(Product.find(),req.query)
    Apifeature = Apifeature.pagination().sort().search().fields().filter()
    const products= await Apifeature.mongooseQuery
    return products.length==0?
    res.json("not found"):
    res.json({message:"done",products})
})


export const updateProduct=asyncHandler(async(req,res,next)=>{
    req.body.mainImage=req.files?.mainImage[0].filename
    req.body.coverImage=req.files?.coverImage.map(element=>element.filename)
    req.body.slug=slugify(req.body.title)  
    const product= await Product.findByIdAndUpdate(req.params._id,req.body,{new:true})
    return !product?
    res.json("not found"):
    res.json({message:"done", product})

})


export const deleteProduct=asyncHandler(async(req,res,next)=>{
    const product= await Product.findByIdAndDelete(req.params._id)
    return !product?
    res.json("not found"):
    res.json({message:"done", product})

})





