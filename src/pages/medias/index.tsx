import {
  ButtonAction,
  ButtonWithIcon,
  CardMedia,
  MainTable,
  ModalAddMedia,
  ModalDeleteMedia,
  ViewLoading,
  ViewNoData,
} from 'components'
import { MainLayout } from 'layouts'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Media, Metadata } from 'types'
import { IconAdd } from 'assets'
import { getMedias } from 'services'
import { useGlobalContext } from 'contexts'
import { useRouter } from 'next/router'
import { defaultMetadata } from '../../constants'

const PageMedia = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [medias, setMedias] = useState<Media[]>([])
  const [metadata, setMetadata] = useState<Metadata>(defaultMetadata)
  const [selectedMedias, setSelectedMedias] = useState<Media[]>([])

  const { token } = useGlobalContext()
  const { query } = useRouter()

  const isEmpty = medias.length == 0
  const amountSelectedMedias = selectedMedias.length
  const isSelectedMedias = amountSelectedMedias != 0

  const Content = () => {
    if (isLoading) return <ViewLoading />
    if (isEmpty) return <ViewNoData />
    return (
      <div className="scrollbar flex h-full flex-col overflow-y-auto rounded-xl bg-white shadow">
        <div className="sticky top-0 z-10 flex items-center gap-6 bg-white p-8">
          <p className="text-sm font-semibold text-gray-900">
            Terpilih ({amountSelectedMedias})
          </p>
          {isSelectedMedias && (
            <ModalDeleteMedia
              selectedMedias={selectedMedias}
              onChange={() => setSelectedMedias([])}
            >
              {({ openModal }) => (
                <ButtonAction type="delete" onClick={openModal} />
              )}
            </ModalDeleteMedia>
          )}
        </div>
        <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3">
          {medias.map((media) => (
            <CardMedia
              key={media.id}
              media={media}
              selectedMedias={selectedMedias}
              setSelectedMedias={setSelectedMedias}
            />
          ))}
        </div>
        <div className="mb-6 px-8">
          <MainTable metadata={metadata} pagination />
        </div>
      </div>
    )
  }

  useEffect(() => {
    const getData = async () => {
      const response = await getMedias(
        token,
        Number(query.page) || 1,
        Number(query.perPage) || 10
      )
      setIsLoading(false)
      if (response?.status == 200) {
        setMedias(response.data.payload.data.medias)
        setMetadata(response.data.payload.data.metadata)
      } else {
        setMedias([])
        setMetadata(defaultMetadata)
      }
    }
    getData()
  }, [query, token])

  return (
    <>
      <Head>
        <title>Media | Alphadev Dashboard Marketing</title>
      </Head>
      <MainLayout
        title="Media"
        subTitle="Semua media pada Dashboard Alphadev"
        buttonAction={
          <ModalAddMedia>
            {({ openModal }) => (
              <ButtonWithIcon
                text="Tambahkan media baru"
                icon={<IconAdd className="aspect-square w-5" />}
                onClick={openModal}
              />
            )}
          </ModalAddMedia>
        }
      >
        <Content />
      </MainLayout>
    </>
  )
}

export default PageMedia
