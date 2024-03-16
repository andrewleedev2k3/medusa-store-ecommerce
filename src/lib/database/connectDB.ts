import mongoose, { ConnectOptions, Error } from 'mongoose'

const dbConnect = async () => {
  try {
    const DB = process.env.MONGODB_URL!.replace('<password>', process.env.MONGODB_PASSWORD!)
    await mongoose.connect(DB)
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message)
    }
  }
}

export default dbConnect
