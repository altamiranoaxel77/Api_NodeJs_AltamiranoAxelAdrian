import { Request, Response } from "express"
import {cartService} from "./service"
import orderService from "../order/service"

const {createOrder} = orderService
const {addCart, getCarts, updateCart, deleteCart} = cartService

class CartController{
    async getCarts(req: Request, res: Response){
        try{
            const carts = await getCarts()
            if(!carts){
                return res.status(400).json("There are no carts yet")
            }
            return res.status(200).json({carts})
            
        }catch(error){
            return res.status(500).json({error})
        }
    }

    async addCart(req: Request, res: Response){
        const cart = req.body
        try{
            const newCart = await addCart(cart)
            return res.status(200).json(newCart)
        }catch(error){
            return res.status(500).json({error})
        }
    }
    async updateCart(req: Request, res: Response){
        const {id} = req.params
        const cartData = req.body
        try{
            const editedCart = await updateCart(id, cartData)
            if(!editedCart) {
                return res.status(400).json("Cart not found")
            }
            return res.status(200).json(editedCart)
        }catch(error){
            return res.status(500).json((error as Error).message)
        }
    }
    
    async deleteCart(req: Request, res: Response){
        const {id} = req.params
        try{
            const deletedCart = await deleteCart(id)
            if(!deletedCart){
                return res.status(400).json("Cart not found")
            }
            return res.status(200).json(deletedCart)
        }catch(error){
            return res.status(500).json((error as Error).message)
        }
    }


    async confirmCart(req: Request, res: Response){
        try{
            const cart = req.body
            const newOrder = await createOrder(cart)
            return res.status(200).json(newOrder)
        }catch(error){
            return res.status(500).json({error})
        }
}
}

const cartController = new CartController()
export default cartController