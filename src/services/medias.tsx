import axios from 'axios'

export const createMedia = async (token: string, data: FormData) =>
  await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/medias`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  })
    .then((response) => response)
    .catch((error) => error.response)

export const getMedias = async (
  token: string,
  page: number = 1,
  size: number = 10
) =>
  await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/medias`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { page, size },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const deleteMedia = async (token: string, id: string) =>
  await axios({
    method: 'DELETE',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/medias/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response)
    .catch((error) => error.response)
