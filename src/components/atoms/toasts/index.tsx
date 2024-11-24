import { motion, AnimatePresence } from 'framer-motion'
import {
  IconClose,
  IconError,
  IconInfo,
  IconSuccess,
  IconWarning,
} from 'assets'
import { useGlobalContext } from 'contexts'
import { clsxm } from 'helpers'

const Toasts = () => {
  const {
    toast,
    dataToast: { status, message },
  } = useGlobalContext()
  const closeToast = () => {
    toast({})
  }
  status &&
    message &&
    setTimeout(() => {
      closeToast()
    }, 3000)

  return (
    <AnimatePresence>
      {status && message && (
        <motion.div
          initial={{ scale: 0, opacity: 0, translateX: '50%' }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0, translateX: '50%' }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 right-1/2 z-50 flex w-full max-w-xs items-center rounded-xl bg-white p-4 text-gray-500 shadow"
        >
          <div
            className={clsxm(
              'inline-flex h-8 w-8 rounded-xl',
              'flex-shrink-0 items-center justify-center',
              status == 'success' && 'bg-success-100',
              status == 'info' && 'bg-info-100',
              status == 'warning' && 'bg-warning-100',
              status == 'error' && 'bg-brand-100'
            )}
          >
            {status == 'success' && (
              <IconSuccess className="h-5 w-5 text-success-500" />
            )}
            {status == 'info' && <IconInfo className="h-5 w-5 text-info-500" />}
            {status == 'warning' && (
              <IconWarning className="h-5 w-5 text-warning-500" />
            )}
            {status == 'error' && (
              <IconError className="h-5 w-5 text-brand-500" />
            )}
          </div>
          <div className="ml-3 text-xs font-normal">{message}</div>
          <button
            onClick={closeToast}
            className={clsxm(
              '-mx-1.5 -my-1.5 ml-auto',
              'inline-flex',
              'h-8 w-8',
              'rounded-xl bg-white',
              'p-1.5',
              'text-gray-400',
              'transition-all duration-300',
              'hover:bg-gray-100 hover:text-gray-900',
              'focus:ring-2 focus:ring-gray-300'
            )}
          >
            <IconClose className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toasts
