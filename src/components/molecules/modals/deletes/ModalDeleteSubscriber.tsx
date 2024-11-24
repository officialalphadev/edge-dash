import { useState } from 'react'
import { ButtonCancel, ButtonConfirm } from 'components'
import { IconDelete } from 'assets'
import { useGlobalContext } from 'contexts'
import { MainModal } from '..'
import { deleteSubscriber } from 'services'
import { Subscriber } from 'types'
import { useRouter } from 'next/router'

type TModalReturn = {
  openModal: () => void
}

interface IModalDeleteSubscriber {
  subscriber: Subscriber
  children: (props: TModalReturn) => JSX.Element
}

const ModalDeleteSubscriber = ({
  subscriber,
  children,
}: IModalDeleteSubscriber) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const { toast, token } = useGlobalContext()
  const { push } = useRouter()

  const handleDelete = async () => {
    setIsLoading(true)
    const response = await deleteSubscriber(token, subscriber.subscriber_id)
    response?.status == 202
      ? toast({ status: 'success', message: 'Berhasil hapus data' })
      : toast({ status: 'error', message: 'Gagal hapus Data' })
    setIsLoading(false)
    setIsOpen(false)
    push({})
  }

  const modalReturn = {
    openModal: () => setIsOpen(true),
  }

  return (
    <>
      {children(modalReturn)}
      <MainModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        className="flex w-full max-w-[300px] flex-col space-y-5 rounded-xl bg-white px-6 py-5"
      >
        <div className="space-y-3">
          <div className="w-fit rounded-xl bg-brand-100/30 p-1.5">
            <IconDelete className="aspect-square w-5 text-brand-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-gray-900">
              Kamu yakin ingin menghapus tabel ini?
            </h2>
            <p className="text-xs text-gray-500">
              Semua data pada tabel tersebut akan terhapus.
            </p>
          </div>
        </div>
        <div className="flex space-x-5">
          <ButtonConfirm
            text="Ya, Hapus"
            isLoading={isLoading}
            onClick={handleDelete}
          />
          <ButtonCancel text="Cancel" onClick={() => setIsOpen(false)} />
        </div>
      </MainModal>
    </>
  )
}

export default ModalDeleteSubscriber
