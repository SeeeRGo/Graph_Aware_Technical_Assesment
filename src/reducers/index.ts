import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getTableData } from "../api";
import { RootState } from "../store";
import { parseDataWithKids } from "../utils";
import { ParsedTable } from "../utils/types";


const initialState: ParsedTable = {};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    deleteRow: (state, action) => {
      if (state[action.payload.tableName]) {
        state[action.payload.tableName] = state[action.payload.tableName]?.filter(({ id }) => id !== action.payload.id) ?? []
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTableData.fulfilled, (state, action) => {
      state = parseDataWithKids(action.payload, 'root', state)
    })
  },
});

export const { deleteRow } = tableSlice.actions;
const selectRoot = (state: RootState) => state.table
export const createSelectTable = (tableName: string) => createSelector(
  selectRoot,
  root => root[tableName] ?? []
)
export const createSelectTableKeys = (tableName: string) =>
  createSelector(
    createSelectTable(tableName),
    (table) => {
      const first = table && table[0] ? table[0] : {}
      return Object.keys(first);
    }
  );
export default tableSlice.reducer;
