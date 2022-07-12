import SplashScreen from 'components/SplashScreen'
import { useAuth } from 'context/useAuth'
import React from 'react'

export const PublicRoute = ({
  children,
  isPublic,
}: {
  children: React.ReactNode
  isPublic: boolean
}) => {
  const { isAuthenticated, isLoading } = useAuth()
  if (isLoading) {
    return <SplashScreen />
  }
  if (isAuthenticated && !isPublic && !isLoading) {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }
  return children as React.ReactElement
}
