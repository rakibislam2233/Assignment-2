import express from 'express'
import { userController } from './user.controller'

const route = express.Router()
route.post('/', userController.createUser)
route.get('/', userController.getAllUser)
route.get('/:userId', userController.getSingleUser)
route.put('/:userId', userController.updateSingleUser)
route.delete('/:userId', userController.deleteUser)
export const userRoute = route
