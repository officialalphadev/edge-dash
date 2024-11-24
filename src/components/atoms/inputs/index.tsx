import { HTMLInputTypeAttribute } from 'react'

export { default as InputAuth } from './InputAuth'
export { default as InputText } from './InputText'
export { default as InputMultiText } from './InputMultiText'
export { default as InputTextWithLabel } from './InputTextWithLabel'
export { default as InputTextareaWithLabel } from './InputTextareaWithLabel'
export { default as InputSelectWithLabel } from './InputSelectWithLabel'
export { default as InputFiles } from './InputFiles'
export { default as Inputcategories } from './InputCategories'
export { default as InputCheckbox } from './InputCheckbox'
export { default as InputEditor } from './InputEditor'

export type typeInput = {
  type?: HTMLInputTypeAttribute
  placeholder?: string
  name?: string
  required?: boolean
}
