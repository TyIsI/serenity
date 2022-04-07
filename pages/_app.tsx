import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faPlus)

function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false
})
