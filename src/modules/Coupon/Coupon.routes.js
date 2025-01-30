import { Router } from "express";
import * as couponController from './Coupon.controller.js'
import { auth, author } from "../../middleware/auth.js";
import roles from "../../middleware/roles.js";

const route=Router()

route
.post('/',auth,author([roles.Admin]),couponController.addCoupon)
.get('/',couponController.getCoupons)
.put('/:_id',auth,author([roles.Admin]),couponController.updateCoupon)
.delete('/:_id',auth,author([roles.Admin]),couponController.deleteCoupon)


 export default route
