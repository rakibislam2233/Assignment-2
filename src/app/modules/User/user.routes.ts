import express from 'express'
import { userController } from './user.controller'

const route = express.Router()
route.post('/', userController.createUser);
route.get('/' , userController.getAllUser)
route.get('/:userId', userController.getSingleUserFromDB)
export const userRoute = route
