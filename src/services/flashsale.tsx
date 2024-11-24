import axios from 'axios'

type TFlashsale = {
  name: string
  description: string
  start_date: string
  end_date: string
  normal_price: number
  discount_price: number
  rules: string
  benefits: string
  thumbnail: string
  images: string
}

export const getFlashsales = async (
  token: string,
  page: number = 1,
  size: number = 10
) =>
  await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flashsales`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { page, size },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const getFlashsale = async (token: string, id: string) =>
  await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flashsales/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const createFlashsale = async (token: string, data: TFlashsale) =>
  await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flashsales`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  })
    .then((response) => response)
    .catch((error) => error.response)

export const editFlashsale = async (
  token: string,
  id: string,
  data: TFlashsale
) =>
  await axios({
    method: 'PUT',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flashsales/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  })
    .then((response) => response)
    .catch((error) => error.response)

export const deleteFlashsale = async (token: string, id: string) =>
  await axios({
    method: 'DELETE',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flashsales/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response)
    .catch((error) => error.response)
