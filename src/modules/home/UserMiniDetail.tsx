import { Stack } from '@chakra-ui/react'
import moment from 'moment'

import Card from 'components/shared/Card'
import Text from 'components/shared/Text'
import Button from 'components/shared/Button'
import { ItemOverviewType } from 'types/ItemOverview'
import NumberingCard from './NumberingCard'

const currentMonth = moment().format('MMM YYYY')

interface UserMiniDetailProps {
  title?: string
  stats: ItemOverviewType[]
}
const UserMiniDetail = (props: UserMiniDetailProps) => {
  const { title, stats } = props
  return (
    <Card>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack spacing={0}>
          {title ? (
            <Text text={title} fontWeight="bold" variant="h4" />
          ) : (
            <>
              <Text
                text="Overview of Patients"
                fontWeight="bold"
                variant="h4"
              />
              <Text text={currentMonth} fontWeight="bold" variant="h4" />
            </>
          )}
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={32}
        >
          {stats.map((item: ItemOverviewType) => (
            <NumberingCard
              key={item.label}
              label={item.label}
              value={item.value}
              footer={item?.footer || ''}
            />
          ))}
        </Stack>
        <Button label="Generate Report" variant="outline" />
      </Stack>
    </Card>
  )
}

export default UserMiniDetail
