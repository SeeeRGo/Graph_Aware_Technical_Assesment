import { TableRow } from "../api/types";
import { v4 as uuid } from 'uuid';
import { ParsedTable, ParsedTableRecord } from "./types";

export const createKidsTablesRefs = (parentPrefix: string, kids: TableRow['kids']) => {
  return Object.keys(kids).map(kidKey => `${parentPrefix}/${kidKey}`)
};

export const parseDataWithKids = (
  records: TableRow[] = [],
  prefix: string,
  currentResult: ParsedTable
) => {
  return records.reduce((acc, record, index) => {
    acc = parseKids(record.kids, `${prefix}/${index}`, acc);
    const dataWithKidRefs: ParsedTableRecord = {
      ...record.data,
      id: uuid(),
      kidTablesRefs: createKidsTablesRefs(`${prefix}/${index}`, record.kids),
    };
    const oldTabble = acc[prefix] ?? []

    acc[prefix] = [...oldTabble, dataWithKidRefs];
    return acc;
  }, currentResult);
};

const parseKids = (
  kids: TableRow["kids"],
  prefix: string,
  currentResult: ParsedTable
) => {
  return Object.entries(kids).reduce((acc, [kidKey, { records }]) => {
    return parseDataWithKids(records, `${prefix}/${kidKey}`, acc);
  }, currentResult);
};