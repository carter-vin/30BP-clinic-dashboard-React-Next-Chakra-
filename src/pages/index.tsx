import { Stack, Flex, Box } from '@chakra-ui/react'
import { FiAlertCircle } from 'react-icons/fi'
import moment from 'moment'

import PatientDashboardLayout from 'layout/PatientDashboardLayout'
import Card from 'components/shared/Card'
import Button from 'components/shared/Button'
import SEOHead from 'components/shared/SeoHead'
import Text from 'components/shared/Text'
import OnlineStatus from 'components/OnlineStatus'

import EstimatorTable from 'modules/home/EstimatorTable'
import UserMiniDetail from 'modules/home/UserMiniDetail'
import { ItemOverviewType } from 'types/ItemOverview'
import LineChart from 'components/chart/LineChart'

const currentMonth = moment().format('MMM YYYY')

const homeStats: ItemOverviewType[] = [
  {
    label: 'Active Patients',
    value: '4105',
  },
  {
    label: 'BP Reading This Months',
    value: '65028',
  },
  {
    label: 'Average BP',
    value: '120/80',
  },
  {
    label: 'Average BP Reading',
    value: '15.8',
    footer: 'per month',
  },
]

const Home = () => {
  return (
    <>
      <Flex justifyContent="flex-end">
        <Card size="sm">
          <Stack
            alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}
            justifyContent={[
              'flex-start',
              'flex-start',
              'flex-start',
              'center',
            ]}
            direction={['column', 'column', 'column', 'row']}
            spacing={[0, 0, 0, 6]}
          >
            <Stack
              alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}
              direction="row"
              color="red"
            >
              <FiAlertCircle size={25} />
              <Text
                text="15 patients"
                textTransform="capitalize"
                fontWeight="bold"
              />
            </Stack>
            <Button label="View Patients" variant="ghost" />
          </Stack>
        </Card>
      </Flex>
      <UserMiniDetail stats={homeStats} />
      <Stack
        direction={['column', 'column', 'column', 'row']}
        justifyContent="space-between"
        gap={[2, 3, 4, 6]}
        width="100%"
      >
        <Box flex={1}>
          <Card>
            <Stack flex={1}>
              <Text
                text={`Patients BP Measurements - ${currentMonth}`}
                variant="h6"
                fontWeight="bold"
              />
              <LineChart />
            </Stack>
          </Card>
        </Box>
        <Box flex={1}>
          <Card>
            <Stack spacing={8}>
              <Flex
                justifyContent="space-between"
                alignItems={[
                  'flex-start',
                  'flex-start',
                  'flex-start',
                  'center',
                ]}
                gap={2}
                direction={['column', 'column', 'column', 'row']}
              >
                <Text
                  text={`CPT Estimator - ${currentMonth}`}
                  variant="h6"
                  fontWeight="bold"
                />
                <Flex
                  alignItems="center"
                  direction={[
                    'row-reverse',
                    'row-reverse',
                    'row-reverse',
                    'row',
                  ]}
                  gap={6}
                >
                  <Text
                    text="EST. Funding Status"
                    variant="h6"
                    fontWeight="bold"
                  />
                  <OnlineStatus online />
                </Flex>
              </Flex>
              <EstimatorTable />
            </Stack>
          </Card>
        </Box>
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
