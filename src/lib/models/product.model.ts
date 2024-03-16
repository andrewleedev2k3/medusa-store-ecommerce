import mongoose from 'mongoose'
import slugify from 'slugify'

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    collection: { type: mongoose.Schema.Types.ObjectId, ref: 'Collection', required: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
productSchema.index({ slug: 1, category: 1, collection: 1 })

productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

const ProductModel = mongoose.models.Product || mongoose.model('Product', productSchema)

export default ProductModel
