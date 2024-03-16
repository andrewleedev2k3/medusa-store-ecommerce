'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import Field from '@/components/templates/forms/Field'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  firstName: z.string().trim().min(1, { message: 'Not empty.' }).max(50, {
    message: 'Cannot exceed 50 characters.'
  }),
  lastName: z.string().trim().min(1, { message: 'Not empty.' }).max(50, {
    message: 'Cannot exceed 50 characters.'
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.'
  }),
  email: z.string().email({ message: 'Invalid email' }),
  phone: z
    .string()
    .min(1, { message: 'Not empty.' })
    .regex(/^0[0-9]{9}$/, { message: 'Invalid phone.' })
})

const FormRegister = () => {
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: ''
    }
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await fetch('api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      if (res.ok) {
        form.reset()
        toast({
          className: 'bg-green-400 text-white font-bold rounded-[16px]',
          duration: 2000,
          description: 'Register Successfully!'
        })
        router.push('/login')
      }
    } catch (error) {
      throw new Error(error as any)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 min-w-[320px]">
        <Field title="First name" fieldName="firstName" required form={form} />
        <Field title="Last name" fieldName="lastName" required form={form} />
        <Field title="Email" fieldName="email" required form={form} />
        <Field title="Phone" fieldName="phone" required form={form} />
        <Field title="Password" fieldName="password" type="password" required form={form} />

        <Button
          type="submit"
          className="mt-5 bg-black rounded-xl w-full font-bold text-white hover:bg-black/80"
        >
          Register
        </Button>
      </form>
    </Form>
  )
}
export default FormRegister
