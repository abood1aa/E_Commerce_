
 
 const asyncHandler =(fn)=>{
    return(req,res,next)=>{
        fn(req,res,next).catch((error)=>{
            return res.status(500).json({
                message:"catch erorr",
                error:error.message,
                status:599
            })
        })
    }
     }
     export default asyncHandler