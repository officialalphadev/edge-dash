import {
  ButtonMenu,
  ButtonNotification,
  MainSidebar,
  ModalNotification,
} from 'components'
import { useGlobalContext } from 'contexts'
import { ReactNode, useState } from 'react'

interface IFormLayout {
  children: ReactNode
}

const FormLayout = ({ children }: IFormLayout) => {
  const [showModalNotification, setShowModalNotification] = useState(false)
  const { isMobile } = useGlobalContext()

  const toogleModalNotification = () => {
    setShowModalNotification((state) => !state)
  }

  return (
    <>
      <div className={`flex h-screen bg-gray-50`}>
        <MainSidebar />
        <div className="flex h-full w-full flex-col-reverse gap-5 p-4 md:flex-row">
          <div className="w-full">{children}</div>
          <div className="flex items-center justify-between md:items-start">
            {isMobile && <ButtonMenu />}
            <ButtonNotification onClick={toogleModalNotification} />
          </div>
        </div>
      </div>
      <ModalNotification
        show={showModalNotification}
        setShow={setShowModalNotification}
      />
    </>
  )
}

export default FormLayout
