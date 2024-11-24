import Head from 'next/head'
import { MainLayout } from 'layouts'
import { IconAdd } from 'assets'
import {
  Button,
  ButtonWithIcon,
  TablePortfolio,
  ViewLoading,
  ViewNoData,
} from 'components'
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getPortfolios } from 'services'
import { Portfolio } from 'types'
import { useGlobalContext } from 'contexts'
import { defaultMetadata } from '../../constants'
import { Metadata } from 'types'

const PagePortfolio: FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  const [metadata, setMetadata] = useState<Metadata>(defaultMetadata)

  const { push, query } = useRouter()
  const { token } = useGlobalContext()

  const isEmpty = portfolios.length == 0

  const Content: FC = () => {
    if (isLoading) return <ViewLoading />
    if (isEmpty) return <ViewNoData />
    return <TablePortfolio portfolios={portfolios} metadata={metadata} />
  }

  useEffect(() => {
    const getData = async () => {
      const response = await getPortfolios(
        token,
        Number(query.page) || 1,
        Number(query.perPage) || 10
      )
      setIsLoading(false)
      if (response?.status == 200) {
        setPortfolios(response.data.payload.data.portfolios)
        setMetadata(response.data.payload.data.metadata)
      } else {
        setPortfolios([])
        setMetadata(defaultMetadata)
      }
    }
    getData()
  }, [query, token])

  return (
    <>
      <Head>
        <title>Portofolio | Alphadev Dashboard Marketing</title>
      </Head>
      <MainLayout
        title={'Ringkasan Jadwal Alphadev'}
        subTitle={'Kamu dapat mengedit semua hal sesuai keinginan'}
        buttonAction={
          <ButtonWithIcon
            text="Tambahkan acara baru"
            icon={<IconAdd className="aspect-square w-5" />}
            onClick={() => push('/portfolios/add')}
          />
        }
      >
        <Button
          type="button"
          size="md"
          variant="brand-fill"
          text="Kelola Kategori"
          onClick={() => push('/portfolios/categories')}
          className="mb-6"
        />
        <Content />
      </MainLayout>
    </>
  )
}

export default PagePortfolio
