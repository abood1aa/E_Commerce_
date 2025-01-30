import { Router } from "express";
import *as ws from './Address.controller.js'
import { auth, author } from "../../middleware/auth.js";
import roles from "../../middleware/roles.js";
const route=Router()

route
.post('/',auth,author([roles.User]),ws.createAddresses)
.delete('/',auth,author([roles.User]),ws.deleteAddress)


 export default route
