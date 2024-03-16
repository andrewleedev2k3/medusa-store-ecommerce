import dbConnect from '@/lib/database/connectDB'
import categoryService from '@/lib/services/category.service'
import Category from '@/types/category'
import { NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
  await dbConnect()
  const data: Category = await req.json()
  try {
    const category = await categoryService.create(data)
    return Response.json({ category }, { status: 201 })
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 500 })
  }
}
