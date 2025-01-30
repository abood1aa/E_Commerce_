import { Router } from "express";
import * as categoryController from './ctegory.controller.js'
import { customValidation, uploadfile } from "../../middleware/uploadFile.js";
import { addCategorySchema } from "./category.Validation.js";
import validation from "../../middleware/Validation.js";

const route=Router()

route.get('/getcategory/:id',categoryController.getcategory)
.post('/AddCategory',uploadfile(customValidation.image,'category').single('image'),validation(addCategorySchema),categoryController.AddCategory)
.get('/getcategorys',categoryController.getcategorys)
.put('/updateCategory/:_id',uploadfile(customValidation.image,'category').single('image'),categoryController.updateCategory)
.delete('/deleteCategory/:_id',categoryController.deleteCategory)


 export default route
