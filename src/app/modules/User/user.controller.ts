import { Request, Response } from 'express'
import { userService } from './user.service'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body
    const result = await userService.createUserIntoDB(userData)
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    })
  }
}

export const userController = {
  createUser,
}
