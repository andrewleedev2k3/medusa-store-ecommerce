import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/modules/redux/hooks'
import { removeItemBySlug } from '@/modules/redux/slices/cart.slice'
import { CartItem } from '@/types/cart'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ItemCartNav = ({ data }: { data: CartItem[] }) => {
  const dispatch = useAppDispatch()
  return (
    <div className="flex flex-col gap-6">
      <span className="text-content-title font-bold text-[15px] text-center">Cart</span>
      <div className="flex flex-col gap-6 max-h-96  overflow-scroll scrollbar-hide">
        {data &&
          data.length > 0 &&
          data.map((cart, index) => (
            <div key={index} className="flex justify-between gap-2">
              <Link href={`/products/${cart.slug}`}>
                <Image
                  className="w-[100px] h-[110px] bg-body object-cover rounded-xl border-2 shadow-md"
                  src={cart.image}
                  alt="Img-Cart"
                  width={200}
                  height={200}
                  priority
                />
              </Link>

              <div className="flex flex-col gap-1 text-content-title w-[50%]">
                <Link href={`/products/${cart.slug}`} className="text-[13px]">
                  {cart.name}
                </Link>
                <span className="text-[13px] text-content-text">Variant: {cart.size}</span>
                <span className="text-[12px]">Quantity: {cart.quantity}</span>
                <button
                  onClick={() => dispatch(removeItemBySlug(cart.slug))}
                  className="flex gap-1 text-[12px] text-content-text hover:text-red-600 duration-200"
                >
                  <Trash2 size={16} /> <span>Remove</span>
                </button>
              </div>

              <span className="text-[15px] text-content-text">${cart.price}</span>
            </div>
          ))}
      </div>

      <div className="flex justify-between items-end">
        <h6 className="text-content-title font-semibold">
          Subtotal <span className="text-content-text font-normal">(excl. taxes)</span>
        </h6>
        <span className="text-content-title font-semibold text-base">
          ${data.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </span>
      </div>
      <Link href="/cart">
        <Button className="w-full bg-black rounded-xl text-white hover:bg-black/80">
          Go to cart
        </Button>
      </Link>
    </div>
  )
}

export default ItemCartNav
