import { TableRow } from "../api/types"

// Was as step in figuring out tree parsing mechanism didn't delete to give more insight into my thought process
export const parseOnlyData = (records: TableRow[] = [], prefix: string, currentResult: Record<string, any>) => {
  return records.reduce(
    (acc, record) => {
      if(acc[prefix] === undefined) {
        acc[prefix] = [record.data];
        return acc
      }
      acc[prefix].push(record.data)
      return acc
    },
    currentResult
  )
}
export const createKidsTablesRefs = () => {
  
} 
export const parseDataWithKids = (
  records: TableRow[] = [],
  prefix: string,
  currentResult: Record<string, any>
) => {
  return records.reduce((acc, record, index) => {
    acc = parseKids(record.kids, `${prefix}/${index}`, acc);
    if (acc[prefix] === undefined) {
      acc[prefix] = [record.data];
      return acc;
    }
    acc[prefix].push(record.data);
    return acc;
  }, currentResult);
};

const parseKids = (
  kids: TableRow['kids'],
  prefix: string,
  currentResult: Record<string, any>
) => {
  return Object.entries(kids).reduce(
    (acc, [kidKey, { records }]) => {
      return parseDataWithKids(records, `${prefix}/${kidKey}`, acc)
    },
    currentResult,
  )
}