import ProductItem from '@/components/templates/products/ProductItem'
import LinkArrow from '@/components/ui/link-arrow'
import Product from '@/types/product'

interface ILayoutHome {
  title: string
  link: string
  data: Product[]
  id: string
}

const LayoutHome = ({ title, link, data, id }: ILayoutHome) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <span className="text-content-title text-lg">{title}</span>
        <LinkArrow link={`/collections/${link}?id=${id}`} />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 ">
        {data &&
          data?.length > 0 &&
          data.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              slug={item.slug}
            />
          ))}
      </div>
    </div>
  )
}

export default LayoutHome
