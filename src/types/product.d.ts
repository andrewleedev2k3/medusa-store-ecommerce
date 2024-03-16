import Category from '@/types/category'
import Collection from '@/types/collection'

type Product = {
  _id?: string
  name: string
  slug: string
  image: string
  price: number
  category?: Category
  collection?: Collection
  color?: [string]
  size?: [string]
}

export default Product
