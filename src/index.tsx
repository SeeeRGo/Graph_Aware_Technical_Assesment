import React from "react";
import { apiResponse, dataKeys } from "./api/constants";
import { Table } from "./components/Table";

export const App = () => (
  <Table
    rows={apiResponse}
    keys={dataKeys}
    renderChildren={() => (
      <Table rows={apiResponse} keys={dataKeys} renderChildren={() => null} />
    )}
  />
);
