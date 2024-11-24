import { clsxm } from 'helpers'
import { typeInput } from '.'

const InputAuth = ({ type, placeholder, name, required }: typeInput) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      className={clsxm(
        'rounded-lg border border-gray-300 bg-gray-50',
        'px-3 py-1.5',
        'text-xs text-gray-700',
        'transition-all',
        'focus:border-brand-200 focus:ring-2 focus:ring-brand-300'
      )}
    />
  )
}

export default InputAuth
