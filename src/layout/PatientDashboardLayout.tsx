import { Stack } from '@chakra-ui/react'
import AppBar from 'components/AppBar'

interface PatientDashboardLayoutInterface {
  children: React.ReactNode
}

const PatientDashboardLayout = (props: PatientDashboardLayoutInterface) => {
  const { children } = props

  return (
    <Stack height="100vh" bg="red.50" gap={4}>
      <AppBar />
      <Stack gap={4} px={16}>
        {children}
      </Stack>
    </Stack>
  )
}

export default PatientDashboardLayout
