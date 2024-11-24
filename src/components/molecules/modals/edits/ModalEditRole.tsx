import {
  ButtonCancel,
  ButtonConfirm,
  InputTextWithLabel,
  InputTextareaWithLabel,
} from 'components'
import { IconEdit } from 'assets'
import { useGlobalContext } from 'contexts'
import { MainModal } from '..'
import { SyntheticEvent, useState } from 'react'
import { Role } from 'types'
import { editRole } from 'services'
import { useRouter } from 'next/router'

type TModalReturn = {
  openModal: () => void
}

interface IModalEditRole {
  role: Role
  children: (props: TModalReturn) => JSX.Element
}

const ModalEditRole = ({ role, children }: IModalEditRole) => {
  const initialState = {
    name: role.name,
    description: role.description,
    permissions: JSON.stringify(role.permissions),
  }

  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [dataPost, setDataPost] = useState(initialState)

  const { toast, token } = useGlobalContext()
  const { push } = useRouter()

  const handleEditRole = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const response = await editRole(token, role.roleId, dataPost)
    response?.status == 202
      ? toast({ status: 'success', message: 'Berhasil merubah data' })
      : toast({ status: 'error', message: 'Gagal merubah data' })
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
        className="flex max-h-[80vh] w-full max-w-[600px] flex-col overflow-hidden rounded-xl bg-white"
      >
        <form onSubmit={handleEditRole} className="scrollbar overflow-y-auto">
          <div className="sticky top-0 flex items-center space-x-3 border-b border-gray-200 bg-white px-5 py-3">
            <div className="w-fit rounded-xl bg-brand-100/30 p-1.5">
              <IconEdit className="aspect-square w-5 text-brand-500" />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-gray-900">Edit Role</p>
              <p className="text-xs text-gray-500">
                Merubah role pada Dashboard Alphadev
              </p>
            </div>
          </div>
          <div className="px-5 pt-5">
            <InputTextWithLabel
              type="text"
              label="Nama Role :"
              placeholder="Nama Role Pengguna"
              value={dataPost.name}
              onChange={(event) =>
                setDataPost({ ...dataPost, name: event.target.value })
              }
              required
            />
            <InputTextareaWithLabel
              rows={6}
              label="Deskripsi Role :"
              placeholder="Deskripsi Role Pengguna"
              value={role.description}
              onChange={(event) =>
                setDataPost({ ...dataPost, description: event.target.value })
              }
              required
            />
            <InputTextareaWithLabel
              rows={6}
              label="Akses Role :"
              placeholder="Akses Role Pengguna"
              value={JSON.stringify(role.permissions)}
              onChange={(event) =>
                setDataPost({ ...dataPost, permissions: event.target.value })
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

export default ModalEditRole
