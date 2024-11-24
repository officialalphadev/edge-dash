import { clsxm } from 'helpers'
import { MouseEventHandler } from 'react'

const ButtonSize = ['xs', 'sm', 'md', 'lg', 'xl'] as const
const ButtonType = ['button', 'reset', 'submit'] as const
const ButtonVariant = [
  'brand-fill',
  'brand-outline',
  'brand-secondary',
  'success-fill',
  'success-outline',
  'gray-fill',
  'gray-outline',
] as const

interface ButtonIcon {
  onClick?: MouseEventHandler<HTMLElement>
  type?: (typeof ButtonType)[number]
  size?: (typeof ButtonSize)[number]
  variant?: (typeof ButtonVariant)[number]
  icon: JSX.Element
  isLoading?: boolean
  className?: string
  disabled?: boolean
}

const ButtonIcon = ({
  onClick,
  type = 'button',
  size = 'md',
  variant = 'brand-fill',
  icon,
  className,
  disabled: buttonDisabled,
  isLoading,
}: ButtonIcon) => {
  const disabled = isLoading || buttonDisabled

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsxm(
        'inline-flex items-center justify-center',
        'rounded-xl text-center font-medium',
        'outline-none focus:ring-4',
        'transition-all duration-300',
        size == 'xs' && 'p-3',
        size == 'sm' && 'p-3',
        size == 'md' && 'p-5',
        size == 'lg' && 'p-5',
        size == 'xl' && 'p-6',
        variant == 'brand-fill' && [
          'border-brand-500 bg-brand-500 text-white',
          'hover:border-brand-600 hover:bg-brand-600',
          'focus:ring-brand-200',
        ],
        variant == 'brand-outline' && [
          'border-brand-500 bg-white text-brand-500',
          'hover:border-brand-600 hover:bg-brand-600 hover:text-white',
        ],
        variant == 'brand-secondary' && [
          'border-brand-50 bg-brand-50 text-brand-500 ',
          'hover:border-brand-100 hover:bg-brand-100',
          'focus:ring-brand-200',
        ],
        variant == 'success-fill' && [
          'border-success-500 bg-success-500 text-white',
          'hover:border-success-600 hover:bg-success-600',
          'focus:ring-success-200',
        ],
        variant == 'success-outline' && [
          'border-success-500 bg-white text-success-500',
          'hover:border-success-600 hover:bg-success-600 hover:text-white',
        ],
        variant == 'gray-fill' && [
          'border-gray-100 bg-gray-100 text-gray-500',
          'hover:border-gray-200 hover:bg-gray-200',
          'focus:ring-gray-300',
        ],
        variant == 'gray-outline' && [
          'border-gray-100 bg-white text-gray-500',
          'hover:border-gray-200 hover:bg-gray-100',
          'focus:ring-gray-200',
        ],
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      {icon}
    </button>
  )
}

export default ButtonIcon
