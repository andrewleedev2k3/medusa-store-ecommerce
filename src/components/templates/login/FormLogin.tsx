'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { signIn, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Field from '@/components/templates/forms/Field'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  email: z.string().email({
    message: 'Email is not valid.'
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.'
  })
})

const FormLogin = () => {
  const session = useSession()
  const { toast } = useToast()
  const router = useRouter()
  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.replace('/')
    }
  }, [session, router])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false
      })

      if (res?.ok) {
        toast({
          className: 'bg-green-400 text-white font-bold rounded-[16px]',
          duration: 2000,
          description: 'Login Successfully!'
        })
      }
    } catch (error) {
      throw new Error(error as any)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 min-w-[320px]">
        <Field title="Email" fieldName="email" required form={form} />
        <Field title="Password" fieldName="password" type="password" required form={form} />
        <Button
          type="submit"
          className="mt-5 bg-black rounded-xl w-full font-bold text-white hover:bg-black/80"
        >
          Login
        </Button>
      </form>
    </Form>
  )
}
export default FormLogin
