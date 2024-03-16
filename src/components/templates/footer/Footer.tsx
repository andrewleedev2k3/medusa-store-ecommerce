import categoryService from '@/lib/services/category.service'
import collectionService from '@/lib/services/collection.service'
import Link from 'next/link'

const Footer = async () => {
  const collections = await collectionService.getAll()
  const categories = await categoryService.getAll()

  return (
    <div className="flex flex-col px-6 gap-12 border-t py-12 justify-between xl:px-16 bg-white">
      <div className="flex flex-col gap-8 md:flex-row justify-between">
        <Link
          href="/"
          className="uppercase text-content-text text-lg font-semibold hover:text-content-title"
        >
          Medusa Store
        </Link>

        <div className="flex gap-16">
          <div className="flex flex-col text-[13px] gap-3">
            <span className="text-sm font-bold text-black">Categories</span>
            <div className="flex flex-col gap-2">
              {categories &&
                categories?.length > 0 &&
                categories.map((cate, index) => (
                  <Link
                    key={index}
                    href={`/categories/${cate.slug}?id=${cate._id}`}
                    className="text-content-text hover:text-content-title"
                  >
                    {cate.name}
                  </Link>
                ))}
            </div>
          </div>

          <div className="flex flex-col text-[13px] gap-3">
            <span className="text-sm font-bold text-black">Collections</span>
            <div className="flex flex-col gap-2">
              {collections &&
                collections?.length > 0 &&
                collections.map((col, index) => (
                  <Link
                    key={index}
                    href={`/collections/${col.slug}?id=${col._id}`}
                    className="text-content-text hover:text-content-title"
                  >
                    {col.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[13px] text-content-sub">
          © {new Date().getFullYear()} Medusa Store - Andrew Lee Developer.
        </span>
      </div>
    </div>
  )
}

export default Footer
