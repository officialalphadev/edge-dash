import {
  ButtonWithIcon,
  ModalAddFaq,
  TableFaq,
  ViewLoading,
  ViewNoData,
} from 'components'
import { defaultMetadata } from '../../constants'
import { useGlobalContext } from 'contexts'
import { MainLayout } from 'layouts'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { getFaqs } from 'services'
import { Faq, Metadata } from 'types'
import { IconAdd } from 'assets'

const PageFaq: FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [faqs, setFaqs] = useState<Faq[]>([])
  const [metadata, setMetadata] = useState<Metadata>(defaultMetadata)

  const { query } = useRouter()
  const { token } = useGlobalContext()

  const isEmpty = faqs.length === 0

  const Content: FC = () => {
    if (isLoading) return <ViewLoading />
    if (isEmpty) return <ViewNoData />
    return <TableFaq faqs={faqs} metadata={metadata} />
  }

  useEffect(() => {
    const getData = async () => {
      const response = await getFaqs(
        token,
        Number(query.page) || 1,
        Number(query.perPage) || 10
      )
      setIsLoading(false)
      if (response?.status === 200) {
        setFaqs(response.data.payload.data.data)
        setMetadata(response.data.payload.data.metadata)
      } else {
        setFaqs([])
        setMetadata(defaultMetadata)
      }
    }
    getData()
  }, [query, token])

  return (
    <>
      <Head>
        <title>FAQ | Alphadev Dashboard Marketing</title>
      </Head>
      <MainLayout
        title="FAQ"
        subTitle="Kamu dapat mengubah dan menambahkan FAQ pada Dashboard Alphadev"
        buttonAction={
          <ModalAddFaq>
            {({ openModal }) => (
              <ButtonWithIcon
                text="Tambahkan FAQ"
                icon={<IconAdd className="aspect-square w-5" />}
                onClick={openModal}
              />
            )}
          </ModalAddFaq>
        }
      >
        <Content />
      </MainLayout>
    </>
  )
}

export default PageFaq
