import { createAction } from "@reduxjs/toolkit";

const DELETE_ROW = "DELETE_ROW";
// const CREATE_TABLE = 'CREATE_TABLE';

interface TableRenderRowUtilInfo {
  childRef: string | null
  rowId: string
}

type TableRenderRow = Record<string, string> & TableRenderRowUtilInfo;
export interface RenderTable {
  headers: Array<keyof TableRenderRow>
  data: TableRenderRow[]
}

export const deleteRow = createAction<string>(DELETE_ROW);
