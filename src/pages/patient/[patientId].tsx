import { Stack, Flex, Box, Center } from '@chakra-ui/react'

import Text from 'components/shared/Text'
import SEOHead from 'components/shared/SeoHead'
import PatientDashboardLayout from 'layout/PatientDashboardLayout'
import UserMiniDetail from 'modules/home/UserMiniDetail'
import Back from 'components/Back'
import Card from 'components/shared/Card'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PatientType } from 'types/Patient'
import { mockPatient } from 'mock/patients'
import { find } from 'lodash'
import {
  formatDateWithDateYearMonth,
  formatDateWithMonthYear,
} from 'utils/DateConversion'
import { formatPhoneNumber } from 'utils/FormatPhone'
import BpMeasurementTable from 'modules/patients/BpMeasurementTable'
import Link from 'next/link'
import Button from 'components/shared/Button'
import { ItemOverviewType } from 'types/ItemOverview'
import LineChart from 'components/chart/LineChart'

const patientStats: ItemOverviewType[] = [
  {
    label: 'Most Recent BP Reading',
    value: '115/84',
  },
  {
    label: 'BP Reading This Months',
    value: '48',
  },
  {
    label: 'Average BP Reading',
    value: '120/80',
  },
  {
    label: 'Goal BP Reading',
    value: '120/80',
  },
]

const PatientDetail = () => {
  const router = useRouter()
  const { patientId } = router.query
  console.log({ router, patientId }, 'router')

  const [patientDetail, setPatientDetail] = useState<PatientType>(
    {} as PatientType
  )

  useEffect(() => {
    const patientInfo = find(mockPatient, (item) => {
      return item.id === patientId
    })
    setPatientDetail(patientInfo || ({} as PatientType))
    console.log(patientDetail, 'patientDetail')
  }, [patientId])

  return (
    <>
      <SEOHead title="Patient Detail" />
      <Stack spacing={6}>
        <Back backTitle="back to clinic Dashboard" redirect="/" />
        <UserMiniDetail title={patientDetail.name || ''} stats={patientStats} />
        <Flex
          justifyContent="space-between"
          alignContent="flex-start"
          alignItems="flex-start"
          gap={6}
        >
          <Stack flex={1} spacing={6}>
            <Card>
              <Stack>
                <Text text="Demographic" fontWeight="bold" variant="h6" />
                <Stack direction="row" justifyContent="justify-between">
                  <Stack flex={1} spacing={2}>
                    <Stack spacing={2} alignItems="center" direction="row">
                      <Text text="DOB:" />
                      <Text
                        text={formatDateWithDateYearMonth(patientDetail.dob)}
                      />
                    </Stack>
                    <Stack spacing={2} alignItems="center" direction="row">
                      <Text text="Age:" />
                      <Text text={patientDetail.age} />
                    </Stack>
                    <Stack spacing={2} alignItems="center" direction="row">
                      <Text text="Gender:" />
                      <Text text={patientDetail.gender} />
                    </Stack>
                    <Stack spacing={2} alignItems="center" direction="row">
                      <Text text="Ethnicity:" />
                      <Text text={patientDetail.ethnicity} />
                    </Stack>
                    <Stack spacing={2} alignItems="center" direction="row">
                      <Text text="Location:" />
                      <Text text={patientDetail.location} />
                    </Stack>
                    <Stack spacing={2} alignItems="center" direction="row">
                      <Text text="ZipCode:" />
                      <Text text={patientDetail.zipcode} />
                    </Stack>
                  </Stack>
                  <Stack flex={1} spacing={2}>
                    <Stack spacing={2} alignItems="center" direction="row">
                      <Text text="Email:" />
                      <Text text={patientDetail.email} />
                    </Stack>
                    <Stack spacing={2} alignItems="center" direction="row">
                      <Text text="Phone:" />
                      <Text
                        text={formatPhoneNumber(patientDetail.phone) || '-'}
                      />
                    </Stack>
                    <Stack spacing={2} alignItems="center" direction="row">
                      <Text text="Street:" />
                      <Text text={patientDetail.street} />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
            <Card>
              <Stack spacing={4}>
                <Text text="Clinic Notes" fontWeight="bold" variant="h6" />
                <Stack spacing={4}>
                  {[1, 2].map((item, index) => (
                    <>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        key={index}
                      >
                        <Stack spacing={0}>
                          <Flex gap={2}>
                            <Text
                              text={formatDateWithDateYearMonth('08/02/2022')}
                            />
                            <Text text="From Dr. Brown" fontWeight="bold" />
                          </Flex>
                          <Text
                            noOfLines={1}
                            text=" 
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eos eum ab dolor. 
                          Quia ipsum assumenda sequi ducimus aliquam cumque nobis maiores.
                          Nam qui numquam suscipit ducimus nobis voluptatem obcaecati?
                        "
                          />
                        </Stack>
                        <Link passHref href={`/clinical-notes/123`}>
                          <Button label="View" variant="outline" width="8vw" />
                        </Link>
                      </Stack>
                      <Box bg="gray.300" width="100%" height="2px" />
                    </>
                  ))}
                </Stack>
                <Center>
                  <Link passHref href={`/clinical-notes/123`}>
                    <Button
                      label="View All Clinic Notes"
                      variant="ghost"
                      width="10vw"
                    />
                  </Link>
                </Center>
              </Stack>
            </Card>
          </Stack>
          <Stack flex={1}>
            <Card>
              <Stack spacing={6}>
                <Text
                  text={`BP Measurements - ${formatDateWithMonthYear(
                    '7/8/2022'
                  )}`}
                  fontWeight="bold"
                  variant="h6"
                />
                <LineChart />
                <BpMeasurementTable />
                <Center>
                  <Link passHref href={`/clinical-notes/123`}>
                    <Button
                      label="View Full History"
                      variant="ghost"
                      width="10vw"
                    />
                  </Link>
                </Center>
              </Stack>
            </Card>
          </Stack>
        </Flex>
      </Stack>
    </>
  )
}

PatientDetail.getLayout = function getLayout(
  page: React.ReactNode | React.ReactElement
) {
  return <PatientDashboardLayout>{page}</PatientDashboardLayout>
}

PatientDetail.requiresAuth = true
export default PatientDetail
