import { Stack, Spacer } from '@chakra-ui/react'
import AppBar from 'components/AppBar'

interface PatientDashboardLayoutInterface {
  children: React.ReactNode
}

const PatientDashboardLayout = (props: PatientDashboardLayoutInterface) => {
  const { children } = props

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
