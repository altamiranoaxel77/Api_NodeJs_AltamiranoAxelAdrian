import User from "../models/user"
import { config } from "dotenv"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { Request, Response } from "express"

config()
class AuthController{
    async register(req: Request, res: Response){
        try{
            const {email} = req.body
            const existingUser = await User.findOne({email})
            if (existingUser){
                return res.status(400).json({error: "User already exist"})
            }
            const newUser = await User.create(req.body)
            return res.status(200).json(newUser)
        } catch(error){
            console.log(error)
        }
    }

    async login(req: Request, res: Response){
        try{
            const {email, password} = req.body
            const user = await User.findOne({email})
            if(!user){
                return res.status(400).json({error: "User does not exist"})
            }
            const isPasswordValid = await compare(password, user.password)
            if(!isPasswordValid){
                return res.status(400).json({error: "Invalid password"})
            }

            const token = sign(
                {userId : user.id, email: user.email, admin: user.is_admin}, process.env.JWT_SECRET!, {expiresIn: "1h"}
            )
            return res.header("token", token).status(200).json({message: "login Successful"})


        }catch(error){
            console.log(error)
        }
    }
}

export const authController = new AuthController

