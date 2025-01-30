import User from "../../../DB/models/User.model.js";
import asyncHandler from "../../middleware/asyncHandler.js"




export const createAddresses = asyncHandler(async (req, res, next) => {
    const address = await User.findByIdAndUpdate( req.user._id , {
        $push: {addresses:req.body },
        
    }, {
        new: true
    })
  

   return res.status(201).json({ msg: "done", address })


})


export const deleteAddress = asyncHandler(async (req, res, next) => {
    const address = await User.findByIdAndUpdate( req.user._id , {
        $pull: { addresses:req.body },
        
    }, {
        new: true
    })
    


   return res.status(201).json({ msg: "done", address })

});