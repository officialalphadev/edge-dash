import axios from 'axios'

type TDataPost = {
  categoryId: string
  hexColor: string
  title: string
  slogan: string
  description: string
  benefits: string
  thumbnail: string
  logoImage: string
  'giff_1:1': string
  'giff_16:9': string
  'img_4:3': string
  'img_16:9': string
}

export const getPortfolios = async (
  token: string,
  page: number,
  size: number
) =>
  await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolios`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { page, size },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const getPortfolio = async (token: string, id: string) =>
  await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolios/find/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const createPortfolio = async (token: string, data: TDataPost) =>
  await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolios/create`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  })
    .then((response) => response)
    .catch((error) => error.response)

export const editPortfolio = async (
  token: string,
  id: string,
  data: TDataPost
) =>
  await axios({
    method: 'PUT',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolios/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  })
    .then((response) => response)
    .catch((error) => error.response)

export const deletePortfolio = async (token: string, id: string) =>
  await axios({
    method: 'DELETE',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolios/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const getPortfolioCategories = async (
  token: string,
  page: number = 1,
  size: number = 10
) =>
  await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolio-categories`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { page, size },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const createPortfolioCategory = async (token: string, name: string) =>
  await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolio-categories`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { name },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const deletePortfolioCategory = async (token: string, id: string) =>
  await axios({
    method: 'DELETE',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolio-categories/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const editPortfolioCategory = async (
  token: string,
  id: string,
  name: string
) =>
  await axios({
    method: 'PUT',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/portfolio-categories/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { name },
  })
    .then((response) => response)
    .catch((error) => error.response)
