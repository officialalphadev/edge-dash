import { IconChevronLeft } from 'assets'
import { clsxm } from 'helpers'
import { FC, useEffect, useState } from 'react'

interface InputSelectWithLabelProps {
  placeholder?: string
  label?: string
  onChange?: (value: string) => void
  options: { key: string; value: string }[]
  value?: string
}

const InputSelectWithLabel: FC<InputSelectWithLabelProps> = ({
  placeholder,
  label,
  onChange,
  options,
  value: currentValue,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<string>()

  const handleToggle = () => setIsOpen(!isOpen)

  const handleChange = (option: { key: string; value: string }) => {
    setValue(option.key)
    onChange?.(option.value)
    handleToggle()
  }

  useEffect(() => {
    if (currentValue) {
      const currentOption = options.filter(
        (option) => option.value == currentValue
      )[0]
      setValue(currentOption?.key)
    }
  }, [currentValue, options])

  return (
    <div className="relative mb-6 flex flex-col">
      <label className="mb-2 block text-sm font-semibold text-gray-900">
        {label}
      </label>
      <button
        type="button"
        className={clsxm(
          'flex items-center justify-between',
          'rounded-xl border border-gray-100 bg-white',
          'px-3 py-4 text-xs text-gray-500 duration-300',
          'focus:border-brand-50 focus:ring-4 focus:ring-brand-100'
        )}
        onClick={handleToggle}
      >
        <span>{value ?? placeholder}</span>
        <IconChevronLeft
          className={clsxm(
            'ml-3 aspect-square w-4 text-gray-300',
            'transition-all duration-300',
            isOpen ? 'rotate-90' : 'rotate-[270deg]'
          )}
        />
      </button>
      <div
        className={clsxm(
          'absolute top-20 w-full overflow-hidden',
          'rounded-xl border border-gray-200 bg-white',
          'shadow-sm transition-all duration-300',
          !isOpen && '-translate-y-1/2 scale-0 opacity-0'
        )}
      >
        <div className="scrollbar max-h-32 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleChange(option)}
              className={clsxm(
                'w-full px-3 py-2 text-left text-xs text-gray-700',
                'transition-all duration-300 hover:bg-gray-50',
                'border-b border-gray-50'
              )}
            >
              {option.key}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InputSelectWithLabel
