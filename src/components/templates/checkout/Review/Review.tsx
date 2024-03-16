/* eslint-disable react/no-unescaped-entities */
'use client'
import OpacityCheckout from '@/components/templates/checkout/OpacityCheckout'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useAppDispatch, useAppSelector } from '@/modules/redux/hooks'
import { clearCart } from '@/modules/redux/slices/cart.slice'
import { RootState } from '@/modules/redux/store'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
const Review = () => {
  const router = useRouter()
  const { toast } = useToast()
  const { data: session } = useSession()
  const searchParams = useSearchParams()
  const isOpen = searchParams.get('step') === 'review'
  const cart = useAppSelector((state: RootState) => state.cart)
  const dispatch = useAppDispatch()
  const hasData = Object.values(cart).every(value => !!value)
  const handleOrder = async () => {
    try {
      const res = await fetch('api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          payment: cart.payment,
          shippingAddress: cart.shippingAddress,
          items: cart.items,
          itemsPrice: cart.itemsPrice,
          taxPrice: cart.taxPrice,
          shippingPrice: cart.shippingPrice,
          totalPrice: cart.totalPrice,
          userEmail: session?.user?.email
        })
      })

      const data = await res.json()
      if (res.ok) {
        toast({
          className: 'bg-green-400 text-white font-bold rounded-[16px]',
          duration: 1500,
          description: data.message || 'Order Successfully!'
        })
        router.push(`/orders/confirmed/${data.order._id}`)
        dispatch(clearCart())
      }
    } catch (error) {
      throw new Error(error as any)
    }
  }
  return (
    <>
      {!isOpen || !hasData ? (
        <OpacityCheckout title="Review" />
      ) : (
        <div className="flex flex-col gap-6 pt-8">
          <span className="text-3xl font-semibold">Review</span>
          <p className="text-sm">
            By clicking the Place Order button, you confirm that you have read, understand and
            accept our Terms of Use, Terms of Sale and Returns Policy and acknowledge that you have
            read Medusa Store's Privacy Policy.
          </p>
          <Button
            onClick={handleOrder}
            type="submit"
            className="w-60 mt-2 bg-black rounded-xl text-[13px] font-bold text-white hover:bg-black/80"
          >
            Place order
          </Button>
        </div>
      )}
    </>
  )
}

export default Review
