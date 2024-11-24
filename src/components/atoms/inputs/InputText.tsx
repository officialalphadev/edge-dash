import { FC } from 'react'
import { clsxm } from 'helpers'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface InputTextProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const InputText: FC<InputTextProps> = (props) => {
  return (
    <input
      {...props}
      className={clsxm(
        'rounded-xl border border-gray-100 bg-gray-50 p-3',
        'text-sm text-gray-500',
        'transition-all duration-300',
        'focus:border-brand-50 focus:ring-4 focus:ring-brand-100',
        props.className
      )}
    />
  )
}

export default InputText
