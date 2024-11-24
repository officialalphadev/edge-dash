import { ReactNode } from 'react'
import { Metadata } from 'types'

export { default as MainTable } from './MainTable'
export { default as TableFaq } from './TableFaq'
export { default as TableFlashsale } from './TableFlashsale'
export { default as TablePortfolioCategory } from './TablePortfolioCategory'
export { default as TableUser } from './TableUser'
export { default as TableRole } from './TableRole'
export { default as TablePortfolio } from './TablePortfolio'
export { default as TableSubscriber } from './TableSubscriber'

export type typeTable = {
  children?: ReactNode
  className?: string
  title?: string
  isCapitalize?: boolean
  search?: boolean
  pagination?: boolean
  metadata?: Metadata
}
