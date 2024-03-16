import Summary from '@/components/templates/cart/Summary'
import InfoDelivery from '@/components/templates/checkout/Delivery/InfoDelivery'
import ItemCart from '@/components/templates/checkout/ItemCart'
import InfoPayment from '@/components/templates/checkout/Payment/InfoPayment'
import InfoShippingAddress from '@/components/templates/checkout/ShippingAddress/Info'
import TitleCheckout from '@/components/templates/checkout/TitleCheckout'
import orderService from '@/lib/services/order.service'
import Link from 'next/link'

interface IDetailOrder {
  params: {
    id: string
  }
}

const DetailOrder = async ({ params }: IDetailOrder) => {
  const order = await orderService.getOrderById(params.id)

  const paidAt: string = order.paidAt.toDateString() ?? ''
  const paidAtWithPrice: string = `$${order.totalPrice} paid at ${order.paidAt.toString()}`

  return (
    <div className="flex flex-col justify-center px-6 md:px-20 lg:px-60 xl:px-80 py-16 text-content-text">
      <div className="flex flex-col gap-1 text-3xl font-semibold text-content-title pb-8">
        <span>Thank you!</span>
        <p>Your order was placed successfully.</p>
      </div>

      <div className="flex flex-col gap-2 text-sm pb-8">
        <p>
          We have sent the order confirmation details to
          <span className="text-content-title font-semibold"> {order.shippingAddress.email}</span>
        </p>
        <p>Order date: {paidAt}</p>
        <p className="text-blue-600">Order number: {order.orderCode}</p>
      </div>
      <div>
        <Summary data={order} hideBtn={true} />
        <ItemCart data={order.items} />
      </div>
      <div>
        <TitleCheckout title="Shipping Address" open={true} nameStep="" />
        <InfoShippingAddress data={order.shippingAddress} />
      </div>
      <div>
        <TitleCheckout title="Delivery" open={true} nameStep="" />
        <InfoDelivery data={order.delivery} />
      </div>
      <div>
        <TitleCheckout title="Payment" open={true} nameStep="" />
        <InfoPayment paidAt={paidAtWithPrice} />
      </div>

      <div className="flex flex-col gap-2 text-sm pt-8">
        <span className="text-content-title font-semibold">Need help?</span>
        <Link href="/contact">Contact Returns</Link>
        <Link href="/contact">Contact Returns & Exchanges</Link>
      </div>
    </div>
  )
}

export default DetailOrder
