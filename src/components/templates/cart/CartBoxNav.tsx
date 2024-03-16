'use client'

import ItemCartNav from '@/components/templates/cart/ItemCartNav'
import NoCart from '@/components/templates/cart/NoCart'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { useAppSelector } from '@/modules/redux/hooks'
import { RootState } from '@/modules/redux/store'
import { useRouter } from 'next/navigation'

const CartBoxNav = () => {
  const cart = useAppSelector((state: RootState) => state.cart)
  const router = useRouter()
  return (
    <HoverCard openDelay={10} closeDelay={200}>
      <HoverCardTrigger
        onClick={() => router.push('/cart')}
        className="hover:text-content-title cursor-pointer"
      >
        Cart ({cart.items.reduce((accumulator, item) => accumulator + item.quantity, 0)})
      </HoverCardTrigger>
      <HoverCardContent className="w-[400px] p-4 bg-white absolute top-[18px] -right-[11px] hidden lg:block">
        {cart.items.length > 0 ? <ItemCartNav data={cart.items} /> : <NoCart />}
      </HoverCardContent>
    </HoverCard>
  )
}

export default CartBoxNav
