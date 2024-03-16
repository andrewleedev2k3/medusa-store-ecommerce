import React, { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { saveDeliveryMethod } from '@/modules/redux/slices/cart.slice'
import { useRouter } from 'next/navigation'

const FormDelivery = ({ data }: { data: string }) => {
  const [selectedOption, setSelectedOption] = useState<string>(data || '')
  const dispatch = useDispatch()
  const handleCheckboxChange = (id: string) => {
    setSelectedOption(id)
  }
  const router = useRouter()
  return (
    <div className="flex flex-col gap-3 py-8">
      <div className="flex items-center gap-2">
        <Checkbox
          id="standard"
          className="rounded-full"
          checked={selectedOption === 'standard'}
          onCheckedChange={() => {
            handleCheckboxChange('standard')
            dispatch(saveDeliveryMethod('standard'))
          }}
        />
        <label htmlFor="standard" className="text-sm">
          FakeEx Standard ($8.00)
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          id="express"
          className="rounded-full"
          checked={selectedOption === 'express'}
          onCheckedChange={() => {
            handleCheckboxChange('express')
            dispatch(saveDeliveryMethod('express'))
          }}
        />
        <label htmlFor="express" className="text-sm">
          FakeEx Express ($12.00)
        </label>
      </div>
      <Button
        disabled={selectedOption === ''}
        onClick={() => router.push('/checkout/?step=payment')}
        type="submit"
        className="w-60 mt-4 bg-black rounded-xl text-[13px] font-bold text-white hover:bg-black/80"
      >
        Continue to delivery
      </Button>
    </div>
  )
}

export default FormDelivery
