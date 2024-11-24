import { clsxm } from 'helpers'
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

interface InputTextWithLabelProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
}

const InputTextWithLabel: FC<InputTextWithLabelProps> = (props) => {
  return (
    <div className="mb-6 flex flex-col">
      <label
        htmlFor={props.id}
        className="mb-2 block text-sm font-semibold text-gray-900"
      >
        {props.label}
      </label>
      <input
        {...props}
        className={clsxm(
          'rounded-xl border border-gray-100 bg-white',
          'px-3 py-4 text-xs text-gray-500 duration-300',
          'focus:border-brand-50 focus:ring-4 focus:ring-brand-100',
          props.className
        )}
      />
    </div>
  )
}

export default InputTextWithLabel
