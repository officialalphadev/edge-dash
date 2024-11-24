import { clsxm } from 'helpers'
import { typeButton } from '.'
import { IconLoading } from 'assets'

const ButtonConfirm = ({
  text,
  onClick,
  disabled: buttonDisabled,
  isLoading,
  type,
}: typeButton) => {
  const disabled = isLoading || buttonDisabled

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={clsxm(
        'inline-flex items-center justify-center',
        'px-6 py-2.5',
        'w-full rounded-xl bg-brand-500',
        'text-xs font-medium text-white',
        'focus-within:ring-brand-300 focus:ring-4',
        'hover:bg-brand-600',
        'transition-all duration-300',
        disabled && 'cursor-not-allowed opacity-75'
      )}
    >
      {isLoading ? (
        <IconLoading className="aspect-square w-5 animate-spin" />
      ) : (
        text
      )}
    </button>
  )
}

export default ButtonConfirm
