import Product from '@/types/product'

export type CartItem = {
  name: string
  slug: string
  quantity: number
  image: string
  price: number
  size: string
}

export type ShippingAddress = {
  firstName: string
  lastName: string
  address: string
  postalCode: string
  email: string
  phone: string
}

type Order = {
  _id: string
  user: string
  items: CartItem[]
  itemsPrice: number
  taxPrice: number
  shippingPrice: number
  totalPrice: number
  delivery: string
  shippingAddress: ShippingAddress
  payment: boolean
  paidAt: Date
  orderCode: number
}

export default Order
