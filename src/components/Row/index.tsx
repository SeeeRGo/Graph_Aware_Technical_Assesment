import React, { ReactNode, useState } from 'react'
import TableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'

interface Props {
  row: string[];
  renderChildren: () => ReactNode; // TODO figure out how to incorporate Memo into all of this
  onDelete: () => void;
}
export const Row = ({ row, renderChildren, onDelete }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <>
      <MuiTableRow onClick={() => setIsExpanded(!isExpanded)}>
        {row.map((cell, i) => (
          <TableCell key={i}>{cell}</TableCell>
        ))}
        <TableCell>
          {isExpanded ? 'V' : '>'}
        </TableCell>
        <TableCell onClick={onDelete}>
          X
        </TableCell>
      </MuiTableRow>
      {isExpanded ? renderChildren() : null}
    </>
  )
}