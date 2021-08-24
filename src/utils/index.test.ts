import { createKidsTablesRefs, parseDataWithKids } from ".";
import { multipleKidsDataRefs, parsed, rawKidsData, rawMultipleKidsData } from "./__mocks__";

describe("parseDataWithKids", () => {
  test("parses kids field into proper render data", () => {
    const actual = parseDataWithKids(
      rawKidsData,
      "root",
      {},
    );
    expect(actual).toEqual(parsed);
  });
});

describe('createKidsTablesRefs', () => {
  test('creates list of refs for child data tables', () => {
    const actual = createKidsTablesRefs("root", rawMultipleKidsData);
    expect(actual).toEqual(multipleKidsDataRefs);
  })
})