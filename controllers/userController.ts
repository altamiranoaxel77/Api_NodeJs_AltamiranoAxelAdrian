import { Request, Response } from "express";
import User from "../models/user";

class UserController {
    async createUser(req: Request, res: Response){
        try{
            const newUser = await User.create(req.body)
            return res.status(200).json(newUser)
        } catch(error){
            console.log(error)
        }
    }

    async getUsers (req: Request, res: Response) {
        try{
            const users = await User.find()
            return res.status(200).json(users)
        }catch(error){
            console.log(error)
        }
    }

    async getUser(req: Request, res: Response){
        try{
            const {id} = req.params
            const user = await User.findById(id)
            res.status(200).json(user)
        }catch(error){
            console.log(error)
        }
    }

    async deleteUser (req: Request, res: Response){
        try{
            const {id} = req.params
            const user = await User.findByIdAndDelete(id)
            if(!user) {
                return res.status(404).send('Usuario no encontrado')
            }
            res.send('Usuario eliminado correctamente')
            return res.status(200).json(user)
        }catch(error){
            console.log(error)
        }
    }

    async updateUser (req: Request, res: Response){
        try{
            const {id} = req.params
            const updateData = req.body

            const updateUser = await User.findByIdAndUpdate(id, updateData, {new: true})

            if(!updateUser){
                return res.status(404).json({message: 'User not found'})
            }

            res.status(201).json(updateUser)
        }catch(error){
            console.log(error)
        }
    }
}

export const userController = new UserController()