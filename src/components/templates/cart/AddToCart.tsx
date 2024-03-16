'use client'

import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/modules/redux/hooks'
import React from 'react'
import { CartItem } from '@/types/cart'
import { addItemToCart } from '@/modules/redux/slices/cart.slice'
const AddToCart = ({ data }: { data: CartItem }) => {
  const dispatch = useAppDispatch()

  return (
    <Button
      disabled={data.size === undefined}
      onClick={() => dispatch(addItemToCart(data))}
      className="bg-black rounded-xl text-white hover:bg-black/80"
    >
      Add to cart
    </Button>
  )
}

export default AddToCart
