import { FC, KeyboardEvent, useState } from 'react'
import { IconAdd, IconClose } from 'assets'
import { ButtonIcon } from '../buttons'
import { clsxm } from 'helpers'

interface InputMultiTextProps {
  placeholder?: string
  label?: string
  onChange?: (values: string[]) => void
  values?: string[]
}

const InputMultiText: FC<InputMultiTextProps> = ({
  label,
  onChange,
  placeholder,
  values: defaultValue = [],
}) => {
  const [value, setValue] = useState('')
  const [values, setValues] = useState(defaultValue)

  const handleAdd = () => {
    if (value.trim() === '') return
    const newValues = values.includes(value) ? values : [...values, value]
    setValues(newValues)
    setValue('')
    onChange?.(newValues)
  }

  const handleDelete = (deletedValue: string) => {
    const newValues = values.filter((value) => value !== deletedValue)
    setValues(newValues)
    onChange?.(newValues)
  }

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleAdd()
    }
  }

  return (
    <div className="mb-6 flex flex-col">
      <label className="mb-2 block text-sm font-semibold text-gray-900">
        {label}
      </label>
      <div className="flex">
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleInputKeyDown}
          className={clsxm(
            'w-full rounded-xl border border-gray-100 bg-white',
            'px-3 py-4 text-xs text-gray-500 duration-300',
            'focus:border-brand-50 focus:ring-4 focus:ring-brand-100'
          )}
        />
        <ButtonIcon
          className="ml-2 aspect-square h-full"
          size="sm"
          icon={<IconAdd className="aspect-square w-5 text-white" />}
          onClick={handleAdd}
        />
      </div>
      <div className="flex flex-wrap gap-3 p-3">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex grow items-center justify-between gap-4 rounded bg-gray-50 px-3 py-2"
          >
            <span className="text-sm text-gray-700">{value}</span>
            <IconClose
              className="aspect-square w-4 flex-none cursor-pointer text-gray-600"
              onClick={() => handleDelete(value)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default InputMultiText
