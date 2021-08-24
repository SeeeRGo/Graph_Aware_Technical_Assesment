import React from 'react';
import { Table } from ".";

export const renderChildren = (kidTablesArr: string[]): JSX.Element => (
  <>
    {kidTablesArr.map((kidTable) => (
      <Table
        key={kidTable}
        tableName={kidTable}
        renderChildren={renderChildren}
      />
    ))}
  </>
);
