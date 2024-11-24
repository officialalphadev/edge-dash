import { useRouter } from 'next/router'
import { Button } from 'components'
import { IconLogout } from 'assets'
import { useGlobalContext } from 'contexts'
import { MainModal } from '.'

export type typeModal = {
  isOpen: boolean
  handleClose: () => void
}

const ModalLogout = ({ isOpen, handleClose }: typeModal) => {
  const { replace } = useRouter()
  const { toast } = useGlobalContext()

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    toast({ status: 'success', message: 'Berhasil Keluar' })
    replace('/login')
  }

  return (
    <MainModal
      isOpen={isOpen}
      handleClose={handleClose}
      className="flex w-full max-w-xs flex-col items-center space-y-4 rounded-lg bg-white p-6"
    >
      <div className="flex aspect-square w-12 items-center justify-center rounded-xl bg-brand-100/30">
        <IconLogout className="h-6 w-6 text-brand-500" />
      </div>
      <h2 className="text-sm font-bold text-gray-700">
        Are you sure to logout?
      </h2>
      <div className="grid w-full grid-cols-2 gap-2">
        <Button text="Ya, Logout" onClick={handleLogout} />
        <Button variant="gray-fill" text="Batal" onClick={handleClose} />
      </div>
    </MainModal>
  )
}

export default ModalLogout
