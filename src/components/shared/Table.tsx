import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Box,
} from '@chakra-ui/react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useTable, useSortBy, Column } from 'react-table'

export type DataTableProps<Data extends object> = {
  data: Data[]
  columns: Column<Data>[]
}

function TableComponent<Data extends object>(props: DataTableProps<Data>) {
  const { data, columns } = props
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: {
          hiddenColumns: ['id'],
        },
      },
      useSortBy
    )

  return (
    <TableContainer>
      <Table {...getTableProps()} variant="striped">
        <Thead bg="red.100">
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, columnIndex) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                  key={`${index}-${columnIndex}`}
                  color="black"
                >
                  <Box display="flex" alignItems="center">
                    {column.render('Header')}
                    <chakra.span pl="4">
                      {column.isSortedDesc ? (
                        <AiFillCaretDown />
                      ) : (
                        <AiFillCaretUp />
                      )}
                    </chakra.span>
                  </Box>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, i) => {
                  return (
                    <Td {...cell.getCellProps()} key={i}>
                      {cell.render('Cell')}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent
