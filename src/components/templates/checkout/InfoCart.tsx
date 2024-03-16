'use client'
import Summary from '@/components/templates/cart/Summary'
import ItemCart from '@/components/templates/checkout/ItemCart'
import { useAppSelector } from '@/modules/redux/hooks'
import { RootState } from '@/modules/redux/store'
import React from 'react'

const InfoCart = () => {
  const cart = useAppSelector((state: RootState) => state.cart)
  return (
    <div className="flex flex-col w-full flex-1 h-fit pt-6">
      <Summary data={cart} title="In your Cart" />
      <ItemCart data={cart.items} />
    </div>
  )
}

export default InfoCart
