import api from 'api/api-config'
import {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { getToken, removeToken, setToken } from 'utility/tokenUtils'

interface IUser {
  token: string | null
}

interface AuthContextProps {
  user: IUser
  signIn: (values: AuthValues) => Promise<void>
  signOut: () => void
}

export interface AuthValues {
  email: string
  password: string
}

const AuthContext = createContext({} as AuthContextProps)

const AuthProvider: FC<{ children: JSX.Element }> = (props) => {
  const [user, setUser] = useState<IUser>(() => {
    const token = getToken()
    return { token }
  })

  const signIn = useCallback(async (values: AuthValues) => {
    api.post('https://reqres.in/api/login', values)
      .then((res: { data: { token: string } }) => {
        setUser(res.data)
        setToken(res.data.token)
        return res
      })
  }, [setUser])

  const signOut = useCallback(() => {
    removeToken()
    setUser({ token: null })
  }, [setUser])

  const value = useMemo(() => ({ user, signIn, signOut }), [
    signIn,
    signOut,
    user,
  ])

  return (
    <AuthContext.Provider value={value} {...props}>
      {props.children}
    </AuthContext.Provider>
  )
}

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
