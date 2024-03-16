import httpStatus from '@/lib/constants/httpStatus'
import dbConnect from '@/lib/database/connectDB'
import CategoryModel from '@/lib/models/category.model'
import CollectionModel from '@/lib/models/collection.model'
import productService from '@/lib/services/product.service'
import Product from '@/types/product'
import { NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
  await dbConnect()
  const data: Product = await req.json()
  try {
    dbConnect()

    const isCate = await CategoryModel.findById(data.category).select('_id')
    const isCollection = await CollectionModel.findById(data.collection).select('_id')

    if (!isCate) {
      return Response.json({ message: 'Category Not Found' }, { status: httpStatus.NOT_FOUND })
    }
    if (!isCollection) {
      return Response.json({ message: 'Collection Not Found' }, { status: httpStatus.NOT_FOUND })
    }

    const product = await productService.create(data)
    return Response.json({ product }, { status: httpStatus.OK })
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: httpStatus.INTERNAL_SERVER_ERROR })
  }
}
