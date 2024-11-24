import axios from 'axios'

export const getSubscribers = async (
  token: string,
  page: number = 1,
  size: number = 10
) =>
  await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/subscribers`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { page, size },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const deleteSubscriber = async (token: string, id: string) =>
  await axios({
    method: 'DELETE',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/subscribers/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const createSubscriber = async (token: string, email: string) =>
  await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/subscribers`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { email },
  })
    .then((response) => response)
    .catch((error) => error.response)
