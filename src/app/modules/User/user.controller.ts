import { Request, Response } from 'express'
import { userService } from './user.service'
import UserValidationSchema from './userValidation'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body
    const validationData = UserValidationSchema.parse(userData)
    const result = await userService.createUserIntoDB(validationData)
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    })
  }
}
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUserFromDB()
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await userService.getSingleUserFromDB(userId)
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await userService.deletedUserFromDB(userId)
    if (result.modifiedCount > 0) {
      res.status(200).json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      })
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}
export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUser,
}
