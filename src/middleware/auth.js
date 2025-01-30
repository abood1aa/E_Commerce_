import jwt from "jsonwebtoken"
import asyncHandler from "./asyncHandler.js"
export const auth =asyncHandler( async(req ,res,next)=>{
    const authorization= req.headers.authorization
const token = authorization.split('pro__')[1]
const payload=jwt.verify(token,'ecomm')
console.log(payload);
if(!payload){
    return res.json({message:"invalid paylod"})
}
req.user=payload
next()
})

export const author = (roles)=>{
    return asyncHandler(async(req,res,next)=>{
        if(!roles.includes(req.user.roles)){
            return res.json({message:"authrized"})
        }
        next()
    })
}