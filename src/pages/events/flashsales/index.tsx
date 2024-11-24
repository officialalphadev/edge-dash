import Head from 'next/head'
import { MainLayout } from 'layouts'
import {
  ButtonWithIcon,
  TableFlashsale,
  ViewLoading,
  ViewNoData,
} from 'components'
import { IconAdd } from 'assets'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Flashsale from 'types/flashsale'
import { defaultMetadata } from '../../../constants'
import { useGlobalContext } from 'contexts'
import { getFlashsales } from 'services'
import { Metadata } from 'types'

const PageFlashsale = () => {
  const [flashsales, setFlashsales] = useState<Flashsale[]>([])
  const [metadata, setMetadata] = useState<Metadata>(defaultMetadata)
  const [isLoading, setIsLoading] = useState(true)

  const { token } = useGlobalContext()
  const { push, query } = useRouter()

  const isEmpty = flashsales.length == 0

  const Content = () => {
    if (isLoading) return <ViewLoading />
    if (isEmpty) return <ViewNoData />
    return <TableFlashsale flashsales={flashsales} metadata={metadata} />
  }

  useEffect(() => {
    const getData = async () => {
      const response = await getFlashsales(
        token,
        Number(query.page) || 1,
        Number(query.perPage) || 10
      )
      setIsLoading(false)
      if (response?.status === 200) {
        setFlashsales(response.data.payload.data.flashsales)
        setMetadata(response.data.payload.data.metadata)
      } else {
        setFlashsales([])
        setMetadata(defaultMetadata)
      }
    }
    getData()
  }, [query, token])

  return (
    <>
      <Head>
        <title>Flash Sale | Alphadev Dashboard Marketing</title>
      </Head>
      <MainLayout
        title={'Ringkasan Jadwal Alphadev'}
        subTitle={'Kamu dapat mengedit semua hal sesuai keinginan'}
        buttonAction={
          <ButtonWithIcon
            text="Tambahkan acara baru"
            icon={<IconAdd className="aspect-square w-5" />}
            onClick={() => push('/events/flashsales/add')}
          />
        }
      >
        <Content />
      </MainLayout>
    </>
  )
}

export default PageFlashsale
