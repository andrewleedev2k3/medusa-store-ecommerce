import { Search, X } from 'lucide-react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
const SearchBox = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [inputValue, setInputValue] = useState(searchParams.get('name')?.toString() || '')

  const handleSearch = useDebouncedCallback((searchText: string) => {
    const params = new URLSearchParams(searchParams)
    if (searchText) {
      params.set('name', searchText.trim())
    } else {
      params.delete('name')
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, 200)

  const handleClearInput = () => {
    handleSearch('')
    setInputValue('')
  }

  return (
    <div className="bg-box flex items-center px-4 min-h-[54px] text-white rounded-xl">
      <Search size={21} />
      <input
        className="mx-2 w-full text-white h-full outline-none bg-transparent placeholder:text-white"
        type="text"
        value={inputValue}
        placeholder="Search products..."
        onChange={e => {
          setInputValue(e.target.value)
          handleSearch(e.target.value)
        }}
      />
      {inputValue && <X className="cursor-pointer" onClick={handleClearInput} size={22} />}
    </div>
  )
}

export default SearchBox
