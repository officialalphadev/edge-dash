import { StaticImageData } from 'next/image'
import Images from './images'

type typeBanner = {
  title: string
  description: string
  image: StaticImageData
}

const Banner = ({ title, description, image }: typeBanner) => {
  return (
    <div className="flex flex-col items-center gap-5 rounded-xl bg-white p-5 shadow-modal-smooth duration-300 sm:flex-row">
      <Images
        src={image}
        alt={title}
        fill={true}
        style={{ objectFit: 'contain' }}
        className="relative aspect-square w-full max-w-[180px] flex-none"
      />
      <div className="flex flex-col space-y-3">
        <h2 className="text-lg font-bold text-gray-900 duration-300 sm:text-xl">
          {title}
        </h2>
        <span className="text-xs text-gray-500">{description}</span>
      </div>
    </div>
  )
}

export default Banner
