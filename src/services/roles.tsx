import axios from 'axios'

type TypeRole = {
  name: string
  description: string
  permissions: string
}

export const getRoles = async (token: string, page: number, size: number) =>
  await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/roles`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { page, size },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const createRole = async (token: string, data: TypeRole) =>
  await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/roles`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  })
    .then((response) => response)
    .catch((error) => error.response)

export const deleteRole = async (token: string, id: string) =>
  await axios({
    method: 'DELETE',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/roles/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const editRole = async (token: string, id: string, data: TypeRole) =>
  await axios({
    method: 'PUT',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/roles/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  })
    .then((response) => response)
    .catch((error) => error.response)
