import { Router } from "express";
import * as brandController from './brand.controller.js'

const route=Router()

route.get('/getBrand/:id',brandController.getBrand)
.post('/AddBrand',brandController.AddBrand)
.get('/getBrands',brandController.getBrands)
.put('/updateBrand/:_id',brandController.updateBrand)
.delete('/deleteBrand/:_id',brandController.deleteBrand)


 export default route
