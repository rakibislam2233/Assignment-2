import { TUser } from './user.interface'
import { User } from './user.model'
const createUserIntoDB = async (userData: TUser) => {
  if (await User.isUserExist(userData.userId)) {
    throw new Error('User already exists')
  }
  const createdUser = await User.create(userData)
  const result = await User.findById(createdUser._id).select('-password')

  return result
}
const getAllUserFromDB = async () => {
  const result = await User.find({}, { userId: 0, password: 0 })
  return result
}
const getSingleUserFromDB = async (userId: string) => {
  const result = await User.findOne({ userId }, { password: 0 })
  return result
}
export const userService = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
}
