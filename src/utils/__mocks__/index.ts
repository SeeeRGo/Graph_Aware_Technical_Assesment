import { TableRow } from "../../api/types";

export const rawKidsData: TableRow[] = [
  {
    data: { c: "4" },
    kids: {
      a: {
        records: [
          {
            data: {
              "Relative ID": "1007",
              "Patient ID": "34",
              "Is alive?": "true",
              "Frequency of visits": "29",
            },
            kids: {
              b: {
                records: [
                  {
                    data: {
                      "Phone ID": "2008",
                      "ID of the relative": "1007",
                      Phone: "+(179)-982-0570",
                    },
                    kids: {},
                  },
                ],
              },
            },
          },
        ],
      },
    },
  },
  { data: { c: "5" }, kids: {} },
];

export const parsed = {
  root: [{ c: "4" }, { c: "5" }],
  "root/0/a": [
    {
      "Relative ID": "1007",
      "Patient ID": "34",
      "Is alive?": "true",
      "Frequency of visits": "29",
    },
  ],
  "root/0/a/0/b": [
    {
      "Phone ID": "2008",
      "ID of the relative": "1007",
      Phone: "+(179)-982-0570",
    },
  ],
};

export const parsedOnlyData = { root: [{ c: "4" }, { c: "5" }] };
