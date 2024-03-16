'use client'
import Summary from '@/components/templates/cart/Summary'
import { useAppSelector } from '@/modules/redux/hooks'
import { RootState } from '@/modules/redux/store'

const CardSummary = () => {
  const cart = useAppSelector((state: RootState) => state.cart)
  return <Summary data={cart} />
}

export default CardSummary
