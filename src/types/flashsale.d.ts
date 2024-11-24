declare interface Flashsale {
  id: string
  name: string
  slug: string
  description: string
  thumbnail_url: string
  thumbnail_name: string
  start_date: string
  end_date: string
  normal_price: number
  discount_price: number
  rules: string
  benefits: string
  images: string
  createdAt: string
  updatedAt: string
}

export default Flashsale
