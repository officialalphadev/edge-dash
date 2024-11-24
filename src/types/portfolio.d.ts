declare interface Image {
  id: string
  name: string
  url: string
}

declare interface Portfolio {
  id: string
  title: string
  slug: string
  slogan: string
  description: string
  category: { name: string }
  benefits: string[]
  thumbnail: Image
  logoImage: Image
  'img_4:3': Image[]
  gif: Image[]
}

export default Portfolio
