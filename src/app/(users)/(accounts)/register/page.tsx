import FormRegister from '@/components/templates/register/FormRegister'
import Link from 'next/link'

const Register = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="font-semibold">BECOME A MEDUSA STORE MEMBER</span>
        <p className="text-sm max-w-96">
          Create your Medusa Store Member profile, and get access to an enhanced shopping
          experience.
        </p>
      </div>

      <FormRegister />

      <div className="text-[13px]">
        Already a member?
        <Link className="underline ml-2" href={'/login'}>
          Login
        </Link>
      </div>
    </>
  )
}

export default Register
