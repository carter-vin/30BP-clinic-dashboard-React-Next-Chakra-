import TableComponent from 'components/shared/Table'
import { Column } from 'react-table'
import Text from 'components/shared/Text'
import { BpMeasureDataType } from 'types/BpDataTypes'
import { formatDateWithDateYearMonth } from 'utils/DateConversion'
import { Stack } from '@chakra-ui/react'
import { FiAlertCircle } from 'react-icons/fi'

const bpMeasureData: BpMeasureDataType[] = [
  {
    id: 1,
    date: '12/31/2021',
    time: '6:54 AM',
    bp: '120 / 80',
  },
  {
    id: 2,
    date: '9/7/2021',
    time: '2:17 PM',
    bp: '120 / 80',
  },
  {
    id: 3,
    date: '3/13/2022',
    time: '10:06 AM',
    bp: '180 / 80',
  },
  {
    id: 4,
    date: '10/12/2021',
    time: '2:19 AM',
    bp: '120 / 90',
  },
  {
    id: 5,
    date: '1/24/2022',
    time: '9:52 PM',
    bp: '120 / 80',
  },
]

const columns: Column<BpMeasureDataType>[] = [
  {
    Header: 'Date',
    accessor: 'date',
    Cell: ({
      row: {
        original: { date },
      },
    }) => {
      return <Text text={formatDateWithDateYearMonth(date)} />
    },
  },
  {
    Header: 'Time (EST)',
    accessor: 'time',
  },
  {
    Header: 'Bp Reading',
    accessor: 'bp',
    Cell: ({
      row: {
        original: { bp },
      },
    }) => {
      const [bp1, bp2] = bp.split('/')
      const isRisky = parseInt(bp1, 10) > 120 || parseInt(bp2, 10) > 80
      return (
        <Stack
          direction={['column', 'column', 'column', 'row']}
          alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}
          spacing={6}
        >
          <Text text={bp} />
          {isRisky && (
            <Stack alignItems="center" direction="row" color="red">
              <FiAlertCircle size={20} />
              <Text text="Hypertension Crisis" textTransform="capitalize" />
            </Stack>
          )}
        </Stack>
      )
    },
  },
]

const BpMeasurementTable = () => {
  return <TableComponent data={bpMeasureData || []} columns={columns || []} />
}

export default BpMeasurementTable
