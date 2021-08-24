import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
import { RenderTable } from "../actions";
import { getTableData } from "../api";
import { TableRow } from "../api/types";


const initialState: RenderTable[] = [];

const tableProcessor = (row: TableRow): RenderTable[] => {
  const { data, kids } = row
  const kidTables = Object.entries(kids)
    .flatMap(([tableName, tableRecords]) => tableRecords.records
    .flatMap(tableProcessor)
  )
  const parsedData: RenderTable = {
    rowId: uuid(),
    
  }
  return 
}
const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTableData.fulfilled, (state, action) => {
      // state = action.payload.map()
    })
  },
});

export const {} = tableSlice.actions;
export default tableSlice.reducer;
