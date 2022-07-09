/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { mockPatient } from 'mock/patients'
import { useRouter } from 'next/router'
import { useContext, createContext, useState } from 'react'
import { SearcPatientType } from 'types/Patient'

type SearchContextType = {
  searchQuery: string
  patientSearchResult: any[]
  handleSearch: (queryParams: string) => void
}
const searchDataContext = createContext<SearchContextType>({
  searchQuery: '',
  patientSearchResult: [],
  handleSearch: () => {},
})
const { Provider } = searchDataContext

const useSearchDataProvider = () => {
  const [searchquery, setSearchQuery] = useState<string>('')
  const [patientSearchResult, setPatientSearchResult] = useState<
    SearcPatientType[]
  >([])

  const router = useRouter()
  const onSearchPage = Boolean(router.pathname === '/search')

  const searchPatients = async () => {
    setPatientSearchResult(!searchquery.length ? [] : mockPatient)
  }

  const handleSearch = (queryParams: string) => {
    setSearchQuery(queryParams)
    searchPatients()
    if (!onSearchPage) {
      router.push('/search')
    }
  }

  return {
    searchquery,
    patientSearchResult,
    handleSearch,
  }
}

// setup provider
export const SearchDataProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const data: any = useSearchDataProvider()
  return <Provider value={data}>{children}</Provider>
}

export const useSearchData = () => useContext(searchDataContext)
