import React, { useState } from 'react'
import TableCell from '@material-ui/core/TableCell'
import MuiTableRow from '@material-ui/core/TableRow'
import { Collapse } from '@material-ui/core'

interface Props {
  row: Array<string | string[]>;
  kidTableRefs: string[];
  renderChildren: (kidTableRefs: string[]) => JSX.Element;
  onDelete: () => void;
}
export const Row = ({ row, renderChildren, kidTableRefs, onDelete }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <>
      <MuiTableRow>
        <TableCell onClick={() => setIsExpanded(!isExpanded)}>
          {!kidTableRefs.length ? "" : isExpanded ? "V" : ">"}
        </TableCell>
        {row.map((cell, i) => (
          <TableCell key={i}>{cell.toString()}</TableCell>
        ))}
        <TableCell onClick={onDelete}>X</TableCell>
      </MuiTableRow>
      <MuiTableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            {isExpanded ? renderChildren(kidTableRefs) : null}
          </Collapse>
        </TableCell>
      </MuiTableRow>
    </>
  );
}