import { Flex, Stack, Box } from '@chakra-ui/react'
import Back from 'components/Back'
import Button from 'components/shared/Button'
import Card from 'components/shared/Card'
import SEOHead from 'components/shared/SeoHead'
import Text from 'components/shared/Text'
import { useSearchData } from 'context/useSearchData'

import PatientDashboardLayout from 'layout/PatientDashboardLayout'
import moment from 'moment'
import Link from 'next/link'
import { SearcPatientType } from 'types/Patient'

const Search = () => {
  const { patientSearchResult } = useSearchData()
  return (
    <Stack spacing={6}>
      <Back backTitle="back to clinic Dashboard" />
      <Card>
        <Stack spacing={8}>
          <Text text="Patients Search Results" fontWeight="bold" variant="h5" />

          <Stack spacing={8}>
            {patientSearchResult.map((patient: SearcPatientType) => (
              <Stack spacing={4} key={patient.id}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box flex={1}>
                    <Text
                      text={patient?.name || ''}
                      variant="p"
                      fontWeight="bold"
                    />
                    <Stack direction="row" spacing={16}>
                      <Flex gap={2} color="gray.600">
                        <Text text="DOB:" variant="p" />
                        <Text
                          text={moment().format('MMMM DD, YYYY')}
                          variant="p"
                        />
                      </Flex>
                      <Flex gap={2} color="gray.600" minW="20vw">
                        <Text text="Email:" variant="p" />
                        <Text text={patient?.email || ''} variant="p" />
                      </Flex>
                      <Flex gap={2} color="gray.600">
                        <Text text="Zip Code:" variant="p" />
                        <Text text={patient?.zipcode || ''} variant="p" />
                      </Flex>
                    </Stack>
                  </Box>
                  <Link passHref href={`/patient/${patient.id}`}>
                    <Button label="View" variant="outline" width="8vw" />
                  </Link>
                </Stack>
                <Box bg="gray.300" width="100%" height="2px" />
              </Stack>
            ))}
          </Stack>
          {!patientSearchResult.length && (
            <Text text="No Patients Found" variant="p" textAlign="center" />
          )}
        </Stack>
      </Card>
    </Stack>
  )
}

Search.getLayout = function getLayout(
  page: React.ReactNode | React.ReactElement
) {
  return (
    <PatientDashboardLayout>
      <>
        <SEOHead title="Search" />
        {page}
      </>
    </PatientDashboardLayout>
  )
}

export default Search
