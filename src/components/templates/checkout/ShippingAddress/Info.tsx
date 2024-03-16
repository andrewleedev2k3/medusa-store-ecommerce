import { ShippingAddress } from '@/types/cart'
import React from 'react'

const InfoShippingAddress = ({ data }: { data: ShippingAddress }) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row justify-between text-sm text-content-text border-b-[1px] py-8 ">
      <div className="flex flex-col w-1/3 gap-1">
        <span className="text-content-title font-medium">Shipping Address</span>
        <span className="">
          {data.firstName} {data.lastName}
        </span>
        <span className="">{data.address}</span>
        <span className="">Portal: {data.postalCode}</span>
      </div>

      <div className="flex flex-col w-1/3 gap-1">
        <span className="text-content-title font-medium">Contact</span>
        <span className="txt-medium span-ui-fg-subtle">{data.phone}</span>
        <span className="txt-medium span-ui-fg-subtle">{data.email}</span>
      </div>

      <div className="flex flex-col w-1/3 gap-1">
        <span className="text-content-title font-medium">Billing Address</span>
        <span className="">Billing- and delivery address are the same.</span>
      </div>
    </div>
  )
}

export default InfoShippingAddress
