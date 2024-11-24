import axios from 'axios'

type TFaq = {
  title: string
  description: string
}

export const getFaqs = async (
  token: string,
  page: number = 1,
  size: number = 10
) =>
  await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/faqs`,
    headers: { Authorization: `Bearer ${token}` },
    params: { page, size },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const createFaq = async (token: string, data: TFaq) =>
  await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/faqs`,
    headers: { Authorization: `Bearer ${token}` },
    data,
  })
    .then((response) => response)
    .catch((error) => error.response)

export const deleteFaq = async (token: string, id: string) =>
  await axios({
    method: 'DELETE',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/faqs/${id}`,
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const editFaq = async (token: string, id: string, data: TFaq) =>
  await axios({
    method: 'PUT',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/faqs/${id}`,
    headers: { Authorization: `Bearer ${token}` },
    data,
  })
    .then((response) => response)
    .catch((error) => error.response)
