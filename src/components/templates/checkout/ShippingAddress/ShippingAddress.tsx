'use client'
import FormShippingAddress from '@/components/templates/checkout/ShippingAddress/Form'
import InfoShippingAddress from '@/components/templates/checkout/ShippingAddress/Info'
import { useAppSelector } from '@/modules/redux/hooks'
import { RootState } from '@/modules/redux/store'
import { useSearchParams } from 'next/navigation'
import TitleCheckout from '@/components/templates/checkout/TitleCheckout'

const ShippingAddress = () => {
  const searchParams = useSearchParams()
  const data = useAppSelector((state: RootState) => state.cart.shippingAddress)
  const isOpen = searchParams.get('step') === 'address'
  const hasData = Object.values(data).every(value => !!value)

  return (
    <div className="flex flex-col">
      <TitleCheckout title="Shipping Address" nameStep="address" open={isOpen} />
      {isOpen && <FormShippingAddress data={data} />}
      {!isOpen && hasData && <InfoShippingAddress data={data} />}
    </div>
  )
}

export default ShippingAddress
