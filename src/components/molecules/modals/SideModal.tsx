import { AnimatePresence, motion } from 'framer-motion'
import { Dispatch, ReactNode, SetStateAction, SyntheticEvent } from 'react'

type typeSideModal = {
  children: ReactNode
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  className: string
  position?: 'left' | 'right'
  hiddenOnDesktop?: boolean
}

const SideModal = ({
  children,
  show,
  setShow,
  className,
  position = 'right',
  hiddenOnDesktop = false,
}: typeSideModal) => {
  const handleClose = () => {
    setShow(false)
  }

  const handlePropagation = (event: SyntheticEvent) => {
    event.stopPropagation()
  }

  return (
    <AnimatePresence>
      {show && (
        <div
          onClick={handleClose}
          className={`fixed inset-0 z-40 h-screen ${
            hiddenOnDesktop && 'md:hidden'
          }`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex h-screen w-screen bg-black/50 backdrop-blur-sm ${
              position == 'right' && 'justify-end'
            } ${hiddenOnDesktop && 'md:hidden'}`}
          >
            <motion.div
              initial={{
                opacity: 0,
                x: position == 'right' ? '100vh' : '-100vh',
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: position == 'right' ? '100vh' : '-100vh' }}
              transition={{ duration: 0.3 }}
              className={`relative ${className}`}
              onClick={handlePropagation}
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default SideModal
