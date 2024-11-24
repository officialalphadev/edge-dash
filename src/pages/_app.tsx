import Head from 'next/head'
import type { AppProps } from 'next/app'
import { GlobalProvider } from 'contexts'
import { Toasts } from 'components'

if (process.env.NODE_ENV !== 'production') {
  require('../styles/globals.css')
} else {
  require('../styles/build.css')
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <GlobalProvider>
      <Head>
        <title>Alphadev Dashboard Marketing</title>
        <meta
          name="description"
          content="Dashboard for Marketing Alphadev Team created with Next JS"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
      <Toasts />
    </GlobalProvider>
  )
}
