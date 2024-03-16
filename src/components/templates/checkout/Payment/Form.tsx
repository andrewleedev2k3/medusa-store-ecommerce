import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { savePaymentMethod } from '@/modules/redux/slices/cart.slice'
import { useRouter } from 'next/navigation'

const FormPayment = ({ payment }: { payment: boolean }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <div className="flex flex-col gap-3 py-8">
      <div className="flex items-center gap-2">
        <Checkbox
          id="standard"
          className="rounded-full"
          checked={payment}
          onCheckedChange={() => {
            dispatch(savePaymentMethod(true))
          }}
        />
        <label htmlFor="standard" className="text-sm">
          Test payment
        </label>
      </div>

      <Button
        disabled={!payment}
        onClick={() => router.push('/checkout/?step=review')}
        type="submit"
        className="w-60 mt-4 bg-black rounded-xl text-[13px] font-bold text-white hover:bg-black/80"
      >
        Continue to delivery
      </Button>
    </div>
  )
}

export default FormPayment
