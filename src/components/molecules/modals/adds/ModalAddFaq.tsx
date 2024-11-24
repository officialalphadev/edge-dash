import {
  ButtonCancel,
  ButtonConfirm,
  InputTextWithLabel,
  InputTextareaWithLabel,
} from 'components'
import { IconAdd } from 'assets'
import { useGlobalContext } from 'contexts'
import { MainModal } from '..'
import { SyntheticEvent, useState } from 'react'
import { createFaq } from 'services'
import { useRouter } from 'next/router'

type TModalReturn = { openModal: () => void }

interface IModalAddFaq {
  children: (props: TModalReturn) => JSX.Element
}

const ModalAddFaq = ({ children }: IModalAddFaq) => {
  const initialState = { title: '', description: '' }

  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [dataPost, setDataPost] = useState(initialState)

  const { toast, token } = useGlobalContext()
  const { push } = useRouter()

  const handleAddFaq = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const response = await createFaq(token, dataPost)
    response?.status === 201
      ? toast({ status: 'success', message: 'Berhasil menambah data' })
      : toast({ status: 'error', message: 'Gagal menambah data' })
    setIsLoading(false)
    setIsOpen(false)
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
        <form onSubmit={handleAddFaq} className="scrollbar overflow-y-auto">
          <div className="sticky top-0 flex items-center space-x-3 border-b border-gray-200 bg-white px-5 py-3">
            <div className="w-fit rounded-xl bg-brand-100/30 p-1.5">
              <IconAdd className="aspect-square w-5 text-brand-500" />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-gray-900">Tambah FAQ</p>
              <p className="text-xs text-gray-500">
                Menambahkan FAQ baru pada Dashboard Alphadev
              </p>
            </div>
          </div>
          <div className="px-5 pt-5">
            <InputTextWithLabel
              label="Judul :"
              placeholder="Judul FAQ"
              onChange={(event) =>
                setDataPost({ ...dataPost, title: event.target.value })
              }
              required
            />
            <InputTextareaWithLabel
              rows={6}
              label="Deskripsi :"
              placeholder="Deskripsi FAQ"
              onChange={(event) =>
                setDataPost({ ...dataPost, description: event.target.value })
              }
              required
            />
          </div>
          <div className="sticky bottom-0 flex space-x-5 border-t border-gray-200 bg-white p-5">
            <ButtonConfirm type="submit" text="Simpan" isLoading={isLoading} />
            <ButtonCancel
              type="button"
              text="Batal"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </form>
      </MainModal>
    </>
  )
}

export default ModalAddFaq
