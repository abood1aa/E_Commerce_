import User from "../../../DB/models/User.model.js";
import asyncHandler from "../../middleware/asyncHandler.js"




export const createWishList = asyncHandler(async (req, res, next) => {
    const newWishList = await User.findByIdAndUpdate( req.user._id , {
        $addToSet: { wishlist:req.body.product },
        
    }, {
        new: true
    })
  
    console.log(req.body.product);

   return res.status(201).json({ msg: "done", newWishList })


})


export const deleteWishList = asyncHandler(async (req, res, next) => {
    const WishList = await User.findByIdAndUpdate( req.user._id , {
        $pull: { wishlist:req.body.product },
        
    }, {
        new: true
    })
    console.log(WishList);


   return res.status(201).json({ msg: "done", WishList })

});