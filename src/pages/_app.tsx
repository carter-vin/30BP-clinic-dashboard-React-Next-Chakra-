import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import 'styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('splash_screen')
      if (loader) loader.style.display = 'none'
    }
  }, [])

  const app = <Component {...pageProps} />

  return (
    <ChakraProvider>
      <>{getLayout(app)}</>
    </ChakraProvider>
  )
}

export default MyApp
