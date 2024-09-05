import Category from './model';
import { ICategory } from "./types"

class CategoryDao{
    async getCategories(){
        try{
            const categories = await Category.find()
            return categories
        }catch(error){
            throw Error((error as Error).message)
        }
    }

    async createCategory(category : ICategory){
        try{
            const newCategory = await Category.create(category)
            return newCategory
        }catch(error){
            throw Error((error as Error).message)
        }
    }

    async deleteCategory(id: string){
        try{
            const deletedCategory = await Category.findByIdAndDelete(id)
            return deletedCategory
        }catch(error){
            throw Error((error as Error).message)
        }
    }

    async editCategory(id: string, category: ICategory){
        try{
            const editedCategory = await Category.findByIdAndUpdate(id, category, {new: true})
            return editedCategory
        }catch(error){
            throw Error((error as Error).message)
        }
    }
}

const categoryDao = new CategoryDao()

export default categoryDao