import productService from '@/lib/services/product.service'
import ProductItem from '@/components/templates/products/ProductItem'

const CollectionDetails = async ({
  searchParams,
  params
}: {
  searchParams: {
    sortBy: string
    id: string
  }
  params: {
    slug: string
  }
}) => {
  const products = await productService.getByQueryWithCol(
    searchParams.id,
    searchParams.sortBy || 'created_at'
  )

  return (
    <div className="w-full lg:w-[80%]">
      <span className="text-3xl text-content-title font-semibold capitalize">
        {params.slug.replace(/-/g, ' ')}
      </span>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {products && products.length > 0 ? (
          products.map((item, index) => (
            <div key={index} className="max-w-[360px]">
              <ProductItem
                name={item.name}
                image={item.image}
                price={item.price}
                slug={item.slug}
              />
            </div>
          ))
        ) : (
          <span>No Product</span>
        )}
      </div>
    </div>
  )
}

export default CollectionDetails
