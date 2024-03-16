'use client'
import OpacityCheckout from '@/components/templates/checkout/OpacityCheckout'
import FormPayment from '@/components/templates/checkout/Payment/Form'
import InfoPayment from '@/components/templates/checkout/Payment/InfoPayment'
import TitleCheckout from '@/components/templates/checkout/TitleCheckout'
import { useAppSelector } from '@/modules/redux/hooks'
import { RootState } from '@/modules/redux/store'
import { useSearchParams } from 'next/navigation'
const Payment = () => {
  const searchParams = useSearchParams()
  const isOpen = searchParams.get('step') === 'payment'
  const payment = useAppSelector((state: RootState) => state.cart.payment)

  return (
    <>
      {!isOpen && payment === false ? (
        <OpacityCheckout title="Payment" />
      ) : (
        <div className="flex flex-col">
          <TitleCheckout title="Payment" nameStep="payment" open={isOpen} />
          {isOpen && <FormPayment payment={payment || false} />}
          {!isOpen && <InfoPayment />}
        </div>
      )}
    </>
  )
}

export default Payment
