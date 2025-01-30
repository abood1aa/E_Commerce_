import { Router } from "express";
import * as productController from './product.controller.js'
import { customValidation, uploadfile } from "../../middleware/uploadFile.js";
import  { auth,author } from "../../middleware/auth.js";
import roles from "../../middleware/roles.js";

const route=Router()

route.get('/getProduct',auth,productController.getProduct)
.post('/AddProduct',uploadfile(customValidation.image,'product').fields([{name:'mainImage',maxCount:1},{name:'coverImage',maxCount:3}]),productController.AddProduct)
.get('/getProducts',auth,author([roles.Admin]),productController.getProducts)
.put('/updateProduct/:_id',uploadfile(customValidation.image,'product').fields([{name:'mainImage',maxCount:1},{name:'coverImage',maxCount:3}]),productController.updateProduct)
.delete('/deleteProduct/:_id',productController.deleteProduct)


 export default route
