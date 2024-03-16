import mongoose from 'mongoose'
import slugify from 'slugify'

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, unique: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
categorySchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

const CategoryModel = mongoose.models.Category || mongoose.model('Category', categorySchema)

export default CategoryModel
