import { Router } from "express";
import * as ReviewController from './review.controller.js'
import { auth, author } from "../../middleware/auth.js";
import roles from "../../middleware/roles.js";

const route=Router()

route
.post('/',auth,author([roles.User]),ReviewController.addReview)
.get('/',ReviewController.getReviews)
.put('/:_id',auth,author([roles.User,roles.Admin]),ReviewController.updateReview)
.delete('/:_id',auth,author([roles.User,roles.Admin]),ReviewController.deleteReview)


 export default route
