import { MouseEventHandler } from 'react'
import { IconNotification } from 'assets'
import { clsxm } from 'helpers'

const ButtonNotification = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button
      onClick={onClick}
      className={clsxm(
        'relative flex h-fit rounded-xl bg-white p-3 text-gray-700',
        'focus:ring-4 focus:ring-gray-300',
        'transition-all duration-300'
      )}
    >
      {/* <div className="absolute right-1.5 h-2.5 w-2.5 rounded-full bg-brand-500 text-[6px] text-white">
        15
      </div> */}
      <IconNotification className="aspect-square w-6" />
    </button>
  )
}

export default ButtonNotification
