import categoryDao from "./dao"
import { ICategory } from "./types"


const {getCategories, createCategory, deleteCategory, editCategory} = categoryDao

class CategoryService{
    async getCategories(){
        try{
            const categories = await getCategories()
            return categories
        }catch(error){
            throw Error((error as Error).message)
        }
    }

    async createCategory(category: ICategory){
        try{
            const newCategory = await createCategory(category)
            return newCategory
        }catch(error){
            throw Error((error as Error).message)
        }
    }

    async deleteCategory(id: string){
        try{
            const deletedCategory = await deleteCategory(id)
            return deletedCategory
        }catch(error){
            throw Error((error as Error).message)
        }
    }

    async editCategory(id: string, category: ICategory){
        try{
            const editedCategory = await editCategory(id, category)
            return editedCategory
        }catch(error){
            throw((error as Error).message)
        }
    }
}

const categotyService = new CategoryService()
export default categotyService