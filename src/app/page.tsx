import Banner from '@/components/templates/home/Banner'
import LayoutHome from '@/components/templates/home/LayoutHome'
import collectionService from '@/lib/services/collection.service'
import productService from '@/lib/services/product.service'
import Collection from '@/types/collection'
import Product from '@/types/product'
// import { getServerSession } from 'next-auth'
// import { redirect } from 'next/navigation'

type CollectionWithProduct = Collection & { data: Product[] }

const Home = async () => {
  const collections = await collectionService.getAll()

  const dataForCollections: CollectionWithProduct[] = await Promise.all(
    collections.map(async col => ({
      _id: col._id,
      name: col.name,
      slug: col.slug,
      data: await productService.getProductByCollection(col._id)
    }))
  )

  return (
    <div>
      <Banner />
      <div className="min-h-screen px-6 xl:px-16 py-20 flex flex-col gap-40">
        {dataForCollections?.map(item => {
          return (
            <LayoutHome
              key={item._id}
              id={item._id}
              title={item.name}
              link={item.slug}
              data={item.data}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Home
