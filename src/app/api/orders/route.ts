import httpStatus from '@/lib/constants/httpStatus'
import dbConnect from '@/lib/database/connectDB'
import orderService from '@/lib/services/order.service'
import userService from '@/lib/services/user.service'
import { NextRequest } from 'next/server'

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect()
    const data = await req.json()
    const user = await userService.getUserByEmail(data.userEmail)
    if (!user) {
      return Response.json(
        { message: 'Unauthorized' },
        {
          status: httpStatus.UNAUTHORIZED
        }
      )
    }
    const order = await orderService.create({ ...data, user: user._id })
    return Response.json({ order, message: 'Order Successfully!' }, { status: httpStatus.OK })
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 500 })
  }
}
