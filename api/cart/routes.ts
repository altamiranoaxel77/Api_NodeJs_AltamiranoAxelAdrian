import express from "express"
import cartController from "./controller"
import { authRoutes } from "../../middlewares/authRoutes"
const {addCart, getCarts, updateCart, deleteCart, confirmCart} = cartController
const cartRouter = express.Router()

cartRouter.use(authRoutes)

cartRouter.get("/getCarts", getCarts)
cartRouter.post("/addCart", addCart)
cartRouter.put("/updateCart/:id", updateCart)
cartRouter.delete("/deleteCart/:id", deleteCart)
cartRouter.post("/confirmCart", confirmCart)

export default cartRouter