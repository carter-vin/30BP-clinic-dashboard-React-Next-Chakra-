import { Stack, Flex } from '@chakra-ui/react'
import { FiAlertCircle } from 'react-icons/fi'

import PatientDashboardLayout from 'layout/PatientDashboardLayout'

import Button from 'components/shared/Button'
import SEOHead from 'components/shared/SeoHead'
import Text from 'components/shared/Text'
import moment from 'moment'

const Home = () => {
  return (
    <>
      <Flex justifyContent="flex-end">
        <Stack
          alignItems="center"
          direction="row"
          bg="white"
          boxShadow="md"
          px={6}
          py={1}
          spacing={6}
          rounded="md"
        >
          <Stack alignItems="center" direction="row" color="red">
            <FiAlertCircle size={25} />
            <Text
              text="15 patients"
              textTransform="capitalize"
              fontWeight="bold"
            />
          </Stack>
          <Button label="View Patients" variant="ghost" />
        </Stack>
      </Flex>
      <Stack
        bg="white"
        boxShadow="md"
        rounded="md"
        p={6}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack spacing={0}>
          <Text text="Overview of Patients" fontWeight="bold" variant="h4" />
          <Text
            text={moment().format('MMM YYYY')}
            fontWeight="bold"
            variant="h4"
          />
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={16}>
          <Stack spacing={0} alignItems="center">
            <Text
              text="Active Patients"
              color="black"
              variant="p"
              fontStyle="italic"
            />
            <Text text="4,105" fontWeight="400" variant="h1" />
          </Stack>
          <Stack spacing={0} alignItems="center">
            <Text
              text="BP Reading This Month"
              color="black"
              variant="p"
              fontStyle="italic"
            />
            <Text text="65,028" fontWeight="400" variant="h1" />
          </Stack>
          <Stack spacing={0} alignItems="center">
            <Text
              text="Average BP"
              color="black"
              variant="p"
              fontStyle="italic"
            />
            <Text text="120/80" fontWeight="400" variant="h1" />
          </Stack>
          <Stack spacing={0} alignItems="center">
            <Text
              text="Average BP Reading"
              color="black"
              variant="p"
              fontStyle="italic"
            />
            <Text text="15.8" fontWeight="400" variant="h1" />
          </Stack>
        </Stack>
        <Button label="Generate Report" variant="outline" />
      </Stack>
    </>
  )
}

Home.getLayout = function getLayout(
  page: React.ReactNode | React.ReactElement
) {
  return (
    <PatientDashboardLayout>
      <>
        <SEOHead />
        {page}
      </>
    </PatientDashboardLayout>
  )
}

export default Home
