import Cart from "../../../DB/models/cart.model.js";
import Coupon from "../../../DB/models/Coupon.js";
import Product from "../../../DB/models/Product.model.js";
import asyncHandler from "../../middleware/asyncHandler.js";

function calctotalprice(cart) {
    cart.total = cart.CartItems.reduce((prev, item) => prev + item.quantity * item.price, 0);
}

export const AddCart = asyncHandler(async (req, res, next) => {

    let userCart = await Cart.findOne({ user: req.user._id });  

    const product = await Product.findById(req.body.product);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    if (req.body.quantity > product.stock) {
        return res.status(400).json({ message: "Not enough stock available" });
    
    }


    if (!userCart) {
        const newCart = await Cart.create({
            user: req.user._id,
            CartItems: [req.body],
        });
        calctotalprice(newCart); 
        return res.json({ message: "Cart created", cart: newCart });
    }

    let existingItem = userCart.CartItems.find(
        (item) => item.product.toString() === req.body.product
    );

    if (existingItem) {
        existingItem.quantity += req.body.quantity || 1;

        if (existingItem.quantity > product.stock) {
            return res.status(400).json({ message: "Not enough stock available" });
        }
    } else {
        userCart.CartItems.push(req.body);
    }

    calctotalprice(userCart);

    await userCart.save();
    res.json({ message: "Cart updated successfully", cart: userCart });
});


export const updatedQuantity = asyncHandler(async (req, res, next) => {

    let cart = await Cart.findOne({user:req.user._id})
    let item = cart.CartItems.find(item => item.product == req.params._id)
     if(!item)
        return res.status(404).json({ message: "Product not found" });
     

     item.quantity= req.body.quantity
     calctotalprice(cart)
     await cart.save()

     res.json({message:"done",cart})
});




export const removeitemfromCart = asyncHandler(async (req, res, next) => {

   let cart = await Cart.findOneAndUpdate({ user: req.user._id },
    {$pull:{CartItems:{_id:req.params._id}}},{new:true})
    calctotalprice(cart)
    await cart.save()
    if (!cart) {
        return  res.json({message:"Cart not found"})
      }
     res.json({message:"done",cart})

});
export const getCart = asyncHandler(async (req, res, next) => {

    let cart = await Cart.findOne({ user: req.user._id })
     if (!cart) {
         return  res.json({message:"Cart not found"})
       }
      res.json({message:"done",cart})
 
 });


 export const clearCart = asyncHandler(async (req, res, next) => {

    let cart = await Cart.findOneAndDelete({ user: req.user._id })
     if (!cart) {
         return  res.json({message:"Cart not found"})
       }
      res.json({message:"done",cart})
 
 });

 export const applayCoupon = asyncHandler(async (req, res, next) => {

    let coupon = await Coupon.findOne({ code: req.body.code, expier:{$gte:Date.now()}})

     if (!coupon) {
         return  res.json({message:"oops no coupon found"},404)

       }
       let cart = await Cart.findOne({ user: req.user._id })
cart.totalAfterdiscount =
 cart.totalCartPrice - (cart.totalCartPrice * coupon.discount)/100
 cart.discount= coupon.discount
 await cart.save()

      res.json({message:"done",cart})
 
 });



