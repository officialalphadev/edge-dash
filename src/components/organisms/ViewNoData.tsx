import { NoData } from 'assets'
import { Images } from 'components/atoms'

const ViewNoData = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-5">
      <Images
        src={NoData}
        alt="alphade-no-data"
        fill={true}
        style={{ objectFit: 'contain' }}
        className="relative aspect-square w-80"
      />
      <div className="space-y-2">
        <h2 className="text-center text-lg font-bold text-gray-900">
          Oops, Tidak Ada Hasil Untuk Ditampilkan
        </h2>
        <p className="text-center text-sm text-gray-500">
          Coba kata kunci lainnya atau cari kata kunci berdasarkan kategori.{' '}
        </p>
      </div>
    </div>
  )
}

export default ViewNoData
