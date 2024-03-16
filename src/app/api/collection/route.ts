import dbConnect from '@/lib/database/connectDB'
import collectionService from '@/lib/services/collection.service'
import Collection from '@/types/collection'
import { NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
  await dbConnect()
  const data: Collection = await req.json()
  try {
    const collection = await collectionService.create(data)
    return Response.json({ collection }, { status: 201 })
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 500 })
  }
}
