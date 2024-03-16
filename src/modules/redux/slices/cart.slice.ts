import { roundNum2 } from './../../../lib/utils'
import Cart, { CartItem, ShippingAddress } from '@/types/cart'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
  payment: false,
  delivery: '',
  shippingAddress: {
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    email: '',
    phone: ''
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state?.items.findIndex(item => item.slug === action.payload.slug)
      if (itemIndex! >= 0) {
        state!.items[itemIndex!].quantity += 1
        state.items[itemIndex].size = action.payload.size
      } else {
        const tempProduct = { ...action.payload, quantity: 1, size: action.payload.size }
        state?.items.push(tempProduct)
      }
      const { itemsPrice, taxPrice, totalPrice } = calcPriceCart(state!.items)
      state.itemsPrice = itemsPrice
      state.taxPrice = taxPrice
      state.totalPrice = totalPrice
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state?.items.findIndex(item => item.slug === action.payload)

      if (itemIndex! >= 0) {
        state!.items[itemIndex!].quantity -= 1

        if (state!.items[itemIndex!].quantity <= 0) {
          state!.items.splice(itemIndex!, 1)
        }
      }
      const { itemsPrice, taxPrice, totalPrice } = calcPriceCart(state!.items)
      state.itemsPrice = itemsPrice
      state.taxPrice = taxPrice
      state.totalPrice = totalPrice
    },
    removeItemBySlug: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.slug !== action.payload)

      const { itemsPrice, taxPrice, totalPrice } = calcPriceCart(state!.items)
      state.itemsPrice = itemsPrice
      state.taxPrice = taxPrice
      state.totalPrice = totalPrice
    },
    updateQuantityItem: (state, action: PayloadAction<{ slug: string; quantity: number }>) => {
      const itemIndex = state.items.findIndex(item => item.slug === action.payload.slug)

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = action.payload.quantity
      }

      const { itemsPrice, taxPrice, totalPrice } = calcPriceCart(state!.items)
      state.itemsPrice = itemsPrice
      state.taxPrice = taxPrice
      state.totalPrice = totalPrice
    },
    saveShippingAddress: (state, action: PayloadAction<ShippingAddress>) => {
      state.shippingAddress = action.payload
    },
    savePaymentMethod: (state, action: PayloadAction<boolean>) => {
      state.payment = action.payload
    },
    saveDeliveryMethod: (state, action: PayloadAction<string>) => {
      state.delivery = action.payload
      if (state.delivery === 'standard') state.shippingPrice = 8
      if (state.delivery === 'express') state.shippingPrice = 12
      state.totalPrice = state.totalPrice += state.shippingPrice
    },
    clearCart: () => initialState
  }
})

const calcPriceCart = (items: CartItem[]) => {
  const itemsPrice = roundNum2(items.reduce((acc, item) => acc + item.price * item.quantity, 0)),
    taxPrice = roundNum2(Number(0.01 * itemsPrice)),
    totalPrice = roundNum2(itemsPrice + taxPrice)
  return { itemsPrice, taxPrice, totalPrice }
}

export const {
  addItemToCart,
  removeItemFromCart,
  removeItemBySlug,
  updateQuantityItem,
  saveShippingAddress,
  savePaymentMethod,
  saveDeliveryMethod,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
