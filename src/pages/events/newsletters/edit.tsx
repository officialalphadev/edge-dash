import Head from 'next/head'
import { FormLayout } from 'layouts'
import { IconEdit } from 'assets'
import { Button, InputTextareaWithLabel, InputTextWithLabel } from 'components'

const PageEditNewsletter = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  return (
    <>
      <Head>
        <title>Edit Newsletter | Alphadev Dashboard Marketing</title>
      </Head>
      <FormLayout>
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white"
        >
          <div className="flex items-center space-x-3 border-b border-gray-200 p-5">
            <div className="rounded-xl bg-brand-50 p-3">
              <IconEdit className="aspect-square w-5 text-brand-500" />
            </div>
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold text-gray-900">
                Edit Event Newsletter
              </h1>
              <span className="text-xs text-gray-500">
                Perbarui detail bagian newsletter.
              </span>
            </div>
          </div>
          <div className="scrollbar flex h-full flex-col overflow-y-auto p-5">
            <InputTextWithLabel
              id="title"
              type="text"
              label="Judul Flash Sale :"
              placeholder="Masukkan judul event disini..."
              required={true}
            />
            <InputTextareaWithLabel
              id="description"
              label="Deskripsi Flash Sale :"
              placeholder="Masukkan deskripsi disini..."
              required={true}
            />
            <InputTextareaWithLabel
              id="theme"
              label="Masukkan Tema :"
              placeholder="Masukkan tema newsletter disini..."
              required={true}
            />
            <div className="grid grid-cols-2 gap-5">
              <InputTextWithLabel
                id="date"
                type="date"
                label="Tanggal Event :"
                placeholder="Pilih Tanggal"
                required={true}
              />
              <InputTextWithLabel
                id="time"
                type="time"
                label="Waktu Event :"
                placeholder="Pilih Jam"
                required={true}
              />
            </div>
            <InputTextWithLabel
              id="link"
              type="url"
              label="Link Event Newsletter :"
              placeholder="Tempelkan link disini..."
              required={true}
            />
            <InputTextWithLabel
              id="image"
              type="file"
              label="Upload Gambar"
              placeholder="Seret dan lepas file disini"
              required={true}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 p-5">
            <Button text="Simpan" type="submit" />
            <Button text="Batal" variant="brand-secondary" />
          </div>
        </form>
      </FormLayout>
    </>
  )
}

export default PageEditNewsletter
