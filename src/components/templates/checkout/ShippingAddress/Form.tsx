'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import Field from '@/components/templates/forms/Field'
import { useAppDispatch } from '@/modules/redux/hooks'
import { saveShippingAddress } from '@/modules/redux/slices/cart.slice'
import { ShippingAddress } from '@/types/cart'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  firstName: z.string().trim().min(1, { message: 'Not empty.' }).max(50, {
    message: 'Cannot exceed 50 characters.'
  }),
  lastName: z.string().trim().min(1, { message: 'Not empty.' }).max(50, {
    message: 'Cannot exceed 50 characters.'
  }),
  address: z.string().trim().min(1, { message: 'Not empty.' }).max(100, {
    message: 'Cannot exceed 100 characters.'
  }),
  postalCode: z.string().trim().min(1, { message: 'Not empty.' }).max(6, {
    message: 'Cannot exceed 6 characters.'
  }),
  email: z.string().email({ message: 'Invalid email' }),
  phone: z
    .string()
    .min(1, { message: 'Not empty.' })
    .regex(/^0[0-9]{9}$/, { message: 'Invalid phone.' })
})
const FormShippingAddress = ({ data }: { data?: ShippingAddress }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: data?.firstName || '',
      lastName: data?.lastName || '',
      address: data?.address || '',
      postalCode: data?.postalCode || '',
      email: data?.email || '',
      phone: data?.phone || ''
    }
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values) {
      dispatch(saveShippingAddress(values))
      router.push('/checkout/?step=delivery')
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="py-8 border-b-[1px]">
        <div className="grid grid-cols-2 gap-6">
          <Field title="First name" fieldName="firstName" required form={form} />
          <Field title="Last name" fieldName="lastName" required form={form} />
          <Field title="Address" fieldName="address" required form={form} />
          <Field title="Postal code" fieldName="postalCode" required form={form} />
          <Field title="Email" fieldName="email" required form={form} />
          <Field title="Phone" fieldName="phone" required form={form} />
        </div>
        <Button
          type="submit"
          className="w-60 mt-8 bg-black rounded-xl text-[13px] font-bold text-white hover:bg-black/80"
        >
          Continue to delivery
        </Button>
      </form>
    </Form>
  )
}
export default FormShippingAddress
