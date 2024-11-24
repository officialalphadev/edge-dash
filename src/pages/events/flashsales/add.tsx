import Head from 'next/head'
import { FormLayout } from 'layouts'
import { IconAdd } from 'assets'
import {
  Button,
  ChooseMedia,
  InputMultiText,
  InputTextareaWithLabel,
  InputTextWithLabel,
} from 'components'
import { SyntheticEvent, useState } from 'react'
import { createFlashsale } from 'services'
import { useGlobalContext } from 'contexts'
import { useRouter } from 'next/router'

const PageAddFlashsale = () => {
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
  const [dataPost, setDataPost] = useState(initialState)

  const { toast, token } = useGlobalContext()
  const { push } = useRouter()

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const response = await createFlashsale(token, dataPost)
    response?.status == 201
      ? toast({ status: 'success', message: 'Berhasil menambah data' })
      : toast({ status: 'error', message: 'Gagal menambah data' })
    setIsLoading(false)
    push('/events/flashsales')
  }

  return (
    <>
      <Head>
        <title>Tambah Flash Sale | Alphadev Dashboard Marketing</title>
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
                Tambah Event Flash Sale
              </h1>
              <span className="text-xs text-gray-500">
                Menambahkan data baru pada flash sale.
              </span>
            </div>
          </div>
          <div className="scrollbar flex h-full flex-col overflow-y-auto p-5">
            <InputTextWithLabel
              type="text"
              label="Nama Flash Sale :"
              placeholder="Masukkan nama event disini..."
              onChange={(event) =>
                setDataPost({ ...dataPost, name: event.target.value })
              }
              required
            />
            <InputTextareaWithLabel
              label="Deskripsi Flash Sale :"
              placeholder="Masukkan deskripsi disini..."
              onChange={(event) =>
                setDataPost({ ...dataPost, description: event.target.value })
              }
              required
            />
            <div className="grid grid-cols-2 gap-5">
              <InputTextWithLabel
                type="number"
                label="Harga Normal :"
                placeholder="Rp 0"
                onChange={(event) =>
                  setDataPost({
                    ...dataPost,
                    normal_price: Number(event.target.value),
                  })
                }
                required
              />
              <InputTextWithLabel
                type="number"
                label="Harga Promo :"
                placeholder="Rp 0"
                onChange={(event) =>
                  setDataPost({
                    ...dataPost,
                    discount_price: Number(event.target.value),
                  })
                }
                required
              />
              <InputTextWithLabel
                type="date"
                label="Promo Dimulai :"
                placeholder="Pilih tanggal"
                onChange={(event) =>
                  setDataPost({ ...dataPost, start_date: event.target.value })
                }
                required
              />
              <InputTextWithLabel
                type="date"
                label="Promo Berakhir :"
                placeholder="Pilih tanggal"
                onChange={(event) =>
                  setDataPost({ ...dataPost, end_date: event.target.value })
                }
                required
              />
            </div>
            <InputMultiText
              label="Rules Promo :"
              placeholder="Masukkan rules promo disini..."
              onChange={(values) =>
                setDataPost({ ...dataPost, rules: JSON.stringify(values) })
              }
            />
            <InputMultiText
              label="Manfaat Promo :"
              placeholder="Masukkan manfaat promo disini..."
              onChange={(values) =>
                setDataPost({ ...dataPost, benefits: JSON.stringify(values) })
              }
            />
            <ChooseMedia
              label="Pilih Thumbnail"
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  thumbnail: medias.map((media) => media.id).join(','),
                })
              }
            />
            <ChooseMedia
              label="Pilih Gambar"
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  images: medias.map((media) => media.id).join(','),
                })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 p-5">
            <Button text="Simpan" type="submit" isLoading={isLoading} />
            <Button
              text="Batal"
              variant="brand-secondary"
              onClick={() => push('/events/flashsales')}
            />
          </div>
        </form>
      </FormLayout>
    </>
  )
}

export default PageAddFlashsale
