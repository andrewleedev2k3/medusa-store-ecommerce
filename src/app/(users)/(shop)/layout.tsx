import QueryList from '@/components/templates/store/QueryList'
import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Store'
}

const LayoutShop = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-between px-6 xl:px-16 py-16">
      <QueryList />
      {children}
    </div>
  )
}

export default LayoutShop
