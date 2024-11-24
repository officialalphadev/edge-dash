import { AlphadevIcon } from 'assets'
import { Images } from 'components'
import Head from 'next/head'

const LoadingLayout = () => {
  return (
    <>
      <Head>
        <title>Memuat | Alphadev Dashboard Marketing</title>
        <meta
          name="description"
          content="Dashboard for Marketing Alphadev Team created with Next JS"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
        <Images
          src={AlphadevIcon}
          alt="alphadev-icon"
          fill={true}
          style={{ objectFit: 'contain' }}
          className="relative aspect-square w-20 animate-pulse"
        />
        <p className="text-xs font-semibold text-gray-500">Memuat ...</p>
      </div>
    </>
  )
}

export default LoadingLayout
