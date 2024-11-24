import {
  ButtonCancel,
  ButtonConfirm,
  InputSelectWithLabel,
  InputTextWithLabel,
} from 'components'
import { IconAdd } from 'assets'
import { useGlobalContext } from 'contexts'
import { MainModal } from '..'
import { SyntheticEvent, useEffect, useState } from 'react'
import { createUser, getRoles } from 'services'
import { Role } from 'types'
import { useRouter } from 'next/router'

type TModalReturn = {
  openModal: () => void
}

interface IModalAddUser {
  children: (props: TModalReturn) => JSX.Element
}

const ModalAddUser = ({ children }: IModalAddUser) => {
  const initialState = {
    fullName: '',
    email: '',
    password: '',
    roleId: '',
  }

  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [dataPost, setdataPost] = useState(initialState)
  const [roles, setRoles] = useState<Role[]>([])

  const { toast, token } = useGlobalContext()
  const { push } = useRouter()

  const roleOptions = roles.map((role) => ({
    key: role.name,
    value: role.roleId,
  }))

  const handleAddUser = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const response = await createUser(token, dataPost)
    response?.status == 201
      ? toast({ status: 'success', message: 'Berhasil menambah data' })
      : toast({ status: 'error', message: 'Gagal menambah data' })
    setIsLoading(false)
    setIsOpen(false)
    push({})
  }

  useEffect(() => {
    const getData = async () => {
      const response = await getRoles(token, 1, 1000)
      response?.status == 200
        ? setRoles(response.data.payload.data.rolesData)
        : setRoles([])
    }
    getData()
  }, [token])

  const modalReturn = { openModal: () => setIsOpen(true) }

  return (
    <>
      {children(modalReturn)}
      <MainModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        className="flex max-h-[80vh] w-full max-w-[600px] flex-col overflow-hidden rounded-xl bg-white"
      >
        <form onSubmit={handleAddUser} className="scrollbar overflow-y-auto">
          <div className="sticky top-0 flex items-center space-x-3 border-b border-gray-200 bg-white px-5 py-3">
            <div className="w-fit rounded-xl bg-brand-100/30 p-1.5">
              <IconAdd className="aspect-square w-5 text-brand-500" />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-gray-900">Tambah Pengguna</p>
              <p className="text-xs text-gray-500">
                Menambahkan pengguna baru pada Dashboard Alphadev
              </p>
            </div>
          </div>
          <div className="px-5 pt-5">
            <InputTextWithLabel
              type="text"
              label="Nama :"
              placeholder="Nama Lengkap"
              onChange={(event) =>
                setdataPost({ ...dataPost, fullName: event.target.value })
              }
              required
            />
            <InputSelectWithLabel
              label="Role :"
              placeholder="Pilih Role"
              options={roleOptions}
              onChange={(value) => setdataPost({ ...dataPost, roleId: value })}
            />
            <InputTextWithLabel
              type="email"
              label="Email :"
              placeholder="contoh@gmail.com"
              onChange={(event) =>
                setdataPost({ ...dataPost, email: event.target.value })
              }
              required
            />
            <InputTextWithLabel
              type="password"
              label="Kata Sandi :"
              placeholder="*****"
              onChange={(event) =>
                setdataPost({ ...dataPost, password: event.target.value })
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

export default ModalAddUser
