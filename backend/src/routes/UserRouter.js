import express from "express"

import { register } from "../controllers/UserController.js"

const userRouter = express.Router()

userRouter.post("register",register)
userRouter.post("login",register)
userRouter.post("logout",register)

export default userRouter