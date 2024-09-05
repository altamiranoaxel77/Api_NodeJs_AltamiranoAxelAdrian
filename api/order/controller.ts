import {Request, Response} from "express"
import orderService from "./service"
import {IOrder} from "./types"

const {getOrdersByUserId,getOrderById, createOrder} = orderService

class OrderController{
    async createOrder(req: Request, res: Response){
        try{
            const order: IOrder = req.body
            const newOrder = await createOrder(order)
            return res.status(200).json(newOrder)
        }catch(error){
            return res.status(400).json((error as Error).message)
        }
    }
    async getOrdersByUserId(req: Request, res: Response){
        try{
            const {UserId} = req.params
            const orders = await getOrdersByUserId(UserId)
            if(!orders){
                return res.status(400).json("There are no orders registered for that client")
            }
            return res.status(200).json(orders)
        }catch(error){
            return res.status(400).json((error as Error).message)
        }
    }
    async getOrderById(req: Request, res: Response){
        try{
            const {id} = req.params
            const order = await getOrderById(id)
            if(!order){
                return res.status(400).json("Order not found")
            }
            return res.status(200).json(order)
        } catch(error){
            return res.status(400).json((error as Error).message)
        }
    }

}

const orderController = new OrderController()

export default orderController