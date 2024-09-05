import express, { Request, Response } from 'express'
import { userController } from './controller'

const userRouter = express.Router()

const {getUsers, getUser, createUser, loginUser, deleteUser, updateUser} = userController

userRouter.get('/getUsers', getUsers)
userRouter.get('/getUser/:id', getUser)
userRouter.post('/register', createUser)
userRouter.delete('/deleteUser/:id', deleteUser)
userRouter.put('/editUser/:id', updateUser)
userRouter.post("/login", loginUser)

export default userRouter