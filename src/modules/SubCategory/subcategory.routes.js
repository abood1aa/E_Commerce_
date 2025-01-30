import { Router } from "express";
import * as SubcategoryController from './subcategory.controller.js'
import validation from "../../middleware/Validation.js";
import validateSubcategory from "./subcategory.Validation.js";

const route=Router()

route.get('/getSubcategory/:id',SubcategoryController.getSubcategory)
.post('/AddSubCategory',SubcategoryController.AddSubCategory)
.get('/getSubcategories',SubcategoryController.getSubcategories)
.put('/updateSubCategory/:_id',validation(validateSubcategory),SubcategoryController.updateSubCategory)
.delete('/deleteSubCategory/:_id',SubcategoryController.deleteSubCategory)


 export default route
