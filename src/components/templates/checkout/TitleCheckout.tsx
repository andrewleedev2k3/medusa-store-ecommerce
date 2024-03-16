'use client'
import { usePathname, useRouter } from 'next/navigation'
import { Check } from 'lucide-react'
interface ITitleCheck {
  title: string
  nameStep: string
  open: boolean
}
const TitleCheckout = ({ title, nameStep, open }: ITitleCheck) => {
  const router = useRouter()
  const pathname = usePathname()
  const handleEdit = () => {
    router.push(pathname + `?step=${nameStep}`)
  }
  return (
    <div className="flex justify-between items-center pt-8">
      <div className="flex gap-3 items-center text text-3xl font-semibold text-content-title">
        {title}
        {!open && <Check className="bg-black rounded-full" size={18} color="white" />}
      </div>
      {!open && (
        <button onClick={handleEdit} className="text-blue-700 text-sm">
          Edit
        </button>
      )}
    </div>
  )
}

export default TitleCheckout
