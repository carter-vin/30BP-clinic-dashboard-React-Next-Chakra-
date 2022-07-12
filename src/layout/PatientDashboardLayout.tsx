import { Stack, Spacer } from '@chakra-ui/react'
import AppBar from 'components/AppBar'
// import SplashScreen from 'components/SplashScreen'
// import { useAuth } from 'context/useAuth'
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'

interface PatientDashboardLayoutInterface {
  children: React.ReactNode
}

const PatientDashboardLayout = (props: PatientDashboardLayoutInterface) => {
  const { children } = props
  // const { isAuthenticated, isLoading } = useAuth()
  // const router = useRouter()

  // const handleRouting = () => {
  //   if (!isAuthenticated) {
  //     router.push('/login')
  //   }
  // }

  // useEffect(() => {
  //   handleRouting()
  // }, [])

  // if (isLoading) {
  //   return <SplashScreen />
  // }

  return (
    <Stack
      height="100vh"
      overflowY="auto"
      bg="red.50"
      gap={4}
      position="relative"
    >
      <AppBar />
      <Stack gap={4} px={16}>
        {children}
      </Stack>
      <Spacer />
    </Stack>
  )
}

export default PatientDashboardLayout
