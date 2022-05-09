import { ChakraProvider } from '@chakra-ui/react'
import { Head } from 'next/document'
import { theme } from '../../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp