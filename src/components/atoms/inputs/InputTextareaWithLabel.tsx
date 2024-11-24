import { clsxm } from 'helpers'
import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react'

interface InputTextareaWithLabelProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string
}

const InputTextareaWithLabel: FC<InputTextareaWithLabelProps> = (props) => {
  return (
    <div className="mb-6 flex flex-col">
      <label
        htmlFor={props.id}
        className="mb-2 block text-sm font-semibold text-gray-900"
      >
        {props.label}
      </label>
      <textarea
        {...props}
        className={clsxm(
          'scrollbar rounded-xl border border-gray-100',
          'bg-white px-3 py-4 text-xs text-gray-500 duration-300',
          'focus:border-brand-50 focus:ring-4 focus:ring-brand-100',
          props.className
        )}
      />
    </div>
  )
}

export default InputTextareaWithLabel
