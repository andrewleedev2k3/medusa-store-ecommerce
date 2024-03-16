import dbConnect from '@/lib/database/connectDB'
import UserModel from '@/lib/models/user.model'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'text' }
      },
      async authorize(credentials, req) {
        await dbConnect()
        try {
          const user = await UserModel.findOne({ email: credentials!.email })
          if (!user) return null
          const isMatch = await bcrypt.compare(credentials!.password, user.password)

          if (isMatch) {
            const data: any = {
              name: user.firstName + ' ' + user.lastName,
              email: user.email
            }
            return data
          }
          return null
        } catch (error) {
          throw new Error(error as any)
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
}
