import express from "express"
import productController from "./controller"

const {getProduct, getProducts, createProducts, deleteProduct, editProduct} = productController

const productRouter = express.Router()

productRouter.get("/", getProducts)
productRouter.get("/:id", getProduct)
productRouter.post("/addProduct", createProducts)
productRouter.delete("/deleteProduct/:id", deleteProduct)
productRouter.put("/editProduct/:id", editProduct)

export default productRouter