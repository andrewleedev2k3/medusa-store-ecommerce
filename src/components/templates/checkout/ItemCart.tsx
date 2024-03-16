import Link from 'next/link'
import Image from 'next/image'
import { CartItem } from '@/types/order'
const ItemCart = ({ data }: { data: CartItem[] }) => {
  return (
    <div className="flex flex-col gap-4 py-4 max-h-[350px] overflow-scroll scrollbar-hide border-b-[1px] pb-5">
      {data &&
        data.length > 0 &&
        data.map((cart, index) => (
          <div key={index} className="flex justify-between gap-2 items-center">
            <Link href={`/products/${cart.slug}`}>
              <Image
                className="w-[70px] h-[70px] bg-body object-cover rounded-xl border-2 shadow-sm"
                src={cart.image}
                alt="Img-Cart"
                width={70}
                height={70}
                priority
              />
            </Link>

            <div className="flex flex-col gap-1 text-content-title w-[50%]">
              <Link href={`/products/${cart.slug}`} className="text-[13px]">
                {cart.name}
              </Link>
              <span className="text-[13px] text-content-text">Variant: {cart.size}</span>
            </div>

            <div className="flex flex-col gap-1 text-end">
              <span className="text-sm text-content-text">
                {cart.quantity} x ${cart.price}
              </span>
              <span className="text-sm font-medium text-blue-700">
                ${cart.price * cart.quantity}
              </span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ItemCart
