import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: [true, 'Must provide a first name'] },
    lastName: { type: String, required: [true, 'Must provide a last name'] },
    email: { type: String, required: [true, 'Must provide a email'], unique: true },
    phone: { type: String },
    password: { type: String, required: [true, 'Must provide a password'] },
    isAdmin: { type: Boolean, default: false }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.pre('save', async function (next) {
  const user: any = this
  if (user.isModified('password')) {
    const password = this.password as string
    user.password = await bcrypt.hash(password, 10)
  }
  next()
})

const UserModel = mongoose.models.User || mongoose.model('User', userSchema)

export default UserModel
