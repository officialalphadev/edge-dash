import { ButtonCancel, ButtonConfirm, InputTextWithLabel } from 'components'
import { IconEdit } from 'assets'
import { useGlobalContext } from 'contexts'
import { MainModal } from '..'
import { SyntheticEvent, useState } from 'react'
import { Profile } from 'types'
import { useRouter } from 'next/router'
import { editProfileFullName } from 'services'

type TModalReturn = {
  openModal: () => void
}

interface IModalEditProfile {
  profile: Profile
  children: (props: TModalReturn) => JSX.Element
}

const ModalEditProfile = ({ profile, children }: IModalEditProfile) => {
  const initialState = {
    fullName: profile.fullName,
    email: profile.user.emailAddress,
    password: '',
  }

  const [isLoading, setIsLoading] = useState(false)
  const [dataPost, setDataPost] = useState(initialState)
  const [isOpen, setIsOpen] = useState(false)

  const { toast, token } = useGlobalContext()
  const { push } = useRouter()

  const handleEditProfile = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const data = {
      fullName: dataPost.fullName,
      email: dataPost.email,
      ...(dataPost.password != '' && { password: dataPost.password }),
    }
    const response = await editProfileFullName(token, profile.profileId, data)
    response?.statusCode == 202
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
        className="flex max-h-[80vh] w-full max-w-[600px] flex-col rounded-xl bg-white"
      >
        <form onSubmit={handleEditProfile}>
          <div className="flex items-center space-x-3 border-b border-gray-200 px-5 py-3">
            <div className="w-fit rounded-xl bg-brand-100/30 p-1.5">
              <IconEdit className="aspect-square w-5 text-brand-500" />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-gray-900">Edit Profil</p>
              <p className="text-xs text-gray-500">
                Memperbarui profil pengguna Dashboard Alphadev
              </p>
            </div>
          </div>
          <div className="scrollbar overflow-y-auto px-5 pt-5">
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
          <div className="flex space-x-5 border-t border-gray-200 p-5">
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

export default ModalEditProfile
