import { Request, Response } from "express";
import { ISearchParams } from "./types"
import productService from "./service";

const {getProduct, getProducts, createProduct, deleteProduct, editProduct} = productService

class ProductController {
    async getProduct(req: Request, res: Response){
        const {id} = req.params
        try{
            const product = await getProduct(id)
            return res.status(200).json(product)
        }catch (error) {
            return res.status(400). json({error})
        }
    }

    async getProducts(req: Request, res: Response){
        const searchParams: ISearchParams = req.query

        try{
            const products = await getProducts(searchParams)
            return res.status(200).json({products})
        } catch (error) {
            return res.status(400).json({error})
        }
    }

    async createProducts(req: Request, res: Response){
        const product = req.body
        try{   
            const newProduct = await createProduct(product)
            return res.status(200).json(newProduct)
        } catch(error){
            return res.status(500).json({error})
        }
    }

    async deleteProduct(req: Request, res: Response){
        const {id} = req.params
        try{
            const deletedProduct = await deleteProduct(id)
            if(!deleteProduct){
                return res.status(400).json("Product not found")
            }
            return res.status(200).json(deletedProduct)
        }catch(error){
            return res.status(400).json({error})
        }
    }

    async editProduct(req: Request, res: Response){
        const product = req.body
        const {id} = req.params
        try{
            const editedProduct = await editProduct(id, product)
            if(!editedProduct){
                return res.status(400).json("Product not found")
            }
            return res.status(200).json(editedProduct)
        }catch(error){
            return res.status(400).json({error})
        }
    }
}

const productController = new ProductController()

export default productController