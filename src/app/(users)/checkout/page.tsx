import Delivery from '@/components/templates/checkout/Delivery/Delivery'
import Payment from '@/components/templates/checkout/Payment/Payment'
import Review from '@/components/templates/checkout/Review/Review'
import ShippingAddress from '@/components/templates/checkout/ShippingAddress/ShippingAddress'

const CheckoutPage = () => {
  return (
    <div className="flex flex-col">
      <ShippingAddress />
      <Delivery />
      <Payment />
      <Review />
    </div>
  )
}

export default CheckoutPage
