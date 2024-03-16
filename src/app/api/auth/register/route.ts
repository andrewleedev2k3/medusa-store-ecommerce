import httpStatus from '@/lib/constants/httpStatus'
import dbConnect from '@/lib/database/connectDB'
import userService from '@/lib/services/user.service'

import { NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect()
    const data = await req.json()
    const user = await userService.create(data)
    return Response.json({ user }, { status: httpStatus.OK })
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: httpStatus.INTERNAL_SERVER_ERROR })
  }
}
