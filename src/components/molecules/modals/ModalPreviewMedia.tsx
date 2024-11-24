import { Media } from 'types'
import MainModal from './MainModal'
import { ButtonIcon, Images } from 'components/atoms'
import { IconClose } from 'assets'
import { useState } from 'react'

type TModalReturn = {
  openModal: () => void
}

interface IModalPreviewMedia {
  media: Media
  children: (props: TModalReturn) => JSX.Element
}

const ModalPreviewMedia = ({ media, children }: IModalPreviewMedia) => {
  const [isOpen, setIsOpen] = useState(false)

  const modalReturn = {
    openModal: () => setIsOpen(true),
  }

  return (
    <>
      {children(modalReturn)}
      <MainModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        className="flex max-h-[80vh] w-full max-w-3xl"
      >
        <div className="relative aspect-video w-full">
          <Images
            src={media.url}
            alt={media.id}
            fill={true}
            style={{ objectFit: 'contain' }}
            className="relative h-full w-full overflow-hidden rounded-xl bg-gray-100"
          />
          <ButtonIcon
            className="absolute right-2 top-2"
            icon={<IconClose className="aspect-square w-5" />}
            size="xs"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </MainModal>
    </>
  )
}

export default ModalPreviewMedia
