import { useState } from 'react'
import { clsxm } from 'helpers'
import Image, { ImageProps } from 'next/image'

const Status = ['loading', 'complete'] as const

const Images = ({ className, src, alt, ...rest }: ImageProps) => {
  const [status, setStatus] = useState<typeof Status[number]>('loading')

  return (
    <div className={clsxm(status == 'loading' && 'animate-pulse', className)}>
      <Image
        src={src}
        alt={alt}
        onLoadingComplete={() => setStatus('complete')}
        {...rest}
      />
    </div>
  )
}

export default Images

export { default as Images } from '.'
