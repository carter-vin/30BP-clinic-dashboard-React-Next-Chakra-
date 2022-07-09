import TableComponent from 'components/shared/Table'
import { Column } from 'react-table'
import { EstimatorDataType } from 'types/EstimatorDataType'

const estimatorData: EstimatorDataType[] = [
  {
    code: '123ygt',
    base: 62,
    patients_no: 11760,
    revenue: 856320,
  },
  {
    code: 'dhyyd',
    base: 62,
    patients_no: 11760,
    revenue: 856320,
  },
  {
    code: 'jujujd',
    base: 62,
    patients_no: 11760,
    revenue: 856320,
  },
  {
    code: 'jujuj',
    base: 62,
    patients_no: 11760,
    revenue: 856320,
  },
  {
    code: 'huhyhuhu',
    base: 62,
    patients_no: 11760,
    revenue: 856320,
  },
]

const columns: Column<EstimatorDataType>[] = [
  {
    Header: 'Code',
    accessor: 'code',
  },
  {
    Header: 'Base',
    accessor: 'base',
  },
  {
    Header: 'Number of Patients',
    accessor: 'patients_no',
  },
  {
    Header: 'Estimated Revenue',
    accessor: 'revenue',
  },
]

const EstimatorTable = () => {
  return <TableComponent data={estimatorData || []} columns={columns || []} />
}

export default EstimatorTable
