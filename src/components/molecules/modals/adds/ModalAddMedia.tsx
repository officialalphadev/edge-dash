import { ButtonCancel, ButtonConfirm, ButtonIcon, InputFiles } from 'components'
import { IconAdd, IconClose } from 'assets'
import { MainModal } from '..'
import { FC, SyntheticEvent, useState } from 'react'
import { createMedia } from 'services'
import { useGlobalContext } from 'contexts'
import { useRouter } from 'next/router'

type TModalReturn = { openModal: () => void }

interface IModalAddMedia {
  children: (props: TModalReturn) => JSX.Element
}

const ModalAddMedia: FC<IModalAddMedia> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const { token, toast } = useGlobalContext()
  const { push } = useRouter()

  const handleAddMedia = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const data = new FormData()
    files.map((file) => {
      data.append('images', file)
    })

    const response = await createMedia(token, data)
    response?.status == 201
      ? toast({ status: 'success', message: 'Berhasil menambahkan data.' })
      : toast({ status: 'error', message: 'Gagal menambahkan data.' })

    setIsLoading(false)
    setIsOpen(false)
    setFiles([])
    push({})
  }

  const modalReturn: TModalReturn = { openModal: () => setIsOpen(true) }

  return (
    <>
      {children(modalReturn)}
      <MainModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        className="flex max-h-[80vh] w-full max-w-[600px] flex-col overflow-hidden rounded-xl bg-white"
      >
        <form onSubmit={handleAddMedia} className="scrollbar overflow-y-auto">
          <div className="sticky top-0 z-20 border-b border-gray-200 bg-white px-5 py-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-fit rounded-xl bg-brand-100/30 p-1.5">
                  <IconAdd className="aspect-square w-5 text-brand-500" />
                </div>
                <span className="font-semibold text-gray-900">
                  Tambah Media
                </span>
              </div>
              <ButtonIcon
                variant="gray-outline"
                size="xs"
                icon={<IconClose className="aspect-square w-6" />}
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
          <div className="px-5 pt-5">
            <InputFiles label="" data={files} setData={setFiles} />
          </div>
          <div className="sticky bottom-0 z-20 flex space-x-5 border-t border-gray-200 bg-white p-5">
            <ButtonCancel
              type="button"
              text="Batal"
              onClick={() => setIsOpen(false)}
            />
            <ButtonConfirm type="submit" text="Unggah" isLoading={isLoading} />
          </div>
        </form>
      </MainModal>
    </>
  )
}

export default ModalAddMedia
