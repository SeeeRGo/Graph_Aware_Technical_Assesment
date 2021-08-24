import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiResponse, GET_TABLE_DATA } from "./constants";
import { TableRow } from "./types";

export const getTableData = createAsyncThunk(GET_TABLE_DATA, async () => {
  // pretending to fetch data asyncronously
  const result = await new Promise<TableRow[]>((resolve) => {
    resolve(apiResponse)
  })
  return result;
});