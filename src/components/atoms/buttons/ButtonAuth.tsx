import { clsxm } from 'helpers'
import { typeButton } from '.'
import { IconLoading } from 'assets'

const ButtonAuth = ({
  children,
  onClick,
  disabled: buttonDisabled,
  isLoading,
}: typeButton) => {
  const disabled = isLoading || buttonDisabled

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsxm(
        'flex w-full items-center justify-center space-x-1.5',
        'rounded-xl bg-brand-500 py-2.5',
        'text-sm font-medium text-white',
        'hover:bg-brand-600',
        'focus:ring-4 focus:ring-brand-300',
        'transition-all duration-300',
        disabled && 'cursor-not-allowed opacity-75'
      )}
    >
      {isLoading ? (
        <IconLoading className={`aspect-square w-5 animate-spin`} />
      ) : (
        children
      )}
    </button>
  )
}

export default ButtonAuth
