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
  root: [
    { id: expect.any(String), c: "4", kidTablesRefs: ["root/0/a"] },
    { id: expect.any(String), c: "5", kidTablesRefs: [] },
  ],
  "root/0/a": [
    {
      id: expect.any(String),
      "Relative ID": "1007",
      "Patient ID": "34",
      "Is alive?": "true",
      "Frequency of visits": "29",
      kidTablesRefs: ["root/0/a/0/b"],
    },
  ],
  "root/0/a/0/b": [
    {
      id: expect.any(String),
      "Phone ID": "2008",
      "ID of the relative": "1007",
      Phone: "+(179)-982-0570",
      kidTablesRefs: [],
    },
  ],
};

export const parsedOnlyData = {
  root: [
    { id: expect.any(String), c: "4", kidTablesRefs: [] },
    { id: expect.any(String), c: "5", kidTablesRefs: [] },
  ],
};

export const rawMultipleKidsData: TableRow["kids"] = {
  a: {
    records: [
      {
        data: { a: "a" },
        kids: {},
      },
    ],
  },
  b: {
    records: [
      {
        data: { b: "b" },
        kids: {},
      },
    ],
  },
  c: {
    records: [
      {
        data: { c: "c" },
        kids: {},
      },
    ],
  },
};

export const multipleKidsDataRefs = ["root/a", "root/b", "root/c"];
