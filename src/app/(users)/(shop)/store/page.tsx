import productService from '@/lib/services/product.service'
import ProductItem from '@/components/templates/products/ProductItem'

const Store = async ({
  searchParams
}: {
  searchParams: {
    sortBy: string
  }
}) => {
  const products = await productService.getByQuery(searchParams.sortBy || 'created_at')

  return (
    <div className="w-full lg:w-[80%]">
      <span className="text-3xl text-content-title font-semibold">All products</span>
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

export default Store
