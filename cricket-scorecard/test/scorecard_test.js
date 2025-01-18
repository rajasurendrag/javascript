import {
  allDeliveries,
  isDeliveryLegal,
  recordExtras,
  wasItBoundary,
  mergeWithAdd,
  recordBatterStats,
  recordBowlerStats,
  isDismissedBy,
  toOvers,
} from "../src/scorecard.js";
import { generateScoreCard } from "../src/scorecard.js";
import { assert, assertEquals, assertFalse } from "jsr:@std/assert";

Deno.test("generateScoreCard: should generate scorecard", () => {
  const sampleData = undefined;
  const expectedOutput = ``;
  assertEquals(generateScoreCard(sampleData), expectedOutput);
});

Deno.test(
  "isDeliveryLegal: should be true if no extras in the delivery",
  () => {
    const sampleData = undefined;
    return assert(isDeliveryLegal(sampleData));
  }
);

Deno.test(
  "isDeliveryLegal:should be true if there are extras of byes | legbyes",
  () => {
    const sampleData = { byes: 1 };
    assert(isDeliveryLegal(sampleData));
  }
);

Deno.test(
  "isDeliveryLegal: should be false if there are extras of noballs | wides",
  () => {
    const sampleData1 = { wides: 1 };
    assertFalse(isDeliveryLegal(sampleData1));

    const sampleData2 = { noballs: 1 };
    assertFalse(isDeliveryLegal(sampleData2));
  }
);

Deno.test(
  "recordExtras: Should return the updated extras object by adding the appropriate extras",
  () => {
    const sampleData = [
      { noballs: 0, wides: 0, legbyes: 0, byes: 0 },
      { byes: 1 },
    ];
    assertEquals(recordExtras(...sampleData), {
      noballs: 0,
      wides: 0,
      legbyes: 0,
      byes: 1,
    });
  }
);

Deno.test(
  "recordExtras: should return updated obj of extras with extras of current delivery",
  () => {
    const sampleData = [
      { noballs: 0, wides: 0, legbyes: 0, byes: 0 },
      { wides: 1 },
    ];
    assertEquals(recordExtras(...sampleData), {
      noballs: 0,
      wides: 1,
      legbyes: 0,
      byes: 0,
    });
  }
);

Deno.test("allDeliviries: Should return all deliveries from overs", () => {
  const sampleData = [
    {
      deliveries: [
        {
          batter: "hitman",
          extras: {
            legbyes: 1,
          },
          non_striker: "BB McCullum",
          runs: {
            batter: 0,
            extras: 1,
            total: 1,
          },
        },
      ],
    },
  ];
  const expectedOutput = [
    {
      batter: "hitman",
      extras: {
        legbyes: 1,
      },
      non_striker: "BB McCullum",
      runs: {
        batter: 0,
        extras: 1,
        total: 1,
      },
    },
  ];
  assertEquals(allDeliveries(sampleData), expectedOutput);
});

Deno.test("allDeliveries: should give all deliveries of overs", () => {
  const sampleData = [
    {
      deliveries: [
        {
          batter: "hitman",
          extras: {
            legbyes: 1,
          },
          non_striker: "BB McCullum",
          runs: {
            batter: 0,
            extras: 1,
            total: 1,
          },
        },
        {
          batter: "BB McCullum",
          bowler: "P Kumar",
          non_striker: "SC Ganguly",
          runs: {
            batter: 0,
            extras: 0,
            total: 0,
          },
        },
      ],
    },
  ];
  const expectedOutput = [
    {
      batter: "hitman",
      extras: {
        legbyes: 1,
      },
      non_striker: "BB McCullum",
      runs: {
        batter: 0,
        extras: 1,
        total: 1,
      },
    },
    {
      batter: "BB McCullum",
      bowler: "P Kumar",
      non_striker: "SC Ganguly",
      runs: {
        batter: 0,
        extras: 0,
        total: 0,
      },
    },
  ];
  assertEquals(allDeliveries(sampleData), expectedOutput);
});

Deno.test("wasItABoundry: should be true if delivery is a boundry", () => {
  const sampleData1 = { runs: { batter: 4 }, non_boundry: false };
  const sampleData2 = { runs: { batter: 6 }, non_boundry: false };

  assert(wasItBoundary(sampleData1, 4));
  assert(wasItBoundary(sampleData2, 6));
});

Deno.test("wasItABoundry: should be false if delivery is not a boundry", () => {
  const sampleData1 = { runs: { batter: 4 }, non_boundry: true };
  assertFalse(wasItBoundary(sampleData1, 4));

  const sampleData2 = { runs: { batter: 6 }, non_boundry: true };
  assertFalse(wasItBoundary(sampleData2, 6));
});

// Deno.test(
//   "wicketAssistFielder: should give the fielder name of wicket delivery",
//   () => {
//     const sampleData = {
//       wickets: [
//         {
//           kind: "caught",
//           player_out: "SC Ganguly",
//           fielders: [
//             {
//               name: "JH Kallis",
//             },
//           ],
//         },
//       ],
//     };
//     assertEquals(wicketAssistFielder(sampleData), "JH Kallis");
//   }
// );

// Deno.test(
//   "dismissalInfo: should give dismissal info as a string with fielders and bowler's name",
//   () => {
//     assertEquals(dismissalInfo("starc", "b", "c", "marsh"), "c marsh b starc");
//   }
// );

// Deno.test(
//   "dismissalInfo: should give dismissal info as a string with only bowler's name",
//   () => {
//     assertEquals(dismissalInfo("", "", "b", "starc"), "b starc");
//   }
// );

// Deno.test(
//   "bowled: should give dismissal message based on wicket kind bowled",
//   () => {
//     const sampleData = {
//       bowler: "LR Shukla",
//       wickets: [
//         {
//           kind: "bowled",
//           player_out: "SB Joshi",
//         },
//       ],
//     };
//     assertEquals(bowled(sampleData), "b LR Shukla");
//   }
// );

// Deno.test(
//   "caught: should give dismissal message based on wicket kind caught",
//   () => {
//     const sampleData = {
//       bowler: "pulla rao",
//       wickets: [
//         {
//           kind: "bowled",
//           player_out: "Rama Rao",
//           fielders: [
//             {
//               name: "sai",
//             },
//           ],
//         },
//       ],
//     };
//     assertEquals(caught(sampleData), "c sai b pulla rao");
//   }
// );

// Deno.test(
//   "stump: should give dismissal message based on wicket kind stump",
//   () => {
//     const sampleData = {
//       bowler: "pulla rao",
//       wickets: [
//         {
//           kind: "stumped",
//           player_out: "Rama Rao",
//           fielders: [
//             {
//               name: "sai",
//             },
//           ],
//         },
//       ],
//     };
//     assertEquals(stumped(sampleData), "st sai b pulla rao");
//   }
// );

// Deno.test("RunOut: should give run out followed by bolwer name", () => {
//   const sampleData = {
//     wickets: [{ kind: "run out", fielders: [{ name: "ramesh" }] }],
//   };
//   assertEquals(runOut(sampleData), "run out ramesh");
// });

// Deno.test("lbw: should give dismissal message based on wicket kind lbw", () => {
//   const sampleData = {
//     bowler: "pulla rao",
//     wickets: [
//       {
//         kind: "lbw",
//         player_out: "Rama Rao",
//         fielders: [
//           {
//             name: "sai",
//           },
//         ],
//       },
//     ],
//   };
//   assertEquals(lbw(sampleData), "lbw pulla rao");
// });

Deno.test("merge: should add data of same keys", () => {
  const sampleData = [{ fours: 1 }, { fours: 1 }, (a, b) => a + b];
  const expectedOutput = { fours: 2 };
  assertEquals(mergeWithAdd(...sampleData), expectedOutput);
});

Deno.test("merge: should returns concated object if no keys are same", () => {
  const sampleData = [{ fours: 1, sixes: 2 }, { fours: 1 }, (a, b) => a + b];
  const expectedOutput = { fours: 2, sixes: 2 };
  assertEquals(mergeWithAdd(...sampleData), expectedOutput);
});

Deno.test("merge: should add data of same keys", () => {
  const sampleData = [{ fours: 1, sixes: 2 }, { fours: 1 }, (a, b) => a + b];
  const expectedOutput = { fours: 2, sixes: 2 };
  assertEquals(mergeWithAdd(...sampleData), expectedOutput);
});

// Deno.test(
//   "wicketAssistFielder: should return fielder involved in taking wicket",
//   () => {
//     const sampleData = {
//       wickets: [{ type: "catch", fielders: [{ name: "sai" }] }],
//     };

//     assertEquals(wicketAssistFielder(sampleData), "sai");
//   }
// );

// Deno.test(
//   "wicketAssistFielder: should return empty if no fielder involved wicket",
//   () => {
//     const sampleData = {
//       wickets: [{ type: "catch" }],
//     };

//     assertEquals(wicketAssistFielder(sampleData), "");
//   }
// );

Deno.test(
  "recordBatterStats: should return new batter info without name delivery",
  () => {
    const sampleData = [
      undefined,
      { batter: "lokesh", runs: { batter: 3, extras: 0, total: 3 } },
    ];

    const expectedOutput = {
      runs: 3,
      balls: 1,
      fours: 0,
      sixes: 0,
      dismissal: "not out",
    };
    assertEquals(recordBatterStats(...sampleData), expectedOutput);
  }
);

Deno.test(
  "recordBatterStats: should return modified batter info with data of delivery",
  () => {
    const sampleData = [
      { runs: 4, balls: 2, fours: 0, sixes: 0, dismissal: "not out" },
      { batter: "lokesh", runs: { batter: 3, extras: 0, total: 3 } },
    ];

    const expectedOutput = {
      runs: 7,
      balls: 3,
      fours: 0,
      sixes: 0,
      dismissal: "not out",
    };
    assertEquals(recordBatterStats(...sampleData), expectedOutput);
  }
);

Deno.test(
  "recordBowlerStats: should return new stats of bowler on delivery if bolwer is not bowled upto then",
  () => {
    const sampleData = [
      undefined,
      { bolwer: "suresh", runs: { batter: 3, extras: 0, total: 3 } },
    ];
    const expectedOutput = { balls: 1, R: 3, W: 0, O: 0 };
    assertEquals(recordBowlerStats(...sampleData), expectedOutput);
  }
);

Deno.test(
  "recordBowlerStats: should return updated stats of bowler on delivery",
  () => {
    const sampleData = [
      { balls: 1, R: 1, W: 0, O: 0 },
      { bolwer: "naresh", runs: { batter: 3, extras: 0, total: 3 } },
    ];
    const expectedOutput = { balls: 2, R: 4, W: 0, O: 0 };
    assertEquals(recordBowlerStats(...sampleData), expectedOutput);
  }
);

Deno.test(
  "recordBowlerStats: should increment wickets by one if the batter out except ny runout",
  () => {
    const sampleData = [
      { balls: 1, R: 1, W: 0, O: 0 },
      {
        bolwer: "mahesh",
        wickets: [{ kind: "caught" }],
        runs: { batter: 0, extras: 0, total: 0 },
      },
    ];
    const expectedOutput = { balls: 2, R: 1, W: 1, O: 0 };
    assertEquals(recordBowlerStats(...sampleData), expectedOutput);
  }
);

Deno.test(
  "recordBowlerStats: should not increment wickets if batter is dimissed by runout",
  () => {
    const sampleData = [
      { balls: 1, R: 1, W: 0, O: 0 },
      {
        bolwer: "starc",
        wickets: [{ kind: "run out" }],
        runs: { batter: 0, extras: 0, total: 0 },
      },
    ];
    const expectedOutput = { balls: 2, R: 1, W: 0, O: 0 };
    assertEquals(recordBowlerStats(...sampleData), expectedOutput);
  }
);

Deno.test(
  "isBatterDismissedBy: should be true if kind of out in delivery and outType are same",
  () => {
    const sampleData = [
      "run out",
      {
        bolwer: "starc",
        wickets: [{ kind: "run out" }],
        runs: { batter: 0, extras: 0, total: 0 },
      },
    ];

    assert(isDismissedBy(...sampleData));
  }
);

Deno.test(
  "isBatterDismissedBy: should be false if kind of out and outType are not the same",
  () => {
    const sampleData = [
      "run out",
      {
        bolwer: "starc",
        wickets: [{ kind: "caught" }],
        runs: { batter: 0, extras: 0, total: 0 },
      },
    ];

    assertFalse(isDismissedBy(...sampleData));
  }
);

Deno.test(
  "isBatterDismissedBy: should be true if no wickets in delivery",
  () => {
    const sampleData = ["run out", { bolwer: "starc", runs: { batter: 0 } }];
    assert(isDismissedBy(...sampleData));
  }
);

Deno.test("toOvers: should give incomplete over if it is not", () => {
  assertEquals(toOvers(1), "0.1");
});

Deno.test("toOvers: should give overs from balls", () => {
  assertEquals(toOvers(6), "1.0");
});
