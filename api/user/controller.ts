import { Request, Response } from "express"
import User from "./model"
import { userService } from "./service"

const {getUser, getUsers, createUser, loginUser, deleteUser, updateUser} = userService


class UserController {
    async createUser(req: Request, res: Response){
        try{
            const newUser = await createUser(req.body)
            return res.status(200).json(newUser)
        } catch(error){
            return res.status(400).json({error: (error as Error).message})
        }
    }

    async getUsers (req: Request, res: Response) {
        try{
            const users = await getUsers()
            if(!users){
                return res.status(400).json("Users not found")
            }
            return res.status(200).json(users)
        }catch(error){
            return res.status(400).json({error: "Users not found"})
        }
    }

    async getUser(req: Request, res: Response){
        try{
            const id = req.params.id
            const user = await getUser(id)
            if(!user){
                return res.status(400).json("User not found")
            }
            return res.status(200).json(user)
        }catch(error){
            return res.status(400).json({error: "User not found"})
        }
    }

    async deleteUser (req: Request, res: Response){
        const {id} = req.params
        try{
            const deletedUser = await deleteUser(id)
            if(!deletedUser){
                return res.status(400).json("Users not found")
            }
            return res.status(200).json(deletedUser)
        }catch(error){
            return res.status(400).json({error: "Error "})
        }
    }

    async updateUser (req: Request, res: Response){
        try{
            const {id} = req.params
            const updateData = req.body
            const updatedUser = await updateUser(id, updateData)
            if(!updatedUser){
                return res.status(400).json("User not found")
            }
            res.status(201).json(updatedUser)
        }catch(error){
            return res.status(400).json((error as Error).message)
        }
    }

    async loginUser(req: Request, res: Response){
        try{
            const token = await loginUser(req.body)
            return res.header("authtoken", token).status(200).json("Login successful")
        }catch(error){
            return res.status(400).json({error: (error as Error).message})
        }
    }

}

export const userController = new UserController()