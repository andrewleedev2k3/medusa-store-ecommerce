import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { UseFormReturn } from 'react-hook-form'

interface IField {
  fieldName: string
  form: UseFormReturn<any, any, undefined>
  placeholder?: string
  title: string
  type?: string
  required?: boolean
}

const Field = ({ form, fieldName, placeholder, title, type, required }: IField) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {title} {required && <span className="text-red-600">*</span>}
          </FormLabel>
          <FormControl>
            <Input
              type={type ? type : 'text'}
              className="rounded-[8px] bg-body border-[1px] border-gray-200"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage className="text-red-600 text-sm" />
        </FormItem>
      )}
    />
  )
}

export default Field
