import { Stack, Box } from '@chakra-ui/react'
import Navbar from 'components/Navbar'

interface PatientDashboardLayoutInterface {
  children: React.ReactNode
}

const PatientDashboardLayout = (props: PatientDashboardLayoutInterface) => {
  const { children } = props

  return (
    <Box bg="pink.50" minH="100vh" height="100%" position="relative" pb={8}>
      <Navbar />
      <Stack spacing={6} px={[4, 8, 16, 32]} pt="10vh">
        {children}
      </Stack>
    </Box>
  )
}

export default PatientDashboardLayout
