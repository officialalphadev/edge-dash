import { ButtonCancel, ButtonConfirm, InputTextWithLabel } from 'components'
import { IconEdit } from 'assets'
import { useGlobalContext } from 'contexts'
import { MainModal } from '..'
import { SyntheticEvent, useState } from 'react'
import { PortfolioCategory } from 'types'
import { editPortfolioCategory } from 'services'
import { useRouter } from 'next/router'

type TModalReturn = {
  openModal: () => void
}

interface IModalEditPortfolioCategory {
  portfolioCategory: PortfolioCategory
  children: (props: TModalReturn) => JSX.Element
}

const ModalEditPortfolioCategory = ({
  portfolioCategory,
  children,
}: IModalEditPortfolioCategory) => {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState(portfolioCategory.name)
  const [isOpen, setIsOpen] = useState(false)

  const { toast, token } = useGlobalContext()
  const { push } = useRouter()

  const handleEditRole = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const response = await editPortfolioCategory(
      token,
      portfolioCategory.id,
      name
    )
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
              <p className="font-semibold text-gray-900">
                Edit Kategori Portofolio
              </p>
              <p className="text-xs text-gray-500">
                Merubah Kategori Portofolio pada Dashboard Alphadev
              </p>
            </div>
          </div>
          <div className="px-5 pt-5">
            <InputTextWithLabel
              type="text"
              label="Nama Kategori :"
              placeholder="Nama Kategori Portofolio"
              value={name}
              onChange={(event) => setName(event.target.value)}
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

export default ModalEditPortfolioCategory
