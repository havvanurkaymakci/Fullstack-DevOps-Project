'use client'

import { createContext, useState, useContext, useEffect, useCallback, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { jwtDecode } from 'jwt-decode'

// Kullanıcı tipi tanımlaması
type User = {
  username: string;
  email: string;
  // Diğer kullanıcı bilgileri buraya eklenebilir
}

// AuthContext tipi
type AuthContextType = {
  user: User | null;
  authTokens: { access: string; refresh: string } | null;
  registerUser: (userData: Record<string, unknown>) => Promise<{ success: boolean; data?: any; errors?: any }>;
  loginUser: (credentials: { username: string; password: string }) => Promise<void>;
  logoutUser: () => void;
  loading: boolean;
};

// AuthContext tanımlaması ve default değeri
const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [authTokens, setAuthTokens] = useState<{ access: string; refresh: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Token güncelleme fonksiyonu
  const updateToken = useCallback(async () => {
    if (!authTokens?.refresh) {
      setLoading(false)
      return
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/token/refresh/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: authTokens.refresh }),
      })

      const data = await response.json()

      if (response.ok) {
        setAuthTokens(data)
        setUser(jwtDecode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
        document.cookie = `auth_token=${data.access}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict; Secure`
      } else {
        logoutUser()
      }
    } catch (error: unknown) {
      console.error('Token refresh error:', error)
      logoutUser()
    } finally {
      setLoading(false)
    }
  }, [authTokens])

  // Kullanıcı kaydı fonksiyonu
  const registerUser = async (userData: Record<string, unknown>) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (response.ok) {
        const data = await response.json()
        return { success: true, data }
      } else {
        const data = await response.json()
        return { success: false, errors: data }
      }
    } catch (error: unknown) {
      console.error('Registration error:', error)
      return { success: false, errors: { non_field_errors: ['An unexpected error occurred'] } }
    }
  }

  // Kullanıcı giriş fonksiyonu
  const loginUser = async (credentials: { username: string; password: string }) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      const data = await response.json()

      if (response.ok) {
        setAuthTokens(data)
        setUser(jwtDecode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
        document.cookie = `auth_token=${data.access}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict; Secure`
        router.push('/')
      } else {
        throw new Error(data.detail || 'Login failed')
      }
    } catch (error: unknown) {
      alert((error as Error).message)
    }
  }

  // Kullanıcı çıkış fonksiyonu
  const logoutUser = useCallback(() => {
    localStorage.removeItem('authTokens')
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    setAuthTokens(null)
    setUser(null)
    router.push('/login')
  }, [router])

  // Sayfa yüklendiğinde token'ları al ve kullanıcıyı set et
  useEffect(() => {
    const storedTokens = localStorage.getItem('authTokens')
    if (storedTokens) {
      const tokens = JSON.parse(storedTokens)
      setAuthTokens(tokens)
      setUser(jwtDecode(tokens.access))
    }
    setLoading(false)
  }, [])

  // Token yenileme işlemi
  useEffect(() => {
    const REFRESH_INTERVAL = 1000 * 60 * 4 // 4 dakika
    let interval: NodeJS.Timeout // interval tipini belirledik

    if (authTokens) {
      interval = setInterval(() => {
        updateToken()
      }, REFRESH_INTERVAL)
    }

    return () => clearInterval(interval)
  }, [authTokens, updateToken])

  // Context verisini sağla
  const contextData: AuthContextType = {
    user,
    authTokens,
    registerUser,
    loginUser,
    logoutUser,
    loading
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}

// useAuth hook'u ile context'e erişim sağla
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
