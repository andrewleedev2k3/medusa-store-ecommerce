'use client'
import FormDelivery from '@/components/templates/checkout/Delivery/Form'
import InfoDelivery from '@/components/templates/checkout/Delivery/InfoDelivery'
import OpacityCheckout from '@/components/templates/checkout/OpacityCheckout'
import TitleCheckout from '@/components/templates/checkout/TitleCheckout'
import { useAppSelector } from '@/modules/redux/hooks'
import { RootState } from '@/modules/redux/store'
import { useSearchParams } from 'next/navigation'
const Delivery = () => {
  const searchParams = useSearchParams()
  const isOpen = searchParams.get('step') === 'delivery'
  const delivery = useAppSelector((state: RootState) => state.cart.delivery)

  return (
    <>
      {!isOpen && delivery === '' ? (
        <OpacityCheckout title="Delivery" />
      ) : (
        <div className="flex flex-col">
          <TitleCheckout title="Delivery" nameStep="delivery" open={isOpen} />
          {isOpen && <FormDelivery data={delivery} />}
          {!isOpen && <InfoDelivery data={delivery} />}
        </div>
      )}
    </>
  )
}

export default Delivery
