import ProductInfo from '@/components/templates/products/ProductInfo'
import RelatedProducts from '@/components/templates/products/RelatedProducts'
import { Button } from '@/components/ui/button'
import productService from '@/lib/services/product.service'
import Image from 'next/image'
import { Toggle } from '@/components/ui/toggle'
import AddToCart from '@/components/templates/cart/AddToCart'
import SelectSize from '@/components/templates/products/SelectSize'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface IProductDetails {
  searchParams: {
    size: string
  }
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params
}: {
  params: {
    slug: string
  }
}): Promise<Metadata> {
  const product = await productService.getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return {
    title: `${product.name}`,
    description: `${product.name}`,
    openGraph: {
      title: `${product.name} | Medusa Store`,
      description: `${product.name}`,
      images: product.image ? [product.image] : []
    }
  }
}

const ProductDetails = async ({ params, searchParams }: IProductDetails) => {
  const product = await productService.getProductBySlug(params.slug)
  const size = searchParams.size

  return (
    <div className="flex flex-col gap-20 px-6 xl:px-16 py-10">
      <div className="flex flex-col gap-6 lg:flex-row justify-between lg:gap-10">
        <div className="flex flex-col gap-6 flex-1 xl:mt-20">
          <span className="text-content-sub text-sm font-medium">{product.collection?.name}</span>
          <span className="text-content-title text-3xl font-semibold">{product?.name}</span>
          <p className="text-content-text text-sm leading-relaxed">
            Immerse in authentic sound and timeless charm with the Vinyl Virtuoso Opulenza. Elevate
            your listening experience with this vintage-inspired Analog Turntable. Rediscover music
            essence now.
          </p>
          <ProductInfo />
        </div>

        <Image
          className="bg-body object-center lg:w-[280px] xl:w-[664px] rounded-xl border-2"
          src={product.image}
          alt={product.slug}
          width={664}
          height={774}
          priority={true}
        />
        <div className="flex flex-col flex-1 xl:mt-20 gap-5">
          <SelectSize />
          <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
          <AddToCart
            data={{
              id: product._id!,
              name: product.name,
              slug: product.slug,
              image: product.image,
              price: product.price,
              size: size,
              quantity: 0
            }}
          />
        </div>
      </div>
      <RelatedProducts id={product.collection?._id} />
    </div>
  )
}

export default ProductDetails
