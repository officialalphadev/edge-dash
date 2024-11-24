import { Dispatch, SetStateAction } from 'react'
import { Button } from '../buttons'

type typeInputCategories = {
  label?: string
  setSelectedData: Dispatch<SetStateAction<string[]>>
  selectedData: string[]
  options: string[]
}

const InputCategories = ({
  label,
  selectedData,
  setSelectedData,
  options,
}: typeInputCategories) => {
  const handleSelection = (option: string) => {
    selectedData.includes(option)
      ? setSelectedData(selectedData.filter((selection) => selection != option))
      : setSelectedData([...selectedData, option])
  }

  return (
    <section className="mb-6 flex w-full flex-col">
      <label className="mb-2 block text-sm font-semibold text-gray-900">
        {label}
      </label>
      <div className="flex w-full flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option}
            text={option}
            size="xs"
            type="button"
            variant="brand-fill"
            onClick={() => handleSelection(option)}
            className={`${!selectedData.includes(option) && 'opacity-50'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default InputCategories
