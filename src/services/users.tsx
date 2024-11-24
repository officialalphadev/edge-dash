import axios from 'axios'
import { Metadata, UserInfo } from 'types'

type TypeGetUserInfo = {
  payload: {
    statusCode: number
    message: string
    data: UserInfo
  }
  metadata: Metadata
}

export const getUsers = async (token: string, page: number, size: number) =>
  await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { page, size },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const createUser = async (
  token: string,
  data: { email: string; password: string; fullName: string; roleId: string }
) =>
  await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  })
    .then((response) => response)
    .catch((error) => error.response)

export const deleteUser = async (token: string, id: string) =>
  await axios({
    method: 'DELETE',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response)
    .catch((error) => error.response)

export const editUser = async (
  token: string,
  id: string,
  data: { email: string; password?: string; fullName: string }
) =>
  await axios({
    method: 'PUT',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  })
    .then((response) => response)
    .catch((error) => error.response)

export const getUserInfo = async (token?: string): Promise<TypeGetUserInfo> => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/dashboard/users/info`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error: any) {
    return error.response?.data
  }
}
