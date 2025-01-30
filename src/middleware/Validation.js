const validation= (schema)=>{
    return (req,res,next)=>{

        let data = {
            ...req.body, ...req.params, ...req.query,
        }
       
       
        const {error}= schema.validate(
           data, {abortEarly:false}
        )
        if(error){
            return res.status(400).json({message:"validation error",error:error.details})
        }
        return next()
    }
}
export default validation