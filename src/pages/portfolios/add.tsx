import Head from 'next/head'
import { FormLayout } from 'layouts'
import { IconAdd } from 'assets'
import {
  Button,
  ChooseMedia,
  InputMultiText,
  InputSelectWithLabel,
  InputTextareaWithLabel,
  InputTextWithLabel,
} from 'components'
import { useState, SyntheticEvent, useEffect } from 'react'
import { useGlobalContext } from 'contexts'
import { PortfolioCategory } from 'types'
import { createPortfolio, getPortfolioCategories } from 'services'
import { useRouter } from 'next/router'

const PageAddPortfolio = () => {
  const initialState = {
    title: '',
    slogan: '',
    categoryId: '',
    hexColor: '',
    description: '',
    benefits: '',
    thumbnail: '',
    logoImage: '',
    'giff_1:1': '',
    'giff_16:9': '',
    'img_4:3': '',
    'img_16:9': '',
  }

  const [isLoading, setIsLoading] = useState(false)
  const [dataPost, setDataPost] = useState(initialState)
  const [portfolioCategories, setPortfolioCategories] = useState<
    PortfolioCategory[]
  >([])
  const { toast, token } = useGlobalContext()
  const { push } = useRouter()

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const response = await createPortfolio(token, dataPost)
    response?.status == 201
      ? toast({ status: 'success', message: 'Berhasil menambah data' })
      : toast({ status: 'error', message: 'Gagal menambah data' })

    setIsLoading(false)
    push('/portfolios')
  }

  const portfolioCategoryOptions = portfolioCategories.map(
    (portfolioCategory) => ({
      key: portfolioCategory.name,
      value: portfolioCategory.id,
    })
  )

  useEffect(() => {
    const getDataPortfolioCategories = async () => {
      const response = await getPortfolioCategories(token, 1, 100)
      if (response?.status == 200)
        setPortfolioCategories(response.data.payload.data.categories)
    }
    getDataPortfolioCategories()
  }, [token])

  return (
    <>
      <Head>
        <title>Tambah Portofolio | Alphadev Dashboard Marketing</title>
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
              <h1 className="font-semibold text-gray-900">Tambah Portofolio</h1>
              <span className="text-xs text-gray-500">
                Menambahkan data baru pada Portofolio.
              </span>
            </div>
          </div>
          <div className="scrollbar flex h-full flex-col overflow-y-auto p-5">
            <InputTextWithLabel
              type="text"
              label="Judul Portofolio :"
              placeholder="Masukkan judul portofolio disini..."
              onChange={(event) => {
                setDataPost({ ...dataPost, title: event.target.value })
              }}
              required
            />
            <InputTextWithLabel
              type="text"
              label="Slogan Portofolio :"
              placeholder="Masukkan subjudul portofolio disini..."
              onChange={(event) => {
                setDataPost({ ...dataPost, slogan: event.target.value })
              }}
              required
            />
            <InputSelectWithLabel
              label="Kategori Portofolio :"
              options={portfolioCategoryOptions}
              placeholder="Pilih Kategori"
              onChange={(value) =>
                setDataPost({ ...dataPost, categoryId: value })
              }
            />
            <InputTextWithLabel
              type="text"
              label="Warna Portofolio :"
              placeholder="Masukkan Warna portofolio disini..."
              onChange={(event) => {
                setDataPost({ ...dataPost, hexColor: event.target.value })
              }}
              required
            />
            <InputTextareaWithLabel
              label="Deskripsi Portofolio :"
              placeholder="Masukkan deskripsi portof disini..."
              onChange={(event) => {
                setDataPost({ ...dataPost, description: event.target.value })
              }}
              rows={5}
              required
            />
            <InputMultiText
              label="Benefit Portofolio :"
              placeholder="Masukkan benefit portofolio disini..."
              onChange={(values) => {
                setDataPost({ ...dataPost, benefits: values.join(',') })
              }}
            />
            <ChooseMedia
              label="Logo Portofolio"
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  logoImage: medias.map((media) => media.id).join(','),
                })
              }
            />
            <ChooseMedia
              label="Thumbnail Portofolio"
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  thumbnail: medias.map((media) => media.id).join(','),
                })
              }
            />
            <ChooseMedia
              label="Gif 1:1"
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  'giff_1:1': medias.map((media) => media.id).join(','),
                })
              }
            />
            <ChooseMedia
              label="Gif 16:9"
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  'giff_16:9': medias.map((media) => media.id).join(','),
                })
              }
            />
            <ChooseMedia
              label="Gambar 4:3 (x4)"
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  'img_4:3': medias.map((media) => media.id).join(','),
                })
              }
            />
            <ChooseMedia
              label="Gambar 16:9 (x2)"
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  'img_16:9': medias.map((media) => media.id).join(','),
                })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 p-5">
            <Button text="Simpan" type="submit" isLoading={isLoading} />
            <Button text="Batal" type="button" variant="brand-secondary" />
          </div>
        </form>
      </FormLayout>
    </>
  )
}

export default PageAddPortfolio
