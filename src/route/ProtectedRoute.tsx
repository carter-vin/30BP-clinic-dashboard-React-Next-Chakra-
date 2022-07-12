import SplashScreen from 'components/SplashScreen'
import { useAuth } from 'context/useAuth'
import React from 'react'

export const ProtectRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth()
  console.log('isAuthenticated', { isAuthenticated, isLoading })

  if (isLoading) {
    return <SplashScreen />
  }
  if (!isAuthenticated) {
    if (typeof window !== 'undefined') {
      window.location.href = '/login'
    }
    return <SplashScreen />
  }
  return children as React.ReactElement
}
