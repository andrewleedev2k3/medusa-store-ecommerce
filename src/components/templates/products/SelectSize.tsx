'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const SelectSize = () => {
  const sizes = ['S', 'M', 'L', 'XL']
  const router = useRouter()
  const [selectedSize, setSelectedSize] = useState<string>('')
  const pathname = usePathname()

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size)
  }

  return (
    <div className="border-b-2 pb-5">
      <span className="text-sm">Select Size</span>
      <div className="grid grid-cols-4 text-sm gap-4 mt-4">
        {sizes.map(size => (
          <button
            key={size}
            className={`p-2 bg-body rounded-[10px] border-[1px] hover:scale-105 duration-200 ${
              selectedSize === size ? 'border-blue-600' : ''
            }`}
            onClick={() => {
              handleSizeSelect(size)
              router.push(pathname + `?size=${size}`, { scroll: false })
            }}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SelectSize
