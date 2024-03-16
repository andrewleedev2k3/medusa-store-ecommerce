import mongoose from 'mongoose'
import slugify from 'slugify'

const collectionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, unique: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
collectionSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

const CollectionModel = mongoose.models.Collection || mongoose.model('Collection', collectionSchema)

export default CollectionModel
