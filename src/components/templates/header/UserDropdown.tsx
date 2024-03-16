import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const UserDropdown = ({
  name,
  signOut
}: {
  name: string | null | undefined
  signOut: () => void
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="text-content-title font-bold">
        <span>{name}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white rounded-[12px]">
        <DropdownMenuItem>
          <button
            className="flex w-full items-center rounded-xl justify-center text-center border-2 p-2"
            onClick={signOut}
          >
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default UserDropdown
