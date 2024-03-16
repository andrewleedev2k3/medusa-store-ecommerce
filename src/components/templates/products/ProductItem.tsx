import Product from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'

const ProductItem = ({ name, image, price, slug }: Product) => {
  return (
    <Link href={`/products/${slug}`} className="flex flex-col gap-4 group cursor-pointer">
      <Image
        className="border-2 rounded-xl bg-body group-hover:shadow-md"
        src={image}
        alt="Image Product"
        width={448}
        height={570}
        priority={true}
      />
      <div className="flex flex-col gap-2 lg:flex-row justify-between">
        <span className="text-content-text text-sm">{name}</span>
        <span className="text-content-sub text-sm">${price.toFixed(2)}</span>
      </div>
    </Link>
  )
}

export default ProductItem
