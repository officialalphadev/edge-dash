import { ReactNode } from 'react'

export { default as MainLayout } from './MainLayout'
export { default as FormLayout } from './FormLayout'
export { default as LoadingLayout } from './LoadingLayout'

export type typeMainLayout = {
  children: ReactNode
  title: string
  subTitle: string
  buttonAction?: JSX.Element
}
