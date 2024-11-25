import Image from "next/image";

export default function NotFound() {
  return (
    <div className="py-20">
      <Image
        src="/image/no-data.webp"
        alt="no-data"
        className="mx-auto w-80"
        height={500}
        width={500}
      />
      <h2 className="mb-2 text-center text-lg font-bold">
        Oops, Tidak Ada Hasil Untuk Ditampilkan
      </h2>
      <p className="text-center text-sm text-gray-500">
        Coba kata kunci lainnya atau cari kata kunci berdasarkan kategori.{" "}
      </p>
    </div>
  );
}
