import Head from 'next/head'
import { FormLayout } from 'layouts'
import { IconAdd } from 'assets'
import { Button, InputEditor } from 'components'
import { SyntheticEvent, useState } from 'react'

const PageAddNewsletter = () => {
  const initialState = {
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    normal_price: 0,
    discount_price: 0,
    rules: '',
    benefits: '',
    thumbnail: '',
    images: '',
  }

  const [isLoading, setIsLoading] = useState(false)
  const [dataPost, setDataPost] = useState()

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>Tambah Newsletter | Alphadev Dashboard Marketing</title>
      </Head>
      <FormLayout>
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white"
        >
          <div className="flex items-center space-x-3 border-b border-gray-200 p-5">
            <div className="rounded-xl bg-brand-50 p-3">
              <IconAdd className="aspect-square w-5 text-brand-500" />
            </div>
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold text-gray-900">
                Tambah Event Newsletter
              </h1>
              <span className="text-xs text-gray-500">
                Menambahkan data baru pada newsletter.
              </span>
            </div>
          </div>
          <div className="scrollbar flex h-full flex-col overflow-y-auto p-5">
            <InputEditor
              label="Konten :"
              onChange={(value) => console.log(value)}
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

export default PageAddNewsletter
