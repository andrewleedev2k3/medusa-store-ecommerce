import dbConnect from '@/lib/database/connectDB'
import ProductModel from '@/lib/models/product.model'
import Product from '@/types/product'
import { cache } from 'react'

export const revalidate = 3600

const getAll = cache(async () => {
  await dbConnect()
  const products = await ProductModel.find()
    .populate('category collection')
    .sort({ _id: -1 })
    .limit(6)
    .lean()
  return products as Product[]
})

const getProductByName = cache(async (text: string) => {
  await dbConnect()
  const products = await ProductModel.find({ name: { $regex: text, $options: 'i' } })
    .sort({ _id: -1 })
    .limit(6)
    .lean()
  return products as Product[]
})

const getProductBySlug = cache(async (text: string) => {
  await dbConnect()
  const product = await ProductModel.findOne({ slug: text }).populate('category collection').lean()
  return product as Product
})

const getProductByCollection = cache(async (collectionId: string) => {
  await dbConnect()

  const products = await ProductModel.find({ collection: collectionId })
    .populate([
      {
        path: 'category',
        select: '-createdAt -updatedAt'
      },
      {
        path: 'collection',
        select: '-createdAt -updatedAt'
      }
    ])
    .sort({ _id: -1 })
    .limit(3)
    .lean()

  return products as Product[]
})

const create = cache(async (data: Product) => {
  await dbConnect()
  const product = await ProductModel.create(data)
  return product as Product
})

const getByQuery = cache(async (text: string) => {
  await dbConnect()

  let sortQuery = {}
  if (text === 'price_desc') {
    sortQuery = { price: -1 }
  } else if (text === 'price_asc') {
    sortQuery = { price: 1 }
  } else if (text === 'created_at') {
    sortQuery = { createdAt: -1 }
  }

  const products = await ProductModel.find()
    .populate([
      {
        path: 'category',
        select: '-createdAt -updatedAt'
      },
      {
        path: 'collection',
        select: '-createdAt -updatedAt'
      }
    ])
    .sort(sortQuery)
  return products as Product[]
})

const getByQueryWithCol = cache(async (colId: string, text: string) => {
  await dbConnect()

  let sortQuery = {}
  if (text === 'price_desc') {
    sortQuery = { price: -1 }
  } else if (text === 'price_asc') {
    sortQuery = { price: 1 }
  } else if (text === 'created_at') {
    sortQuery = { createdAt: -1 }
  }

  const products = await ProductModel.find({
    collection: colId
  })
    .populate([
      {
        path: 'category',
        select: '-createdAt -updatedAt'
      },
      {
        path: 'collection',
        select: '-createdAt -updatedAt'
      }
    ])
    .sort(sortQuery)
  return products as Product[]
})

const getByQueryWithCate = cache(async (cateId: string, text: string) => {
  await dbConnect()

  let sortQuery = {}
  if (text === 'price_desc') {
    sortQuery = { price: -1 }
  } else if (text === 'price_asc') {
    sortQuery = { price: 1 }
  } else if (text === 'created_at') {
    sortQuery = { createdAt: -1 }
  }

  const products = await ProductModel.find({
    category: cateId
  })
    .populate([
      {
        path: 'category',
        select: '-createdAt -updatedAt'
      },
      {
        path: 'collection',
        select: '-createdAt -updatedAt'
      }
    ])
    .sort(sortQuery)
    .limit(6)
  return products as Product[]
})

const productService = {
  getAll,
  create,
  getProductByCollection,
  getProductByName,
  getProductBySlug,
  getByQuery,
  getByQueryWithCol,
  getByQueryWithCate
}
export default productService
