import { Router } from "express";
import { logIn, SignUp } from "./user.controller.js";
import validation from "../../middleware/Validation.js";
import { userValidationSchema } from "./UserValidation.js";
const route =Router()

route.post('/signUp',validation(userValidationSchema),SignUp)
.post('/logIn',logIn)

 export default route
