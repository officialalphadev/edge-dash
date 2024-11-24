import axios from 'axios'

type TypeCreateUpdateDeleteProfile = {
  message: string
  statusCode: number
}

export const editProfileFullName = async (
  token?: string,
  id?: string,
  data?: { fullName?: string; email?: string; password?: string }
): Promise<TypeCreateUpdateDeleteProfile> => {
  try {
    const response = await axios({
      method: 'PUT',
      url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/dashboard/users/update`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { userId: id },
      data,
    })
    return response.data
  } catch (error: any) {
    return error.response?.data
  }
}

export const getProfileById = async (token: string, id: string) =>
  await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/profiles/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response)
    .catch((error) => error.response)
