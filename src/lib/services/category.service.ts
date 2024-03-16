import dbConnect from '@/lib/database/connectDB'
import CategoryModel from '@/lib/models/category.model'
import Category from '@/types/category'
import { cache } from 'react'

export const revalidate = 3600

const getAll = cache(async () => {
  await dbConnect()
  const category = await CategoryModel.find().sort({ _id: -1 }).lean()
  return category as Category[]
})

const create = cache(async (data: Category) => {
  await dbConnect()
  const category = await CategoryModel.create(data)
  return category as Category
})

const categoryService = {
  getAll,
  create
}
export default categoryService
