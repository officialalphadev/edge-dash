import Head from 'next/head'
import { FormLayout } from 'layouts'
import { IconEdit } from 'assets'
import {
  Button,
  ChooseMedia,
  InputMultiText,
  InputTextareaWithLabel,
  InputTextWithLabel,
  ViewLoading,
  ViewNoData,
} from 'components'
import { SyntheticEvent, useEffect, useMemo, useState } from 'react'
import { editFlashsale, getFlashsale } from 'services'
import { useGlobalContext } from 'contexts'
import { useRouter } from 'next/router'
import moment from 'moment'

const PageEditFlashsale = () => {
  const initialState = useMemo(
    () => ({
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
    }),
    []
  )

  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingPost, setIsLoadingPost] = useState(false)
  const [dataPost, setDataPost] = useState(initialState)

  const { token, toast } = useGlobalContext()
  const { push, query } = useRouter()

  const isEmpty = dataPost === initialState

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoadingPost(true)
    const response = await editFlashsale(token, String(query.id), dataPost)
    response?.status == 202
      ? toast({ status: 'success', message: 'Berhasil mengubah data' })
      : toast({ status: 'error', message: 'Gagal mengubah data' })
    setIsLoadingPost(false)
    push('/events/flashsales')
  }

  useEffect(() => {
    const getDataFlashsale = async () => {
      if (!query.id) return
      const response = await getFlashsale(token, String(query.id))
      if (response?.status == 200) {
        const flashsale = response.data.payload.data
        setDataPost({
          name: flashsale.name,
          description: flashsale.description,
          discount_price: flashsale.disc,
          normal_price: flashsale.normal,
          start_date: flashsale.start_date,
          end_date: flashsale.end_date,
          benefits: JSON.stringify(flashsale.benefits),
          rules: JSON.stringify(flashsale.rules),
          images: flashsale.images.map((image: any) => image.id).join(','),
          thumbnail: flashsale.thumbnail.id,
        })
      } else {
        setDataPost(initialState)
      }
      setIsLoading(false)
    }
    getDataFlashsale()
  }, [query, token, initialState])

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Edit Flash Sale | Alphadev Dashboard Marketing</title>
        </Head>
        <FormLayout>
          <ViewLoading />
        </FormLayout>
      </>
    )
  }
  if (isEmpty) {
    return (
      <>
        <Head>
          <title>Edit Flash Sale | Alphadev Dashboard Marketing</title>
        </Head>
        <FormLayout>
          <ViewNoData />
        </FormLayout>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Edit Flash Sale | Alphadev Dashboard Marketing</title>
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
                Edit Event Flash Sale
              </h1>
              <span className="text-xs text-gray-500">
                Perbarui detail bagian flash sale.
              </span>
            </div>
          </div>
          <div className="scrollbar flex h-full flex-col overflow-y-auto p-5">
            <InputTextWithLabel
              type="text"
              label="Nama Flash Sale :"
              placeholder="Masukkan nama event disini..."
              value={dataPost.name}
              onChange={(event) => {
                setDataPost({ ...dataPost, name: event.target.value })
              }}
              required
            />
            <InputTextareaWithLabel
              label="Deskripsi Flash Sale :"
              placeholder="Masukkan deskripsi disini..."
              value={dataPost.description}
              onChange={(event) => {
                setDataPost({ ...dataPost, description: event.target.value })
              }}
              required
            />
            <div className="grid grid-cols-2 gap-5">
              <InputTextWithLabel
                type="number"
                label="Harga Normal :"
                placeholder="Rp 0"
                value={dataPost.normal_price}
                onChange={(event) => {
                  setDataPost({
                    ...dataPost,
                    normal_price: Number(event.target.value),
                  })
                }}
                required
              />
              <InputTextWithLabel
                type="number"
                label="Harga Promo :"
                placeholder="Rp 0"
                value={dataPost.discount_price}
                onChange={(event) => {
                  setDataPost({
                    ...dataPost,
                    discount_price: Number(event.target.value),
                  })
                }}
                required
              />
              <InputTextWithLabel
                type="date"
                label="Promo Dimulai :"
                placeholder="Pilih tanggal"
                value={moment(dataPost.start_date).format('YYYY-MM-DD')}
                onChange={(event) => {
                  setDataPost({ ...dataPost, start_date: event.target.value })
                }}
                required
              />
              <InputTextWithLabel
                type="date"
                label="Promo Berakhir :"
                placeholder="Pilih tanggal"
                value={moment(dataPost.end_date).format('YYYY-MM-DD')}
                onChange={(event) => {
                  setDataPost({ ...dataPost, end_date: event.target.value })
                }}
                required
              />
            </div>
            <InputMultiText
              label="Rules Promo:"
              placeholder="Masukkan rules promo disini..."
              values={JSON.parse(dataPost.rules)}
              onChange={(values) =>
                setDataPost({ ...dataPost, rules: JSON.stringify(values) })
              }
            />
            <InputMultiText
              label="Manfaat Promo :"
              placeholder="Masukkan manfaat promo disini..."
              values={JSON.parse(dataPost.benefits)}
              onChange={(values) =>
                setDataPost({ ...dataPost, benefits: JSON.stringify(values) })
              }
            />
            <ChooseMedia
              label="Pilih Thumbnail"
              values={dataPost.thumbnail.split(',')}
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  thumbnail: medias.map((media) => media.id).join(','),
                })
              }
            />
            <ChooseMedia
              label="Pilih Gambar"
              values={dataPost.images.split(',')}
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  images: medias.map((media) => media.id).join(','),
                })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 p-5">
            <Button text="Simpan" type="submit" isLoading={isLoadingPost} />
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

export default PageEditFlashsale
