const batHeaders = "batter,dismissal,runs,balls,4s,6s";
const bowlHeaders = "bowler,Balls,R,W,O";
export const joinWith = (string1, string2, char) => string1 + char + string2;

export const CSKeys = (obj) => Object.keys(obj).join(", ");
const CSV = (obj) => Object.values(obj).join(", ");

const formatKeyValues = (summary) =>
  joinWith(Object.keys(summary), Object.values(summary), "\n");

const formatPlayers = (players, header) => {
  const data = Object.keys(players)
    .map((player) => CSV([player, CSV(players[player])]))
    .join("\n");

  return joinWith(header, data, "\n");
};

export const toCSV = (inningScorecard) => {
  const scoreSummary = formatKeyValues(inningScorecard.summary);
  const formatedBatters = formatPlayers(inningScorecard.batters, batHeaders);
  const formatedBowlers = formatPlayers(inningScorecard.bowlers, bowlHeaders);
  const formatExtras = formatKeyValues(inningScorecard.extras);

  return [scoreSummary, formatedBatters, formatExtras, formatedBowlers].join(
    "\n---\n"
  );
};
