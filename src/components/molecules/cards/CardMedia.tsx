import { IconCheck, IconDelete } from 'assets'
import { Button, Images } from 'components/atoms'
import { clsxm } from 'helpers'
import { Dispatch, SetStateAction } from 'react'
import { Media } from 'types'
import { ModalPreviewMedia } from '../modals'

type TypeCardMedia = {
  media: Media
  selectedMedias: Media[]
  setSelectedMedias: Dispatch<SetStateAction<Media[]>>
}

const CardMedia = ({
  media,
  selectedMedias,
  setSelectedMedias,
}: TypeCardMedia) => {
  const selectedMediaIds = selectedMedias.map(
    (selectedMedia) => selectedMedia.id
  )
  const isMediaSelected = selectedMediaIds.includes(media.id)

  const handleClickMedia = () => {
    if (!isMediaSelected) return setSelectedMedias([...selectedMedias, media])
    return setSelectedMedias(
      selectedMedias.filter((selectedMedia) => selectedMedia.id != media.id)
    )
  }

  return (
    <div className="group relative aspect-video overflow-hidden rounded-xl border-2 border-gray-200 bg-gray-100 transition-all duration-300 hover:border-brand-500">
      <Images
        src={media.url}
        alt={media.id}
        fill={true}
        style={{ objectFit: 'contain' }}
        className="relative h-full w-full bg-gray-100"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="absolute top-0 flex w-full items-center justify-between px-4 py-3">
          <div
            className={clsxm(
              'flex aspect-square w-5 cursor-pointer items-center justify-center rounded-[4px] transition-all duration-300',
              isMediaSelected ? 'bg-brand-500' : 'bg-white'
            )}
            onClick={handleClickMedia}
          >
            {isMediaSelected && (
              <IconCheck className="aspect-square w-4 text-white" />
            )}
          </div>
          <IconDelete className="aspect-square w-4 cursor-pointer text-white" />
        </div>
        <ModalPreviewMedia media={media}>
          {({ openModal }) => (
            <Button
              text="Preview"
              onClick={openModal}
              size="xs"
              type="button"
              variant="gray-outline"
            />
          )}
        </ModalPreviewMedia>
      </div>
    </div>
  )
}

export default CardMedia
