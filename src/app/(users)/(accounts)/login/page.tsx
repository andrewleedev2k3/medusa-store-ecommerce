import FormLogin from '@/components/templates/login/FormLogin'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Login'
}
const Login = () => {
  return (
    <>
      <div className="flex flex-col gap-6 text-center">
        <span className="font-semibold">WELCOM BACK</span>
        <p className="text-sm">Sign in to access an enhanced shopping experience.</p>
      </div>

      <FormLogin />

      <div className="text-[13px]">
        Not a member?
        <Link className="underline ml-2" href={'/register'}>
          Join us.
        </Link>
      </div>
    </>
  )
}

export default Login
