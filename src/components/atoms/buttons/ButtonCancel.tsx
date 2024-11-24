import { clsxm } from 'helpers'
import { typeButton } from '.'

const ButtonCancel = ({ text, onClick, disabled, type }: typeButton) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsxm(
        'w-full rounded-xl border border-gray-100 bg-white',
        'px-6 py-2.5',
        'text-xs font-medium text-gray-900',
        'hover:border-gray-200 hover:bg-gray-100',
        'focus:ring-4 focus:ring-gray-200',
        'transition-all duration-300'
      )}
    >
      {text}
    </button>
  )
}

export default ButtonCancel
