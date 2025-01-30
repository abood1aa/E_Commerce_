import { Router } from "express";
import * as CartController from './cart.controller.js'
import { auth, author } from "../../middleware/auth.js";
import roles from "../../middleware/roles.js";





const route=Router()

route.post('/',auth,author([roles.User]),CartController.AddCart).
delete('/',auth,author([roles.User]),CartController.clearCart).
put('/:_id',auth,author([roles.User]),CartController.updatedQuantity).
delete('/:_id',auth,author([roles.User]),CartController.removeitemfromCart).
get('/',auth,author([roles.User]),CartController.getCart).
post('/applayCoupon',auth,author([roles.User]),CartController.applayCoupon)
// get('/',CartController.getCart)
// .delete('/:_id',auth,author([roles.User]),CartController.deleteCart)

export default route