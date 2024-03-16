import mongoose from 'mongoose'
import UserModel from '@/lib/models/user.model'
import ProductModel from '@/lib/models/product.model'

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserModel.modelName,
      required: true
    },
    items: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: ProductModel.modelName,
          required: true
        },
        name: { type: String, required: true },
        slug: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true }
      }
    ],
    shippingAddress: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      address: { type: String, required: true },
      email: { type: String, required: true },
      postalCode: { type: String, required: true },
      phone: { type: String, required: true }
    },
    payment: { type: Boolean, required: true },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    delivery: { type: String, require: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    paidAt: { type: Date },
    orderCode: { type: Number }
  },
  {
    timestamps: true
  }
)

orderSchema.pre('save', async function (next) {
  this.paidAt = new Date()

  const randomOrderCode = Math.abs(Math.round(Math.random() * 9000))
  this.orderCode = randomOrderCode
  next()
})

const OrderModel = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default OrderModel
