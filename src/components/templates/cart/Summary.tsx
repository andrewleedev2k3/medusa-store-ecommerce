'use client'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/modules/redux/hooks'
import { RootState } from '@/modules/redux/store'
import Cart from '@/types/cart'
import Order from '@/types/order'
import Link from 'next/link'

interface ISummary {
  title?: string
  data: Cart | Order
  hideBtn?: boolean
}

const Summary = ({ title, data, hideBtn }: ISummary) => {
  const hasData = Object.values(data).every(value => !!value)
  return (
    <div className="flex flex-col gap-6 w-full flex-1">
      <span className="text-content-title font-bold text-3xl">{title ? title : 'Summary'}</span>
      <div className="flex flex-col gap-2 py-5 border-t-[1px] border-b-[1px] text-content-text text-sm">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">Subtotal</div>
          <span>${data.itemsPrice.toLocaleString('en-US')}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${data.shippingPrice.toLocaleString('en-US')}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>${data.taxPrice.toLocaleString('en-US')}</span>
        </div>
      </div>
      <div className="flex justify-between pb-5 border-b-[1px]">
        <span className="text-sm">Total</span>
        <span className="text-lg font-semibold">${data.totalPrice.toLocaleString('en-US')}</span>
      </div>
      {!title && data.items.length > 0 && !hideBtn && (
        <Link
          className={`${hideBtn && 'hidden'}`}
          href={`/checkout?step=${hasData ? 'review' : 'address'}`}
        >
          <Button className="w-full bg-black rounded-xl text-white hover:bg-black/80">
            Go to checkout
          </Button>
        </Link>
      )}
    </div>
  )
}

export default Summary
