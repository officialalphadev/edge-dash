import axios from 'axios'

type TypeLogin = {
  email: string
  password: string
}

export const login = async ({ email, password }: TypeLogin) =>
  await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/signin`,
    data: { email, password },
  })
    .then((response) => response)
    .catch((error) => error.response)
