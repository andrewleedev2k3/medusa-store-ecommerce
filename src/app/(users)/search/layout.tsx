'use client'

import { useRouter } from 'next/navigation'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import SearchBox from '@/components/templates/search/SearchBox'
import React, { useState, useEffect } from 'react'

const LayoutSearch = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Dialog open={true}>
      <DialogContent
        className="flex flex-col gap-6 max-w-screen-md h-screen shadow-none border-none outline-none px-6 overflow-scroll scrollbar-hide"
        onInteractOutside={() => router.back()}
      >
        <SearchBox />
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default LayoutSearch
