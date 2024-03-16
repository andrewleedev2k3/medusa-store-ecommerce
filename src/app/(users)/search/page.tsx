import ResultSearch from '@/components/templates/search/ResultSearch'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Product'
}

const SearchPage = ({
  searchParams
}: {
  searchParams: {
    name: string
  }
}) => {
  return <ResultSearch value={searchParams.name} />
}

export default SearchPage
