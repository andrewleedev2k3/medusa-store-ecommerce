import dbConnect from '@/lib/database/connectDB'
import CollectionModel from '@/lib/models/collection.model'
import Collection from '@/types/collection'
import { cache } from 'react'

export const revalidate = 3600

const getAll = cache(async () => {
  await dbConnect()
  const collections = await CollectionModel.find().sort({ _id: -1 }).lean()
  return collections as Collection[]
})

const create = cache(async (data: Collection) => {
  await dbConnect()
  const collection = await CollectionModel.create(data)
  return collection as Collection
})

const collectionService = {
  getAll,
  create
}
export default collectionService
