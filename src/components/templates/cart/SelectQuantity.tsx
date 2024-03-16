import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { updateQuantityItem } from '@/modules/redux/slices/cart.slice'
import { useDispatch } from 'react-redux'

const SelectQuantity = ({ quantity, slug }: { quantity: number; slug: string }) => {
  const dispatch = useDispatch()

  return (
    <Select
      onValueChange={value => {
        dispatch(updateQuantityItem({ slug, quantity: +value }))
      }}
    >
      <SelectTrigger className="w-10 lg:w-[55px] border-content-sub rounded-[4px] bg-[#F3F4F6] px-2 h-9">
        <SelectValue placeholder={quantity} />
      </SelectTrigger>
      <SelectContent className="bg-white max-w-[30px]">
        <SelectGroup>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="6">6</SelectItem>
          <SelectItem value="7">7</SelectItem>
          <SelectItem value="8">8</SelectItem>
          <SelectItem value="9">9</SelectItem>
          <SelectItem value="10">10</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectQuantity
