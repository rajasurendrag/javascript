import { ballByBall as data1 } from "./data/match_1.js";
import { ballByBall as data2 } from "./data/match_2.js";
import { ballByBall as data3 } from "./data/match_3.js";
import { ballByBall as data4 } from "./data/match_4.js";
import { toCSV } from "./src/format_scorecard.js";
import { generateScoreCard } from "./src/scorecard.js";

const data = [data1, data2, data3, data4];
const input = +Deno.args;

const main = () => {
  const scorecard = generateScoreCard(data[input - 1]);
  if (scorecard.length === 0) return;
  const CSV = scorecard.map((x) => toCSV(x)).join("\n---\n");
  console.log(CSV);
};

main();
