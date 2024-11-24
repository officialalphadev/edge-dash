import { typeMainLayout } from 'layouts'
import {
  ButtonMenu,
  ButtonNotification,
  MainSidebar,
  ModalNotification,
} from 'components'
import { useGlobalContext } from 'contexts'
import { useState } from 'react'

const MainLayout = ({
  children,
  title,
  subTitle,
  buttonAction,
}: typeMainLayout) => {
  const [showModalNotification, setShowModalNotification] =
    useState<boolean>(false)
  const { isMobile } = useGlobalContext()

  const toogleModalNotification = () => {
    setShowModalNotification((state) => !state)
  }

  return (
    <div className={`flex h-screen bg-gray-50`}>
      <MainSidebar />
      <div className="scrollbar flex h-full w-full flex-col overflow-y-auto p-4">
        {isMobile && (
          <div className="flex items-center justify-between pb-4">
            <ButtonMenu />
            <ButtonNotification onClick={toogleModalNotification} />
          </div>
        )}
        <div className="mb-6 flex flex-col gap-5 duration-300 md:flex-row md:justify-between">
          <div className="flex flex-col space-y-3">
            <h1 className="text-xl font-bold text-gray-900">{title}</h1>
            <span className="text-sm text-gray-500">{subTitle}</span>
          </div>
          <div className="flex items-center space-x-7">
            {buttonAction}
            {!isMobile && (
              <ButtonNotification onClick={toogleModalNotification} />
            )}
          </div>
        </div>
        {children}
      </div>
      <ModalNotification
        show={showModalNotification}
        setShow={setShowModalNotification}
      />
    </div>
  )
}

export default MainLayout
