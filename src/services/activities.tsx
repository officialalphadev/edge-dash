import axios from 'axios'

export const getActivities = async (token: string) =>
  await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/activities`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response)
    .catch((error) => error.response)
