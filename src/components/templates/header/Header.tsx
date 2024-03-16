'use client'

import CartBoxNav from '@/components/templates/cart/CartBoxNav'
import SideMenu from '@/components/templates/side-menu/SideMenu'
import Link from 'next/link'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import UserDropdown from '@/components/templates/header/UserDropdown'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: session } = useSession()

  return (
    <div className="sticky top-0 h-16 z-50">
      {isOpen && (
        <div className="absolute -top-3 left-0 z-[60]">
          <SideMenu open={isOpen} handleSetIsOpen={setIsOpen} />
        </div>
      )}
      <div className="h-full px-6 bg-white border-b flex items-center justify-between text-content-text xl:px-16 text-[12px]">
        <div
          onClick={() => setIsOpen(true)}
          className="flex-1 hover:text-content-title cursor-pointer"
        >
          Menu
        </div>

        <Link href="/" className="uppercase text-lg font-semibold hover:text-content-title">
          Medusa Store
        </Link>

        <div className="flex flex-1 gap-6 justify-end">
          <Link href="/search" className="hover:text-content-title hidden lg:flex">
            Search
          </Link>

          {!session ? (
            <Link href="/login" className="hover:text-content-title hidden lg:flex">
              Account
            </Link>
          ) : (
            <>
              <UserDropdown name={session.user?.name} signOut={() => signOut()} />
            </>
          )}
          <CartBoxNav />
        </div>
      </div>
    </div>
  )
}

export default Header
