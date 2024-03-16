import { CreditCard } from 'lucide-react'

const InfoPayment = ({ paidAt }: { paidAt?: string }) => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-60 border-b-[1px] py-8">
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-content-title font-medium">Payment method</span>
        <span>Test payment</span>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-content-title font-medium">Payment details</span>
        <div className="text-content-text flex items-center gap-2">
          <CreditCard
            size={18}
            className="text-content-title h-8 w-10 border-2 rounded-[10px] bg-body p-1"
          />
          {paidAt ? paidAt : 'Another step will appear'}
        </div>
      </div>
    </div>
  )
}

export default InfoPayment
