import mongoose from "mongoose";

 const dbconnection = ()=>{
  mongoose.connect('mongodb://localhost:27017/E-commerce').then(()=>{
    console.log('DB conected');
  }).catch(()=>{
    console.log(" DB failed");
  })
}

export default dbconnection