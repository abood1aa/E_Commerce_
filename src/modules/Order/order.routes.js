import { Router } from "express";
import * as OrderController from './order.controller.js'
import { auth, author } from "../../middleware/auth.js";
import roles from "../../middleware/roles.js";

const route=Router()

 route
 .post('/:id',OrderController.addCashOrder)
 .post('/checkout/:id',auth,author([roles.User]),OrderController.chcekoutSession)
 .get('/:id',auth,author([roles.User]),OrderController.getUserOrder)
.get('/',auth,author([roles.Admin]),OrderController.getAllOrders)

 export default route
