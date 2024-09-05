import express from "express"
import orderController from "./controller"

const orderRouter = express.Router()
const {createOrder, getOrdersByUserId, getOrderById} = orderController


orderRouter.get("/:id", getOrderById)
orderRouter.get("/orderHistory/:id", getOrdersByUserId)
orderRouter.post("/confirmOrder", createOrder)

export default orderRouter