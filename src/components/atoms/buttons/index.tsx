import { ReactNode } from 'react'

export { default as ButtonIcon } from './ButtonIcon'
export { default as ButtonAuth } from './ButtonAuth'
export { default as ButtonConfirm } from './ButtonConfirm'
export { default as ButtonCancel } from './ButtonCancel'
export { default as ButtonAction } from './ButtonAction'
export { default as ButtonWithIcon } from './ButtonWithIcon'
export { default as Button } from './Button'

export { default as ButtonMenu } from './ButtonMenu'
export { default as ButtonNotification } from './ButtonNotification'

const ButtonType = ['button', 'submit', 'reset'] as const

export type typeButton = {
  text?: string | boolean
  onClick?: () => void
  icon?: JSX.Element | boolean
  disabled?: boolean
  children?: ReactNode
  type?: (typeof ButtonType)[number]
  isLoading?: boolean
}
