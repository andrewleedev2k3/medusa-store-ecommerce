import dbConnect from '@/lib/database/connectDB'
import OrderModel from '@/lib/models/order.model'
import Order from '@/types/order'
import { cache } from 'react'

export const revalidate = 3600

// const getAll = cache(async () => {
//   await dbConnect()
//   const products = await ProductModel.find()
//     .populate('category collection')
//     .sort({ _id: -1 })
//     .limit(6)
//     .lean()
//   return products as Product[]
// })

const getOrderById = cache(async (orderID: string) => {
  await dbConnect()
  const order = await OrderModel.findOne({ _id: orderID }).populate('user').lean()
  return order as Order
})
const create = cache(async (data: any) => {
  await dbConnect()
  const orders = await OrderModel.create(data)
  return orders as Order
})

const orderService = {
  // getAll,
  getOrderById,
  create
}
export default orderService
