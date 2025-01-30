import express from 'express'
import bootstrap from './src/bootstrap.js'
import User from './DB/models/User.model.js'
import jwt from "jsonwebtoken"
const app = express()


bootstrap(app,express)


app.get('/verify/:token',async(req,res)=>{
    jwt.verify(req.params.token,'Abod56321',async(err,payload)=>{
        if(err)return res.send(err )

        await User.findOneAndUpdate({email:payload.email},{confirmEmail:true})
        res.json({message : "success",email:payload.email}) 
    })
 
})

app.listen(3008,()=>{
    console.log('server done');
})