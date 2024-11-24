import { IconAdd } from 'assets'
import {
  ButtonWithIcon,
  ModalAddSubscriber,
  TableSubscriber,
  ViewLoading,
  ViewNoData,
} from 'components'
import { defaultMetadata } from '../../../constants'
import { useGlobalContext } from 'contexts'
import { MainLayout } from 'layouts'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getSubscribers } from 'services'
import { Metadata, Subscriber } from 'types'
import { useRouter } from 'next/router'

const PageSubscriber = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [metadata, setMetadata] = useState<Metadata>(defaultMetadata)

  const { token } = useGlobalContext()
  const { query } = useRouter()

  const isEmpty = subscribers.length == 0

  const Content = () => {
    if (isLoading) return <ViewLoading />
    if (isEmpty) return <ViewNoData />
    return <TableSubscriber subscribers={subscribers} metadata={metadata} />
  }

  useEffect(() => {
    const getDataSubscriber = async () => {
      const response = await getSubscribers(
        token,
        Number(query.page) || 1,
        Number(query.perPage) || 10
      )
      setIsLoading(false)
      if (response?.status == 200) {
        setSubscribers(response.data.payload.data.subscriberData)
        setMetadata(response.data.payload.data.metadata)
      } else {
        setSubscribers([])
        setMetadata(defaultMetadata)
      }
    }
    getDataSubscriber()
  }, [query, token])

  return (
    <>
      <Head>
        <title>Subscriber | Alphadev Dashboard Marketing</title>
      </Head>
      <MainLayout
        title={'Subscriber Alphadev'}
        subTitle={'Kamu dapat mengedit semua hal sesuai keinginan'}
        buttonAction={
          <ModalAddSubscriber>
            {({ openModal }) => (
              <ButtonWithIcon
                text="Tambahkan subcriber baru"
                icon={<IconAdd className="aspect-square w-5" />}
                onClick={openModal}
              />
            )}
          </ModalAddSubscriber>
        }
      >
        <Content />
      </MainLayout>
    </>
  )
}

export default PageSubscriber
