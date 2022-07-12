/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import { User, LoginUser } from 'types/User'
import { useRouter } from 'next/router'

type AuthContextType = {
  isAuthenticated: boolean
  isLoading: boolean
  user: User
  login: any
  register: any
  logout: any
}

const useAuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: false,
  user: {} as User,
  login: () => {},
  register: () => {},
  logout: () => {},
})

const { Provider } = useAuthContext

const mockUser = {
  id: '1',
  firstname: 'John',
  lastname: 'Doe',
  email: 'johndoe@demo.com',
  password: '123456',
  role: 'admin',
  clininc: 'ABC Clinic',
  title: 'Dr.',
}

const storageAuthName = 'ABC_USER'

const useAuthProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [user, setUser] = useState<User>({} as User)

  const router = useRouter()

  const login = (userPayload: LoginUser) => {
    setIsLoading(true)
    console.log('userData', userPayload)
    Cookies.set(storageAuthName, JSON.stringify(mockUser))
    const userData = Cookies.get(storageAuthName)
    console.log('userData', userData)

    setIsAuthenticated(true)
    setUser(mockUser)
    setIsLoading(false)
  }

  const register = (userPayload: User) => {
    console.log('userData', userPayload)
  }

  const logout = () => {
    Cookies.remove(storageAuthName)
    setIsAuthenticated(false)
    setUser({} as User)
    router.push('/login')
  }

  const checkAuth = async () => {
    setIsLoading(true)
    const userData = await Cookies.get(storageAuthName)
    console.log('userData', userData)
    await setIsAuthenticated(Boolean(userData))
    await setUser(JSON.parse(userData || '{}'))
    setIsLoading(false)
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return {
    isAuthenticated,
    isLoading,
    user,
    login,
    register,
    logout,
  }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const data: any = useAuthProvider()
  return <Provider value={data}>{children}</Provider>
}
export const useAuth = () => useContext(useAuthContext)
