export const batterInfo = () => ({
  dismissal: "not out",
  runs: 0,
  balls: 0,
  fours: 0,
  sixes: 0,
});

export const bowlerInfo = () => ({
  O: 0,
  R: 0,
  W: 0,
});

export const getInitialScorecard = () => ({
  summary: {
    team: "",
    total: 0,
    wickets: 0,
  },
  batters: {},
  extras: {
    noballs: 0,
    wides: 0,
    legbyes: 0,
    byes: 0,
  },
  bowlers: {},
});
