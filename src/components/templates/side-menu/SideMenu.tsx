import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { X } from 'lucide-react'
import Link from 'next/link'

interface ISideMenu {
  open: boolean
  handleSetIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const sideMenuItems = {
  Home: '/',
  Store: '/store',
  Search: '/search',
  Account: '/login',
  Cart: '/cart'
}

const SideMenu = ({ open, handleSetIsOpen }: ISideMenu) => {
  return (
    <Popover open={open}>
      <PopoverTrigger></PopoverTrigger>
      <PopoverContent
        onInteractOutside={() => handleSetIsOpen(false)}
        className="bg-box text-white flex flex-col justify-between w-full sm:pl-8 rounded-xl sm:ml-3 h-[calc(100vh-20px)]"
      >
        <div
          onClick={() => handleSetIsOpen(false)}
          className="w-full flex justify-end cursor-pointer hover:text-gray-200 duration-300"
        >
          <X size={22} strokeWidth={2} />
        </div>
        <div className="flex flex-col gap-8">
          {Object.entries(sideMenuItems).map(([name, href]) => {
            return (
              <Link key={name} href={href} className="text-3xl leading-10 hover:text-gray-200">
                {name}
              </Link>
            )
          })}
        </div>
        <span className="text-[13px]">
          © {new Date().getFullYear()} Medusa Store - Andrew Lee Developer.
        </span>
      </PopoverContent>
    </Popover>
  )
}

export default SideMenu
