import NoProduct from '@/components/templates/products/NoProduct'
import productService from '@/lib/services/product.service'
import Image from 'next/image'
import Link from 'next/link'
const ResultSearch = async ({ value }: { value: string }) => {
  const products = await productService.getProductByName(value || '')

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {products &&
          products.length > 0 &&
          products.map(item => (
            <Link key={item._id} href={`/products/${item.slug}`}>
              <li className="flex sm:flex-col gap-3 border-[1px] p-2 items-center sm:p-4 rounded-xl shadow-sm hover:shadow-md duration-200">
                <Image
                  className="border-2 bg-body rounded-xl w-14 h-14 sm:w-full sm:h-[220px] object-cover"
                  src={item?.image}
                  alt="Img-Product"
                  width={200}
                  height={200}
                  priority
                />
                <span className="text-[13px] text-center text-content-text">{item?.name}</span>
              </li>
            </Link>
          ))}
      </ul>
      {products.length === 0 && <NoProduct />}
    </>
  )
}

export default ResultSearch
