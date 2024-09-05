import Order from "./model";
import { IOrder } from "./types";

class OrderDao{
    async createOrder(order: IOrder){
        try{
            const newOrder = await Order.create(order)
            return newOrder
        }catch(error){
            throw Error((error as Error).message)
        }
    }

    async getOrderById(id: string){
        try{
            const order = await Order.findById(id)
            return order
        }catch(error){
            throw Error((error as Error).message)
        }
    }

    async getOrdersByUserId(userId: string){
        try{
            const orders = await Order.find({user_id: userId})
            return orders
        }catch(error){
            throw Error ((error as Error).message)
        }
    }
}

const orderDao = new OrderDao()
export default orderDao
