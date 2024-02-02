import { TUser } from './user.interface'
import { User } from './user.model'
const createUserIntoDB = async (user: TUser) => {
  const result = await User.create(user)
  return result
}
const getAllUserFromDB = async () => {
  const result = await User.find()
  return result
}
const getSingleUserFromDB = async (userId: string) => {
  const result = await User.findOne({ userId })
  return result
}
export const userService = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
}
