import CardSummary from '@/components/templates/cart/CardSummary'
import TableCart from '@/components/templates/cart/TableCart'
import NoLogin from '@/components/templates/login/NoLogin'

const CartPage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-6 xl:px-16 py-10 gap-16">
      <div className="w-full lg:w-[70%] max-h-screen overflow-scroll scrollbar-hide ">
        <NoLogin />
        <div className="flex flex-col gap-4 pb-8">
          <h6 className="text-3xl font-semibold text-content-title">Cart</h6>
          <TableCart />
        </div>
      </div>
      <CardSummary />
    </div>
  )
}

export default CartPage
