import { Request, Response } from "express";
import categoryService from "./service"


const {getCategories, createCategory, deleteCategory, editCategory} = categoryService
class CategoryController{
    async getCategories(req: Request, res: Response){
        try{
            const categories = await getCategories()
            if(!categories){
                return res.status(400).json("There are no categories yet")
            }
            return res.status(200).json(categories)
        }catch(error){
            return res.status(400).json((error as Error).message)
        }
    }

    async createCategory(req: Request, res: Response){
        const category = req.body
        try{
            const newCategory = await createCategory(category)
            return res.status(200).json(newCategory)
        }catch(error){
            return res.status(400).json((error as Error).message)
        }
    }
    
    async deleteCategory(req: Request, res: Response){
        const {id} = req.params
        try{
            const deletedCategory = await deleteCategory(id)
            if(!deletedCategory){
                return res.status(400).json("Category not found")
            }
            return res.status(200).json(deletedCategory)
        }catch(error){
            return res.status(400).json((error as Error).message)
        }
    }

    async editCategory(req: Request, res: Response){
        const {id} = req.params
        const categoryData = req.body
        try{
            const editedCategory = await editCategory(id, categoryData)
            if(!editedCategory){
                return res.status(400).json("Category not found")
            }
            return res.status(200).json(editedCategory)
        } catch(error){
            return res.status(400).json((error as Error).message)
        }
    }
}

const categoryController = new CategoryController()

export default categoryController
