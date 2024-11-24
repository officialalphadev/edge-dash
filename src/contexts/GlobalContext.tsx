import jwtDecode from 'jwt-decode'
import { LoadingLayout } from 'layouts'
import { useRouter } from 'next/router'
import {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from 'react'

interface IGlobalContext {
  dataToast: TToasts
  toast: Dispatch<SetStateAction<TToasts>>
  sidebar: boolean
  setSidebar: Dispatch<SetStateAction<boolean>>
  isMobile: boolean
  token: string
  setToken: Dispatch<SetStateAction<string>>
  tokenDecoded: TTokenDecoded
  setTokenDecoded: Dispatch<SetStateAction<TTokenDecoded>>
}

type TTokenDecoded = { id: string; exp: number; iat: number }

type TToasts = {
  status?: 'success' | 'info' | 'warning' | 'error'
  message?: string
}

export const defaultTokenDecoded = { id: '', exp: 0, iat: 0 }

const GlobalContext = createContext<IGlobalContext>({
  sidebar: false,
  setSidebar: () => {},
  dataToast: {},
  toast: () => {},
  isMobile: false,
  token: '',
  setToken: () => {},
  tokenDecoded: defaultTokenDecoded,
  setTokenDecoded: () => {},
})

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [dataToast, setDataToast] = useState<TToasts>({})
  const [sidebar, setSidebar] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [token, setToken] = useState('')
  const [tokenDecoded, setTokenDecoded] = useState(defaultTokenDecoded)

  const { replace, pathname, events } = useRouter()

  useEffect(() => {
    const checkToken = () => {
      const token: string = JSON.parse(
        sessionStorage.getItem('token') || 'null'
      )

      if (token) {
        setToken(token)
        setTokenDecoded(jwtDecode(token))
      }

      if (!token && pathname != '/login') {
        replace('/login')
        return true
      }

      if (token && pathname == '/login') {
        replace('/')
        return true
      }

      return false
    }
    setIsLoading(true)
    setIsMobile(window.matchMedia('only screen and (max-width: 767px)').matches)

    if (window.matchMedia('only screen and (max-width: 767px)').matches) {
      setSidebar(false)
      localStorage.setItem('sidebar', JSON.stringify(false))
    } else {
      const prevSidebar = localStorage.getItem('sidebar')
      prevSidebar && setSidebar(JSON.parse(prevSidebar))
    }

    const isRouteChange = checkToken()
    isRouteChange
      ? events.on('routeChangeComplete', () => setIsLoading(false))
      : setIsLoading(false)
  }, [events, pathname, replace])

  const value: IGlobalContext = {
    dataToast,
    toast: setDataToast,
    sidebar,
    setSidebar,
    isMobile,
    token,
    setToken,
    tokenDecoded,
    setTokenDecoded,
  }

  return (
    <GlobalContext.Provider value={value}>
      {isLoading ? <LoadingLayout /> : children}
    </GlobalContext.Provider>
  )
}
