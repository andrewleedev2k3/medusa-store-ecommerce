import InfoCart from '@/components/templates/checkout/InfoCart'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Checkout'
}

const LayoutCheckout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-28 px-6 lg:px-16 py-10">
      <div className="w-full lg:w-[65%]">{children}</div>
      <InfoCart />
    </div>
  )
}

export default LayoutCheckout
