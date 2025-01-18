import { ballByBall } from "../data/match_2.js";
import {
  batterInfo,
  bowlerInfo,
  getInitialScorecard,
} from "./scorecard_structure.js";

export const mergeWithAdd = (object1, object2) => {
  const result = { ...object1 };
  for (const [key, value] of Object.entries(object2)) {
    result[key] = result[key] ? result[key] + value : value;
  }
  return result;
};

export const isDeliveryLegal = (extras) => {
  if (!extras) return true;
  const exclusives = ["byes", "legbyes"];
  const [extrasType] = Object.keys(extras);

  return exclusives.includes(extrasType);
};

export const recordExtras = (allExtras, deliveryExtras) =>
  mergeWithAdd(allExtras, deliveryExtras || {});

export const wasItBoundary = (ball, runs) =>
  ball.runs.batter === runs && !ball.non_boundry;

const getDismissaldata = (delivery) => {
  const { bowler } = delivery;
  const [{ kind, fielders }] = delivery.wickets;

  return { kind, bowler, fielders: fielders || [] };
};

export const recordDismissal = (delivery, scoreSummary, batters) => {
  if (!("wickets" in delivery)) return batters;
  const [{ player_out }] = delivery.wickets;

  scoreSummary.wickets += 1;
  batters[player_out].dismissal = getDismissaldata(delivery);
  return { ...batters };
};

export const isDismissedBy = (outType, delivery) => {
  if (!("wickets" in delivery)) return true;
  const [{ kind }] = delivery.wickets;

  return kind === outType;
};

const batterStats = (delivery) => ({
  runs: delivery.runs.batter,
  balls: isDeliveryLegal(delivery.extras) ? 1 : 0,
  fours: wasItBoundary(delivery, 4) ? 1 : 0,
  sixes: wasItBoundary(delivery, 6) ? 1 : 0,
});

export const recordBatterStats = (batter = batterInfo(), delivery) => {
  return mergeWithAdd(batter, batterStats(delivery));
};

const bowlerStats = (delivery) => ({
  balls: isDeliveryLegal(delivery.extras) ? 1 : 0,
  R: delivery.runs.batter,
  W: !isDismissedBy("run out", delivery) ? 1 : 0,
});

export const recordBowlerStats = (bowler = bowlerInfo(), delivery) => {
  return mergeWithAdd(bowlerStats(delivery), bowler);
};

export const toOvers = (balls) =>
  (Math.floor(balls / 6) + (balls % 6) / 10).toFixed(1);

export const replaceBallsWithOvers = (bowlers) => {
  for (const bowler of Object.keys(bowlers)) {
    bowlers[bowler].O = toOvers(bowlers[bowler].balls);
  }

  return { ...bowlers };
};

export const recordBallStats = (scorecard, delivery) => {
  const { extras, batters, bowlers, summary } = scorecard;
  const [batter, bowler] = [batters[delivery.batter], bowlers[delivery.bowler]];

  return {
    batter: { [delivery.batter]: recordBatterStats(batter, delivery, summary) },
    bowler: { [delivery.bowler]: recordBowlerStats(bowler, delivery) },
    extras: recordExtras(extras, delivery.extras),
  };
};

export const allDeliveries = (allOvers) => {
  return allOvers.flatMap(({ deliveries }) => deliveries);
};

export const summarizeDeliveries = (scorecard, delivery) => {
  const { batter, bowler, extras } = recordBallStats(scorecard, delivery);
  scorecard.batters = { ...scorecard.batters, ...batter };

  const { summary, batters } = scorecard;
  const updatedDismissal = recordDismissal(delivery, summary, batters);
  scorecard.summary.total += delivery.runs.total;

  return {
    ...scorecard,
    bowlers: { ...scorecard.bowlers, ...bowler },
    batters: { ...scorecard.batters, ...updatedDismissal },
    extras,
  };
};

export const updateScorecard = (innings, scorecard) => {
  if (innings.length === 0) return "";
  const deliveriesLog = allDeliveries(innings.overs);
  const finalScoreCard = deliveriesLog.reduce(summarizeDeliveries, scorecard);

  finalScoreCard.summary.team = innings.team;
  finalScoreCard.bowlers = replaceBallsWithOvers(finalScoreCard.bowlers);
  return finalScoreCard;
};

export const generateScoreCard = (ballByBall) => {
  if (!ballByBall) return "";
  const [battingInning, chasingInning] = ballByBall.innings;
  const firstInnings = updateScorecard(battingInning, getInitialScorecard());
  const secondInnings = updateScorecard(chasingInning, getInitialScorecard());

  return [firstInnings, secondInnings];
};

console.log(generateScoreCard(ballByBall));
