declare interface Metadata {
  totalItems: number
  totalPages: number
  perPage: number
  nextPage: number | null
  currentPage: number
  prevPage: number | null
}

export default Metadata
