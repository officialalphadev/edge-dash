import Head from 'next/head'
import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'
import { ButtonAuth, Images, InputText } from 'components'
import { AlphadevLogo, BgLogin } from 'assets'
import { useGlobalContext } from 'contexts'
import { login } from 'services'
import jwtDecode from 'jwt-decode'

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  }

  const [isLoading, setIsLoading] = useState(false)
  const [dataPost, setDataPost] = useState(initialState)

  const { toast, setToken, setTokenDecoded } = useGlobalContext()
  const { push } = useRouter()

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const response = await login(dataPost)

    if (response?.status != 200) {
      setIsLoading(false)
      return toast({
        status: 'error',
        message: 'Gagal login, pastikan email dan password benar.',
      })
    }

    sessionStorage.setItem(
      'token',
      JSON.stringify(response.data.payload.data.token)
    )
    setToken(response.data.payload.data.token)
    setTokenDecoded(jwtDecode(response.data.payload.data.token))

    setIsLoading(false)
    toast({ status: 'success', message: 'Berhasil login.' })
    push('/')
  }

  return (
    <>
      <Head>
        <title>Login | Alphadev Dashboard Marketing</title>
      </Head>
      <div className={`h-screen bg-gray-50`}>
        <Images
          src={BgLogin}
          alt="alphadev-bg-login"
          style={{ objectFit: 'cover' }}
          fill
          className="absolute h-screen w-screen"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className={`w-full max-w-md space-y-4 rounded-xl border border-gray-300 bg-white p-10`}
          >
            <Images
              src={AlphadevLogo}
              alt={`alphadev-logo`}
              style={{ objectFit: 'contain' }}
              fill
              className={`relative mx-auto aspect-[12/3] w-48`}
            />
            <p className="text-center text-sm text-gray-900 sm:text-base">
              Selamat datang kembali! silahkan masuk ke akun kamu.
            </p>
            <div className={`flex flex-col space-y-5 pt-5`}>
              <InputText
                type="email"
                name="email"
                placeholder="Email"
                onChange={(event) =>
                  setDataPost({ ...dataPost, email: event.target.value })
                }
                required
              />
              <InputText
                type="password"
                placeholder="Kata Sandi"
                onChange={(event) =>
                  setDataPost({ ...dataPost, password: event.target.value })
                }
                required
              />
              <ButtonAuth isLoading={isLoading}>Masuk</ButtonAuth>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
