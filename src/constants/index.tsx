export * from './DataDefaultValue'

export { default as DataMenu } from './DataMenu'
export { default as DataPersonalBranding } from './DataPersonalBranding'

export type TypeDataMenu = {
  href: string
  name: string
  icon: JSX.Element
  items?: {
    href: string
    name: string
    icon: JSX.Element
  }[]
}
