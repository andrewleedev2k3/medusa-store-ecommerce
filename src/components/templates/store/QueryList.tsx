'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const QueryList = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const query = searchParams.get('sortBy')
  const [selectedSort, setSelectedSort] = useState('')

  useEffect(() => {
    setSelectedSort(query || '')
  }, [query])

  const handleSearch = (searchText: string) => {
    const params = new URLSearchParams(searchParams)
    if (searchText) {
      params.set('sortBy', searchText)
    } else {
      params.delete('sortBy')
    }
    router.replace(`${pathname}?${params.toString()}`)
  }

  const getClassName = (value: string) => {
    return selectedSort === value
      ? 'list-disc text-content-title font-medium cursor-pointer'
      : 'cursor-pointer'
  }

  return (
    <ul className="flex flex-col gap-4 text-[13px] text-content-text">
      <li className="text-content-sub">Sort by</li>
      <li className={getClassName('created_at')} onClick={() => handleSearch('created_at')}>
        Latest Arrivals
      </li>
      <li className={getClassName('price_asc')} onClick={() => handleSearch('price_asc')}>
        Price: Low &gt; High
      </li>
      <li className={getClassName('price_desc')} onClick={() => handleSearch('price_desc')}>
        Price: High &gt; Low
      </li>
    </ul>
  )
}

export default QueryList
