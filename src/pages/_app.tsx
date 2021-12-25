import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { CurrencyProvider } from '../components/providers/CurrencyProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <CurrencyProvider>
          <Component {...pageProps} />
        </CurrencyProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
