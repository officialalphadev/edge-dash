import moment from 'moment'
import 'moment/locale/id'
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const formatBytes = (bytes: number, decimals = 2) => {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export const checkFormatImage = (file: File) => {
  const formatImages = ['png', 'jpg', 'jpeg', 'gif']

  const formatFile = file?.name.toLocaleLowerCase().split('.').pop() ?? ''

  return formatImages.includes(formatFile)
}

export const clsxm = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes))
}

export const cn = (...cns: string[]) => {
  return cns.join(' ')
}

export const formatDate = (datetime: string) => {
  moment.locale('id')
  return moment(datetime).format('DD MMMM YYYY')
}

export const formatStringToDate = (date: string) => {
  return new Date(date).toISOString().substr(0, 10)
}

export const formatTime = (datetime: string) => {
  moment.locale('id')
  return moment(datetime).format('LT').replaceAll('.', ' : ')
}

export const variant = (base: string, variants: any) => {
  return (props: any) => {
    const classes: any[] = []
    Object.entries(variants).forEach(([key, value]: [string, any]) => {
      if (props[key]) {
        classes.push(variants[key][value])
      }
    })

    return cn(base, ...classes)
  }
}

export const numbering = (index: number): string => {
  const params = new URLSearchParams(window.location.search)
  const page = Number(params.get('page')) || 1
  const perPage = Number(params.get('perPage')) || 10
  if (page == 1) return `${index + 1}.`
  return `${index + 1 + (page - 1) * perPage}.`
}
