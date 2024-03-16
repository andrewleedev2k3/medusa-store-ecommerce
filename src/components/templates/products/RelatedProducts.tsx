import ProductItem from '@/components/templates/products/ProductItem'
import productService from '@/lib/services/product.service'

interface IRelatedProducts {
  id?: string
}

const RelatedProducts = async ({ id }: IRelatedProducts) => {
  const products = await productService.getProductByCollection(id!)

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 items-center">
        <span className="text-sm text-content-text">Related products</span>
        <p className="text-3xl text-content-title xl:w-[35%] text-center">
          You might also want to check out these products.
        </p>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
        {products &&
          products?.length > 0 &&
          products.map((item, index) => (
            <div key={index} className="max-w-[350px]">
              <ProductItem
                name={item.name}
                image={item.image}
                price={item.price}
                slug={item.slug}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default RelatedProducts
