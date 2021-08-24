import { parseDataWithKids, parseOnlyData } from ".";
import { parsed, parsedOnlyData, rawKidsData } from "./__mocks__";

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

test('parseOnlyData', () => {
  const actual = parseOnlyData(rawKidsData, 'root', {})
  expect(actual).toEqual(parsedOnlyData);
})
