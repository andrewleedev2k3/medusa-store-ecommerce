import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NoCart = () => {
  return (
    <div className="flex flex-col gap-16 justify-between items-center py-2">
      <span className="text-content-title font-bold text-[15px]">Cart</span>

      <div className="flex flex-col gap-4 items-center pb-8">
        <span className="w-7 h-7 flex items-center justify-center text-lg rounded-full bg-black text-white font-bold">
          0
        </span>
        <p className="text-[13px]">Your shopping bag is empty.</p>

        <Link href="/store">
          <Button className="bg-black text-white rounded-xl text-[13px] font-semibold hover:bg-black/80">
            Explore products
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NoCart
