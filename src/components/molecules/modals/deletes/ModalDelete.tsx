import { ButtonCancel, ButtonConfirm } from 'components'
import { IconDelete } from 'assets'
import { useGlobalContext } from 'contexts'
import { MainModal } from '..'
import { Dispatch, SetStateAction, useState } from 'react'

type typeModal = {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  title: string
  subTitle: string
}

const ModalDelete = ({ show, setShow, title, subTitle }: typeModal) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { toast } = useGlobalContext()

  const handleClose = () => {
    setShow(false)
  }

  const handleDelete = () => {
    toast({ status: 'success', message: 'Berhasil Menghapus Data' })
    handleClose()
  }

  return (
    <MainModal
      isOpen={show}
      handleClose={() => {}}
      className="flex w-full max-w-[300px] flex-col space-y-5 rounded-xl bg-white px-6 py-5"
    >
      <div className="space-y-3">
        <div className="w-fit rounded-xl bg-brand-100/30 p-1.5">
          <IconDelete className="aspect-square w-5 text-brand-500" />
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-gray-900">{title}</h2>
          <p className="text-xs text-gray-500">{subTitle}</p>
        </div>
      </div>
      <div className="flex space-x-5">
        <ButtonConfirm text="Ya, Hapus" onClick={handleDelete} />
        <ButtonCancel text="Cancel" onClick={handleClose} />
      </div>
    </MainModal>
  )
}

export default ModalDelete
