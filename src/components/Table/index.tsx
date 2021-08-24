import { TableBody, TableHead, Table as MuiTable } from '@material-ui/core'
import React, { ReactNode } from 'react'
import { TableRow } from '../../api/types'
import { Row } from '../Row'

interface Props {
  rows: TableRow[];
  keys: string[];
  renderChildren: () => ReactNode;
}
export const Table = ({ rows, keys, renderChildren }: Props) => {
  return (
    <MuiTable>
    <TableHead>
      <Row row={keys} onDelete={() => {}} renderChildren={() => null} />
    </TableHead>
    <TableBody>
      {rows.map((row: TableRow, i: number) => (
        <Row row={Object.values(row.data)} key={i}  onDelete={() => {}} renderChildren={renderChildren} />
      ))}
    </TableBody>
    </MuiTable>
  );
}