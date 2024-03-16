'use client'
import SelectQuantity from '@/components/templates/cart/SelectQuantity'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useAppDispatch, useAppSelector } from '@/modules/redux/hooks'
import { removeItemBySlug } from '@/modules/redux/slices/cart.slice'
import { RootState } from '@/modules/redux/store'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'

const TableCart = () => {
  const cart = useAppSelector((state: RootState) => state.cart)
  const dispatch = useAppDispatch()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Item</TableHead>
          <TableHead className="font-bold">Quantity</TableHead>
          <TableHead className="font-bold invisible lg:visible">Price</TableHead>
          <TableHead className="text-right font-bold">Total</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {cart.items.length === 0 && (
          <div className="mt-6 text-base">Your shopping bag is empty.</div>
        )}
        {cart.items.map((cart, index) => (
          <TableRow
            key={index}
            className="text-content-title text-sm hover:bg-body duration-200 max-w-full"
          >
            <TableCell className="flex gap-4 items-center lg:w-[90%]">
              <Image
                className="bg-body border-2 w-16 h-16 lg:w-[100px] lg:h-[100px] rounded-xl object-cover"
                src={cart.image}
                alt="Img-Cart"
                width={100}
                height={100}
                priority
              />
              <div className="flex flex-col gap-2">
                <span className="font-medium">{cart.name}</span>
                <span className="text-content-text">Variant: {cart.size}</span>
              </div>
            </TableCell>
            <TableCell className="text-content-text lg:w-[20%]">
              <div className="flex gap-1 lg:gap-3 items-center">
                <Trash2
                  className="hover:text-content-title cursor-pointer"
                  onClick={() => dispatch(removeItemBySlug(cart.slug))}
                  size={20}
                />
                <SelectQuantity quantity={cart.quantity} slug={cart.slug} />
              </div>
            </TableCell>
            <TableCell className="text-cotent-text font-light invisible lg:visible">
              ${cart.price.toLocaleString('en-US')}
            </TableCell>
            <TableCell className="text-right">
              ${(cart.price * cart.quantity).toLocaleString('en-US')}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
export default TableCart
