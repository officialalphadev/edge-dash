/* eslint-disable react-hooks/exhaustive-deps */
import { IconAdd, IconCheck, IconClose } from 'assets'
import { useEffect, useState } from 'react'
import { Media, Metadata } from 'types'
import MainModal from './MainModal'
import { ButtonCancel, ButtonConfirm, Images } from 'components/atoms'
import { defaultMetadata } from '../../../constants'
import { ViewLoading } from 'components/organisms'
import { useGlobalContext } from 'contexts'
import { getMedias } from 'services'

type TypeChooseMedia = {
  label: string
  onChange?: (medias: Media[]) => void
  values?: string[]
}

const ChooseMedia = ({ label, onChange, values = [] }: TypeChooseMedia) => {
  const [medias, setMedias] = useState<Media[]>([])
  const [choosedMedias, setChoosedMedias] = useState<Media[]>([])
  const [showModalChooseMedia, setShowModalChooseMedia] = useState(false)
  const [metadata, setMetadata] = useState<Metadata>(defaultMetadata)
  const [isLoading, setIsLoading] = useState(true)

  const { token } = useGlobalContext()

  const handleDeleteMedia = (media: Media) => {
    const updatedMedias = choosedMedias.filter(
      (choosedMedia) => choosedMedia.id !== media.id
    )
    setChoosedMedias(updatedMedias)
    onChange?.(updatedMedias)
  }

  const handleOpen = () => setShowModalChooseMedia(true)

  const ModalChooseMedia = () => {
    const [selectedMedias, setSelectedMedias] = useState<Media[]>([])

    const handleClose = () => {
      setSelectedMedias([])
      setShowModalChooseMedia(false)
    }

    const handleChooseMedias = () => {
      onChange?.(selectedMedias)
      setChoosedMedias(selectedMedias)
      handleClose()
    }

    useEffect(() => {
      setSelectedMedias(choosedMedias)
    }, [showModalChooseMedia])

    const Content = () => {
      if (isLoading) return <ViewLoading />
      return (
        <>
          {medias.map((media, index) => {
            const selectedMediaIds = selectedMedias.map(
              (selectedMedia) => selectedMedia.id
            )
            const isMediaSelected = selectedMediaIds.includes(media.id)

            const handleClickMedia = () => {
              if (!isMediaSelected)
                return setSelectedMedias([...selectedMedias, media])
              setSelectedMedias(
                selectedMedias.filter(
                  (selectedMedia) => selectedMedia.id != media.id
                )
              )
            }

            return (
              <div
                key={index}
                className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border-2 border-gray-200 bg-gray-100 transition-all duration-300 hover:border-brand-500"
                onClick={handleClickMedia}
              >
                <Images
                  src={media.url}
                  alt={media.id}
                  fill={true}
                  style={{ objectFit: 'contain' }}
                  className="relative h-full w-full bg-gray-100"
                />

                {isMediaSelected && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <IconCheck className="aspect-square w-10 rounded-lg bg-brand-500 p-1.5 text-white" />
                  </div>
                )}
              </div>
            )
          })}
        </>
      )
    }

    return (
      <MainModal
        isOpen={showModalChooseMedia}
        handleClose={handleClose}
        className="flex max-h-[80vh] w-full max-w-[600px] flex-col overflow-hidden rounded-xl bg-white"
      >
        <div className="scrollbar overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center space-x-3 border-b border-gray-200 bg-white px-5 py-3">
            <div className="w-fit rounded-xl bg-brand-100/30 p-1.5">
              <IconAdd className="aspect-square w-5 text-brand-500" />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-gray-900">Pilih Media</p>
              <p className="text-xs text-gray-500">
                Memilih media pada Dashboard Alphadev
              </p>
            </div>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-3 gap-5">
              <Content />
            </div>
          </div>
          <div className="sticky bottom-0 flex space-x-5 border-t border-gray-200 bg-white p-5">
            <ButtonConfirm
              type="button"
              text="Pilih"
              onClick={handleChooseMedias}
            />
            <ButtonCancel type="button" text="Batal" onClick={handleClose} />
          </div>
        </div>
      </MainModal>
    )
  }

  useEffect(() => {
    if (values.length !== 0 && medias.length !== 0) {
      const currentSelectedMedias = medias.filter((media) =>
        values.includes(media.id)
      )
      setChoosedMedias(currentSelectedMedias)
    }
  }, [medias, values])

  useEffect(() => {
    const getDataMedia = async () => {
      const response = await getMedias(token, 1, 1000)
      if (response?.status == 200) {
        setMedias(response.data.payload.data.medias)
        setMetadata(response.data.payload.data.metadata)
      } else {
        setMedias([])
        setMetadata(defaultMetadata)
      }
      setIsLoading(false)
    }
    getDataMedia()
  }, [token])

  return (
    <>
      <div className="mb-6 flex flex-col">
        <label className="blosetChoosedMediasck mb-2 text-sm font-semibold text-gray-900">
          {label}
        </label>
        <div className="flex flex-wrap gap-6">
          {choosedMedias.map((media, index) => (
            <div
              key={index}
              className="relative flex flex-col flex-wrap space-y-2"
            >
              <IconClose
                className="absolute right-0 z-10 aspect-square w-5 translate-x-1/2 cursor-pointer rounded-full bg-brand-500 p-1 text-white"
                onClick={() => handleDeleteMedia(media)}
              />
              <Images
                src={media.url}
                alt={media.id}
                fill={true}
                style={{ objectFit: 'contain' }}
                className="relative aspect-square w-32 overflow-hidden rounded-xl bg-gray-100 shadow"
              />
            </div>
          ))}
          <div
            onClick={handleOpen}
            className="mt-2 flex aspect-square h-fit w-32 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-100 duration-300 hover:bg-gray-50"
          >
            <IconAdd className="aspect-square w-10 text-brand-500" />
          </div>
        </div>
      </div>
      <ModalChooseMedia />
    </>
  )
}

export default ChooseMedia
