import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../../../DB/models/User.model.js";
import { SendEmal } from "../../email/email.js";
import asyncHandler from "../../middleware/asyncHandler.js";
export const SignUp = asyncHandler(async(req,res,next)=>{
    const { email,password}= req.body
    const user= await User.findOne({email})
    if(user){
        return res.json({message:"email aready existed"})
    }
    req.body.password = bcrypt.hashSync(password,8)
    const newuser = await User.insertMany(req.body)
    SendEmal(req.body.email)
    return res.json({message:"done",newuser})
})



export const logIn = asyncHandler(async(req,res)=>{
    const {email,password}= req.body
const user= await User.findOne({email})
console.log(user);
if(!user){
    return res.json({message:"invalid email or passwrod"})
}
const match = bcrypt.compareSync(password,user.password)
console.log(match);
if(!match){
return res.json({message:"invalid email or passwrod"})
}
const token = jwt.sign({email,_id:user._id,roles:user.roles},'ecomm')
return res.json({message:"done",token })
})