import express from "express"
import categoryController from "./controller"
import { adminRoutes } from "../../middlewares/adminRoutes"

const {getCategories, createCategory, editCategory, deleteCategory} = categoryController

const categoryRouter = express.Router()

categoryRouter.get("/", getCategories)

categoryRouter.use(adminRoutes)

categoryRouter.post("/addCategory", createCategory)
categoryRouter.put("/updateCategory/:id", editCategory)
categoryRouter.delete("deleteCategory/:id", deleteCategory)

export default categoryRouter