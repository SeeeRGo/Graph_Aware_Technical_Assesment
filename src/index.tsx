import React, { useEffect } from "react";
import { getTableData } from "./api";
import { Table } from "./components/Table";
import { renderChildren } from "./components/Table/renderChildrenTables";
import { useAppDispatch } from "./hooks";

export const App = () => {
  const tableName = 'root'
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTableData());
  }, [dispatch])
  return (
    <Table
      tableName={tableName}
      renderChildren={renderChildren}
    />
  );
};
