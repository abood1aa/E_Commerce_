import Cart from "../../../DB/models/cart.model.js";
import Order from "../../../DB/models/Order.model.js";
import Product from "../../../DB/models/Product.model.js";
import asyncHandler from "../../middleware/asyncHandler.js";
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51QlWTyLlxit7oHI9JTIXS9jNfxAHffq0wWRbJMV2tMRGrWJVNvdaNvyHMuga9dqkNyYCwd1L8dcQdwGlcBCF04P600qxwYgUSx');

export const addCashOrder= asyncHandler(async(req,res,next)=>{
    let cart = await Cart.findById(req.params._id);
    console.log(cart);

    if (!cart) {

        return res.status(404).json({ message: "cart not found" });

    }
let totalOrderPrice= cart.totalAfterdiscount||cart.subtotal
let order = new Order ({
    user:req.user.id,
    orderItrms:cart.products,
    shippingAddress:req.body.shippingAddress,
    totalOrderPrice
})
await order.save()
res.json({message:"success",order})

let option = cart.CartItems.map((prod)=>{
    return ({
        updateOne:{
            "filter":{_id:prod.product},
            "update":{$inc:{sold:prod.quantity,stock:-prod.quantity}}
        }
    })
})
await Product.bulkWrite(option)

await Cart.findByIdAndDelete(_id)

})

export const getUserOrder= asyncHandler(async(req,res,next)=>{

let orders = await Order.findOne({user:req.user._id}).populate('orderItrms')

    res.json({message:"success",orders})

})



export const getAllOrders= asyncHandler(async(req,res,next)=>{

    let orders = await Order.find()
    
        res.json({message:"success",orders})
    
    })
       
   


export const chcekoutSession= asyncHandler(async(req,res,next)=>{
let session = await stripe.checkout.sessions.create({
    line_items:[
    {
        price_data:{
            currency:'bnb',
            unit_amount: totalOrderPrice*100,
            product_data:{
                name:req.user.name
            },
            quantity:1
        }
    }
    ],
    mode:'payment',
    success_url:"https://nodejs.org/en",
    cancel_url:"https://www.npmjs.com/package/stripe",
    customer_email:req.user.email,
    client_reference_id:req.params.id,
    metadata:req.body.shibingAdress
}) 

res.json({message:"success",session})

})




