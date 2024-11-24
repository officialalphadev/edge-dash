import { useEffect, useState } from 'react'
import { IconAdd } from 'assets'
import {
  ButtonWithIcon,
  ModalAddPortfolioCategory,
  TablePortfolioCategory,
  ViewLoading,
  ViewNoData,
} from 'components'
import { MainLayout } from 'layouts'
import Head from 'next/head'
import { useGlobalContext } from 'contexts'
import { getPortfolioCategories } from 'services'
import { Metadata, PortfolioCategory } from 'types'
import { useRouter } from 'next/router'
import { defaultMetadata } from '../../../constants'

const PageCategoriesPortfolio = () => {
  const [portfolioCategories, setPortfolioCategories] = useState<
    PortfolioCategory[]
  >([])
  const [metadata, setMetadata] = useState<Metadata>(defaultMetadata)
  const [isLoading, setIsLoading] = useState(true)

  const { query } = useRouter()
  const { token } = useGlobalContext()

  const isEmpty = portfolioCategories.length == 0

  const Content = () => {
    if (isLoading) return <ViewLoading />
    if (isEmpty) return <ViewNoData />
    return (
      <TablePortfolioCategory
        portfolioCategories={portfolioCategories}
        metadata={metadata}
      />
    )
  }

  useEffect(() => {
    const getData = async () => {
      const response = await getPortfolioCategories(
        token,
        Number(query.page) || 1,
        Number(query.perPage) || 10
      )
      setIsLoading(false)
      if (response?.status == 200) {
        setPortfolioCategories(response.data.payload.data.categories)
        setMetadata(response.data.payload.data.metadata)
      } else {
        setPortfolioCategories([])
        setMetadata(defaultMetadata)
      }
    }
    getData()
  }, [query, token])

  return (
    <>
      <Head>
        <title>Kategori Portfolio | Alphadev Dashboard Marketing</title>
      </Head>
      <MainLayout
        title="Kategori Portofolio"
        subTitle="Kamu dapat mengubah dan menambahkan kategori portofolio pada Dashboard Alphadev"
        buttonAction={
          <ModalAddPortfolioCategory>
            {({ openModal }) => (
              <ButtonWithIcon
                text="Tambahkan kategori"
                icon={<IconAdd className="aspect-square w-5" />}
                onClick={openModal}
              />
            )}
          </ModalAddPortfolioCategory>
        }
      >
        <Content />
      </MainLayout>
    </>
  )
}

export default PageCategoriesPortfolio
