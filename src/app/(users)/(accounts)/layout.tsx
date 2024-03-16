import LinkArrow from '@/components/ui/link-arrow'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account'
}

const LayoutAccounts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen py-20 items-center justify-center px-6 xl:px-16 gap-6">
      {children}
      <div className="w-full xl:w-2/3 border-t-[1px] pt-10">
        <span className="text-content-title text-2xl font-semibold">Got questions?</span>
        <div className="flex flex-col gap-6 lg:flex-row justify-between mt-3">
          <p className="text-sm">
            You can find frequently asked questions and answers on our customer service page.
          </p>
          <div className="flex justify-end">
            <LinkArrow link="/customer-service" text="Customer Service" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutAccounts
