import { ButtonCancel, ButtonConfirm, InputTextWithLabel } from 'components'
import { IconEdit } from 'assets'
import { useGlobalContext } from 'contexts'
import { MainModal } from '..'
import { SyntheticEvent, useState } from 'react'
import { User } from 'types'
import { editUser } from 'services'
import { useRouter } from 'next/router'

type TModalReturn = {
  openModal: () => void
}

interface IModalEditUser {
  user: User
  children: (props: TModalReturn) => JSX.Element
}

const ModalEditUser = ({ user, children }: IModalEditUser) => {
  const initialState = {
    fullName: user.profile.fullName,
    email: user.emailAddress,
    password: '',
  }

  const [isLoading, setIsLoading] = useState(false)
  const [dataPost, setDataPost] = useState(initialState)
  const [isOpen, setIsOpen] = useState(false)

  const { toast, token } = useGlobalContext()
  const { push } = useRouter()

  const handleEditRole = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const data = {
      fullName: dataPost.fullName,
      email: dataPost.email,
      ...(dataPost.password != '' && { password: dataPost.password }),
    }
    const response = await editUser(token, user.userId, data)
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
              <p className="font-semibold text-gray-900">Edit Pengguna</p>
              <p className="text-xs text-gray-500">
                Merubah pengguna pada Dashboard Alphadev
              </p>
            </div>
          </div>
          <div className="px-5 pt-5">
            <InputTextWithLabel
              type="text"
              label="Nama :"
              placeholder="Nama Lengkap"
              value={dataPost.fullName}
              onChange={(event) =>
                setDataPost({ ...dataPost, fullName: event.target.value })
              }
              required
            />
            <InputTextWithLabel
              type="email"
              label="Email :"
              placeholder="contoh@gmail.com"
              value={dataPost.email}
              onChange={(event) =>
                setDataPost({ ...dataPost, email: event.target.value })
              }
              required
            />
            <InputTextWithLabel
              type="password"
              label="Kata Sandi Baru :"
              placeholder="*****"
              onChange={(event) =>
                setDataPost({ ...dataPost, password: event.target.value })
              }
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

export default ModalEditUser
