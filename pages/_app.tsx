import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(fab)

function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false
})
