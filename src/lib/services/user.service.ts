import dbConnect from '@/lib/database/connectDB'
import UserModel from '@/lib/models/user.model'
import User from '@/types/user'
import { cache } from 'react'

export const revalidate = 3600

const getUserByEmail = cache(async (email: string) => {
  await dbConnect()
  const user = await UserModel.findOne({ email }).lean()
  return user as User
})

const create = cache(async (data: User) => {
  await dbConnect()
  const user = await UserModel.create(data)
  return user as User
})

const userService = {
  getUserByEmail,
  create
}

export default userService
