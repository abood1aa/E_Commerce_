import { Router } from "express";
import *as ws from './wishList.controller.js'
import { auth, author } from "../../middleware/auth.js";
import roles from "../../middleware/roles.js";
const route=Router()

route
.post('/',auth,author([roles.User]),ws.createWishList)
.delete('/',auth,author([roles.User]),ws.deleteWishList)


 export default route
