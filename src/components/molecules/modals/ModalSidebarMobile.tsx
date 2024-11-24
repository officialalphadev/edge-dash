import {
  AlphadevIcon,
  IconChevronBottom,
  IconChevronLeft,
  IconClose,
  IconLogout,
  IconMenu,
  IconUser,
} from 'assets'
import { SideModal } from '.'
import { useGlobalContext } from 'contexts'
import { Images } from 'components/atoms'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { DataMenu } from '../../../constants'

const ModalSidebarMobile = ({
  showModalLogout,
}: {
  showModalLogout: () => void
}) => {
  const { sidebar, setSidebar } = useGlobalContext()

  const handleClose = () =>
    setSidebar(() => {
      localStorage.setItem('sidebar', JSON.stringify(false))
      return false
    })

  return (
    <SideModal
      show={sidebar}
      setShow={setSidebar}
      position="left"
      hiddenOnDesktop={true}
      className="flex h-screen w-full max-w-md flex-col bg-white md:hidden"
    >
      <div className="flex items-center border-b border-brand-500 p-4 duration-300">
        <button
          onClick={handleClose}
          className="relative flex aspect-square w-9 flex-none cursor-pointer items-center justify-center rounded-xl duration-300 hover:bg-gray-100 focus:bg-gray-100 focus:ring-4 focus:ring-gray-300 sm:hidden"
        >
          <IconMenu
            className={`${
              sidebar && 'scale-0 opacity-0'
            } absolute h-6 w-6 flex-none duration-300`}
          />
          <IconClose
            className={`${
              !sidebar && 'scale-0 opacity-0'
            } absolute h-6 w-6 flex-none duration-300`}
          />
        </button>
        <div
          className={`${
            !sidebar && 'scale-0 opacity-0'
          } flex w-full space-x-3 px-3 duration-300`}
        >
          <Images
            src={AlphadevIcon}
            alt="alphadev-icon"
            style={{ objectFit: 'contain' }}
            className="relative aspect-square w-8"
            fill={true}
          />
          <div>
            <h1 className="text-sm font-bold text-gray-900">Alphadev</h1>
            <p className="whitespace-nowrap text-xs text-gray-500">
              Dashboard Marketing
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-full overflow-y-auto">
        <div className="scrollbar h-full w-full space-y-4 overflow-y-auto px-4 py-5 duration-300">
          {DataMenu.map(({ href, icon, name, items }) =>
            items ? (
              <MultiSideMenu key={name} data={{ href, icon, name, items }} />
            ) : (
              <SingleSideMenu key={name} data={{ href, icon, name }} />
            )
          )}
        </div>
        <div className="hidden items-center sm:flex">
          <button
            onClick={handleClose}
            className="mx-[1px] flex h-16 w-8 items-center justify-center rounded-l-xl bg-brand-500"
          >
            <IconChevronLeft className="aspect-square w-6 text-white" />
          </button>
        </div>
      </div>
      <div
        className={`flex items-center justify-between border-t border-gray-300 duration-300 ${
          sidebar ? 'p-4' : 'p-[22px]'
        }`}
      >
        <div className="flex items-center space-x-3">
          <IconUser className="aspect-square w-9 rounded-xl bg-brand-500 p-1.5 text-white" />
          <div
            className={`${
              !sidebar && 'opacity-0'
            } whitespace-nowrap text-xs text-gray-700 duration-300`}
          >
            <p className="font-bold">Rizky Maulana</p>
            <p className="font-medium">Developer</p>
          </div>
        </div>
        <button
          onClick={showModalLogout}
          className="h-8 w-8 rounded-xl p-1.5 text-gray-700 duration-300 hover:bg-gray-100 focus:bg-gray-100 focus:ring-4 focus:ring-gray-300"
        >
          <IconLogout />
        </button>
      </div>
    </SideModal>
  )
}

type typeSideMenu = {
  data: {
    href: string
    icon: JSX.Element
    name: string
    items?: { href: string; icon: JSX.Element; name: string }[]
  }
}

const SingleSideMenu = ({ data: { href, icon, name } }: typeSideMenu) => {
  const { sidebar, setSidebar } = useGlobalContext()
  const { pathname } = useRouter()

  const handleClose = () => {
    setSidebar(() => {
      localStorage.setItem('sidebar', JSON.stringify(false))
      return false
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        onClick={handleClose}
        className={`${
          pathname === href
            ? 'bg-brand-50/50 text-brand-500'
            : 'text-gray-500 hover:bg-gray-50'
        } ${
          sidebar ? 'h-12' : 'h-12 flex-col justify-center'
        } flex h-12 items-center overflow-hidden rounded-xl px-3 text-sm font-medium duration-300`}
      >
        {icon}
        {sidebar && <span className="ml-3 whitespace-nowrap">{name}</span>}
      </Link>
    </motion.div>
  )
}

const ChilSideMenu = ({ data: { href, icon, name } }: typeSideMenu) => {
  const { sidebar, setSidebar } = useGlobalContext()
  const { pathname } = useRouter()

  const handleClose = () => {
    setSidebar(() => {
      localStorage.setItem('sidebar', JSON.stringify(false))
      return false
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        onClick={handleClose}
        className={`${
          pathname.includes(href)
            ? 'bg-brand-50/50 text-brand-500'
            : 'text-gray-500 hover:bg-gray-50'
        } ${
          sidebar ? 'h-12' : 'h-12 flex-col justify-center'
        } flex h-12 items-center overflow-hidden rounded-xl px-6 text-sm font-medium duration-300`}
      >
        {icon}
        {sidebar && <span className="ml-3 whitespace-nowrap">{name}</span>}
      </Link>
    </motion.div>
  )
}

const MultiSideMenu = ({ data: { href, icon, name, items } }: typeSideMenu) => {
  const [isOpen, setIsOpen] = useState(false)

  const { sidebar } = useGlobalContext()
  const { pathname } = useRouter()

  useEffect(() => {
    pathname.split('/').includes(href) && setIsOpen(true)
  }, [href, pathname])

  return (
    <>
      <div
        className={`${
          pathname.includes(href)
            ? 'bg-brand-50/50 text-brand-500'
            : 'text-gray-500 hover:bg-gray-50'
        } ${
          sidebar ? 'h-12' : 'h-14 flex-col justify-center'
        } flex cursor-pointer items-center overflow-hidden rounded-xl px-3 text-sm font-medium duration-300`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {icon}
        {sidebar && <span className="ml-3 whitespace-nowrap">{name}</span>}
        <IconChevronBottom
          className={`aspect-square duration-300 ${
            isOpen ? 'w-5 rotate-180' : 'w-4'
          } ${sidebar ? 'ml-auto' : ''}`}
        />
      </div>
      <AnimatePresence>
        {isOpen &&
          items?.map(({ href, icon, name }) => (
            <ChilSideMenu key={name} data={{ href, icon, name }} />
          ))}
      </AnimatePresence>
    </>
  )
}

export default ModalSidebarMobile
