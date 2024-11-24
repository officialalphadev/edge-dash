import Head from 'next/head'
import { FormLayout } from 'layouts'
import { IconEdit } from 'assets'
import {
  Button,
  ChooseMedia,
  InputMultiText,
  InputSelectWithLabel,
  InputTextareaWithLabel,
  InputTextWithLabel,
  ViewLoading,
  ViewNoData,
} from 'components'
import { SyntheticEvent, useEffect, useMemo, useState } from 'react'
import { editPortfolio, getPortfolio, getPortfolioCategories } from 'services'
import { useRouter } from 'next/router'
import { useGlobalContext } from 'contexts'
import { PortfolioCategory } from 'types'

const PageEditPortfolio = () => {
  const initialState = useMemo(
    () => ({
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
    }),
    []
  )

  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingPost, setIsLoadingPost] = useState(false)
  const [dataPost, setDataPost] = useState(initialState)
  const [portfolioCategories, setPortfolioCategories] = useState<
    PortfolioCategory[]
  >([])

  const { query, push } = useRouter()
  const { token, toast } = useGlobalContext()

  const isEmpty = dataPost === initialState

  const portfolioCategoryOptions = portfolioCategories.map(
    (portfolioCategory) => ({
      key: portfolioCategory.name,
      value: portfolioCategory.id,
    })
  )

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoadingPost(true)
    const response = await editPortfolio(token, String(query.id), dataPost)
    response?.status == 202
      ? toast({ status: 'success', message: 'Berhasil mengubah data' })
      : toast({ status: 'error', message: 'Gagal mengubah data' })
    setIsLoadingPost(false)
    push('/portfolios')
  }

  useEffect(() => {
    const getData = async () => {
      if (!query.id) return
      const response = await getPortfolio(token, String(query.id))
      if (response?.status == 200) {
        const portfolio = response.data.payload.data
        setDataPost({
          title: portfolio.title,
          slogan: portfolio.slogan,
          description: portfolio.description,
          benefits: portfolio.benefits.join(','),
          categoryId: portfolio.categoryId,
          hexColor: portfolio.hexColor,
          logoImage: portfolio.logoImage
            .map((image: any) => image.id)
            .join(','),
          thumbnail: portfolio.thumbnail
            .map((image: any) => image.id)
            .join(','),
          'giff_1:1': portfolio['giff_1:1']
            .map((image: any) => image.id)
            .join(','),
          'giff_16:9': portfolio['giff_16:9']
            .map((image: any) => image.id)
            .join(','),
          'img_4:3': portfolio['img_4:3']
            .map((image: any) => image.id)
            .join(','),
          'img_16:9': portfolio['img_16:9']
            .map((image: any) => image.id)
            .join(','),
        })
      } else {
        setDataPost(initialState)
      }
      const response2 = await getPortfolioCategories(token, 1, 1000)
      if (response2.status == 200)
        setPortfolioCategories(response2.data.payload.data.categories)
      setIsLoading(false)
    }
    getData()
  }, [query, token, initialState])

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Edit Portofolio | Alphadev Dashboard Marketing</title>
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
          <title>Edit Portofolio | Alphadev Dashboard Marketing</title>
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
        <title>Edit Portofolio | Alphadev Dashboard Marketing</title>
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
              <h1 className="font-semibold text-gray-900">Edit Portofolio</h1>
              <span className="text-xs text-gray-500">
                Perbarui detail bagian portofolio.
              </span>
            </div>
          </div>
          <div className="scrollbar flex h-full flex-col overflow-y-auto p-5">
            <InputTextWithLabel
              type="text"
              label="Judul Portofolio :"
              placeholder="Masukkan judul portofolio disini..."
              value={dataPost.title}
              onChange={(event) => {
                setDataPost({ ...dataPost, title: event.target.value })
              }}
              required
            />
            <InputTextWithLabel
              type="text"
              label="Slogan Portofolio :"
              placeholder="Masukkan subjudul portofolio disini..."
              value={dataPost.slogan}
              onChange={(event) => {
                setDataPost({ ...dataPost, slogan: event.target.value })
              }}
              required
            />
            <InputSelectWithLabel
              label="Kategori Portofolio :"
              options={portfolioCategoryOptions}
              placeholder="Pilih Kategori"
              value={dataPost.categoryId}
              onChange={(value) =>
                setDataPost({ ...dataPost, categoryId: value })
              }
            />
            <InputTextWithLabel
              type="text"
              label="Warna Portofolio :"
              placeholder="Masukkan Warna portofolio disini..."
              value={dataPost.hexColor}
              onChange={(event) => {
                setDataPost({ ...dataPost, hexColor: event.target.value })
              }}
              required
            />
            <InputTextareaWithLabel
              label="Deskripsi Portofolio :"
              placeholder="Masukkan deskripsi portofolio disini..."
              value={dataPost.description}
              onChange={(event) => {
                setDataPost({
                  ...dataPost,
                  description: event.target.value,
                })
              }}
              required
            />
            <InputMultiText
              label="Benefit Portofolio :"
              placeholder="Masukkan benefit portofolio disini..."
              values={dataPost.benefits.split(',')}
              onChange={(values) => {
                setDataPost({ ...dataPost, benefits: values.join(',') })
              }}
            />
            <ChooseMedia
              label="Logo Portofolio"
              values={dataPost.logoImage.split(',')}
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  logoImage: medias.map((media) => media.id).join(','),
                })
              }
            />
            <ChooseMedia
              label="Thumbnail Portofolio"
              values={dataPost.thumbnail.split(',')}
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  thumbnail: medias.map((media) => media.id).join(','),
                })
              }
            />
            <ChooseMedia
              label="Gif 1:1"
              values={dataPost['giff_1:1'].split(',')}
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  'giff_1:1': medias.map((media) => media.id).join(','),
                })
              }
            />
            <ChooseMedia
              label="Gif 16:9"
              values={dataPost['giff_16:9'].split(',')}
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  'giff_16:9': medias.map((media) => media.id).join(','),
                })
              }
            />
            <ChooseMedia
              label="Gambar 4:3 (x4)"
              values={dataPost['img_4:3'].split(',')}
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  'img_4:3': medias.map((media) => media.id).join(','),
                })
              }
            />
            <ChooseMedia
              label="Gambar 16:9 (x2)"
              values={dataPost['img_16:9'].split(',')}
              onChange={(medias) =>
                setDataPost({
                  ...dataPost,
                  'img_16:9': medias.map((media) => media.id).join(','),
                })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 p-5">
            <Button text="Simpan" type="submit" isLoading={isLoadingPost} />
            <Button text="Batal" variant="brand-secondary" />
          </div>
        </form>
      </FormLayout>
    </>
  )
}

export default PageEditPortfolio
