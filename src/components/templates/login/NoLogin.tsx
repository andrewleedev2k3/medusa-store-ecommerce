'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const NoLogin = () => {
  const { data: session } = useSession()

  return (
    <>
      {!session?.user ? (
        <div className="flex justify-between items-center border-b-2 py-8 mb-8">
          <div className="flex flex-col gap-2">
            <span className="text-content-title font-semibold text-lg">
              Already have an account?
            </span>
            <span className="text-content-text text-sm">Sign in for a better experience.</span>
          </div>
          <Link
            href="/login"
            className="p-2 border-2 text-[13px] font-semibold bg-body hover:bg-gray-200 duration-200 rounded-xl"
          >
            Sign in
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default NoLogin
