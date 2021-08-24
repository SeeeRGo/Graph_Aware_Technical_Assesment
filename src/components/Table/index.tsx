import { TableBody, Table as MuiTable, Typography, TableHead } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { ignoredFields } from '../../constants'
import { useAppDispatch } from '../../hooks'
import { createSelectTable, createSelectTableKeys, deleteRow } from '../../reducers'
import { ParsedTableRecord } from '../../utils/types'
import { Row } from '../Row'

interface Props {
  tableName: string;
  renderChildren: (kidTableRefs: string[]) => JSX.Element;
}
export const Table = ({ renderChildren, tableName }: Props) => {
  const dispatch = useAppDispatch();
  const rows = useSelector(createSelectTable(tableName))
  const keys = useSelector(createSelectTableKeys(tableName))
  return (
    <>
      <Typography variant="h5">
        {tableName.split("/").reverse()[0] ?? ""}
      </Typography>
      <MuiTable>
        <TableHead>
          <Row
            row={keys.filter((key) => !ignoredFields.includes(key))}
            onDelete={() => {}}
            kidTableRefs={[]}
            renderChildren={renderChildren}
          />
        </TableHead>
        <TableBody>
          {rows.map((row: ParsedTableRecord, i: number) => (
            <Row
              row={Object.entries(row)
                .filter(([rowKey]) => !ignoredFields.includes(rowKey))
                .map(([_, rowValue]) => rowValue)}
              kidTableRefs={
                Array.isArray(row["kidTablesRefs"]) ? row["kidTablesRefs"] : []
              }
              key={i}
              onDelete={() => dispatch(deleteRow({ id: row["id"], tableName }))}
              renderChildren={renderChildren}
            />
          ))}
        </TableBody>
      </MuiTable>
    </>
  );
}