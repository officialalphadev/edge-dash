import { IconCheck } from 'assets'
import { clsxm } from 'helpers'
import { useRef, useState } from 'react'

type TypeInputCheckbox = {
  id: string
  label: string
  onChange?: (isChecked: boolean) => void
}

const InputCheckbox = ({ id, label, onChange }: TypeInputCheckbox) => {
  const checkboxRef = useRef<HTMLInputElement>(null)
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    if (checkboxRef.current) {
      setIsChecked(checkboxRef.current.checked)
      onChange?.(checkboxRef.current.checked)
    }
  }

  return (
    <label htmlFor={id} className="flex items-center gap-3">
      <input
        id={id}
        name={id}
        type="checkbox"
        ref={checkboxRef}
        className="hidden"
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
      <button
        type="button"
        className={clsxm(
          'aspect-square w-5 overflow-hidden rounded-lg border bg-white outline-none',
          'focus:border-brand-200 focus:ring-2 focus:ring-brand-200',
          'transition-all duration-300',
          isChecked ? 'border-brand-200' : 'border-gray-300'
        )}
        onClick={() => checkboxRef.current?.click()}
      >
        <IconCheck
          className={clsxm(
            'bg-brand-500 p-0.5 text-white',
            'transition-all duration-300',
            !isChecked && 'opacity-0'
          )}
        />
      </button>
      <span className="text-sm text-gray-900">{label}</span>
    </label>
  )
}

export default InputCheckbox
