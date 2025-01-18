function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function snakes(score) {
  const snakes = [28, 37, 48, 75, 94, 96];
  const movedTo = [10, 3, 16, 32, 71, 42];
  return snakes.includes(score) ? movedTo[snakes.indexOf(score)] : score;
}

function ladders(score) {
  const ladders = [4, 12, 14, 22, 41, 54];
  const movedTo = [56, 50, 55, 58, 79, 88];
  return ladders.includes(score) ? movedTo[ladders.indexOf(score)] : score;
}

function getNumber(dice) {
  const diceValues = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣"];
  return diceValues[dice];
}

function displayLadderFoundMessage(playerName, playerScore) {
  console.log(playerName + " YoU F0uND A LaDDeR YaHHoO.. 🪜\n");
  console.log(
    "LaDDeR HeLPeD " + playerName + " To JuMp To: " + playerScore + "\n"
  );
}

function printCurrentResult(
  playerOne,
  playerOneScore,
  playerTwo,
  playerTwoScore
) {
  let result = "--------->  " + playerOne + " PoSItIon Is At ";
  result += playerOneScore;
  result += " | " + playerTwo + " PoSItIon Is At " + playerTwoScore;

  console.log(result);
  displaySeparater();
}

function displaySeparater() {
  console.log("\n--------------------------------------------------------");
}

function printEndResult(winner, looser) {
  let result = "\n    " + winner + "  WoN ThE GaME 🥳 \n";
  result += "\n    " + looser + " LOsE 🥲\n";

  return result + "\n👉   THanKs FoR PlaYIng 🤗   👈";
}

function displaySnakeFoundMessage(playerName, playerScore) {
  console.log(playerName + " YoU ARe BiTTeN By A SNaKe 🐍\n");
  console.log("SNakE sent " + playerName + " BacK To : " + playerScore + "\n");
}

function runGame(playerOne, playerTwo, playerOneScore, playerTwoScore) {
  if (playerOneScore === 100 || playerTwoScore === 100) {
    return playerOneScore === 100
      ? printEndResult(playerOne, playerTwo)
      : printEndResult(playerTwo, playerOne);
  }

  playerOneScore = updatePlayerScore(+playerOneScore, playerOne);
  printCurrentResult(playerOne, playerOneScore, playerTwo, playerTwoScore);
  playerTwoScore = updatePlayerScore(+playerTwoScore, playerTwo);
  printCurrentResult(playerOne, playerOneScore, playerTwo, playerTwoScore);

  return runGame(playerOne, playerTwo, +playerOneScore, +playerTwoScore);
}

function updatePlayerScore(playerScore, playerName) {
  prompt(playerName + " click EnTeR to roll dice 🎲 ", "");
  const score = isValidScore(+rollDice(), +playerScore);

  if (isNaN(score)) {
    return isScoreExceeding(+playerScore);
  }

  return setPlayerScore(+playerScore, score, playerName);
}

function isValidScore(dice, playerScore) {
  return playerScore + dice <= 100 ? dice : NaN;
}

function isScoreExceeding(playerScore) {
  const neddedScore = 100 - playerScore;

  console.log("SCorE Is EXcEEDinG, RoLL DiCE To " + neddedScore + " To WiN\n");
  return +playerScore;
}

function setPlayerScore(playerScore, diceScore, playerName) {
  playerScore += diceScore;
  playerScore = isSnakeEncountered(playerScore, playerName);
  playerScore = isLadderEncountered(playerScore, playerName);

  console.log(
    playerName + " RoLLeD DiCE 🎲 To : " + getNumber(diceScore) + "\n"
  );

  return playerScore;
}

function isSnakeEncountered(playerScore, playerName) {
  const position = playerScore;
  playerScore = snakes(playerScore, playerName);

  return position !== playerScore
    ? displaySnakeFoundMessage(playerName, playerScore)
    : playerScore;
}

function isLadderEncountered(playerScore, playerName) {
  const position = playerScore;
  playerScore = ladders(playerScore, playerName);

  return position !== playerScore
    ? displayLadderFoundMessage(playerName, playerScore)
    : playerScore;
}

function play() {
  const playerOneName = prompt("enter playerOne name : ");
  const playerTwoName = prompt("enter playerTwo name : ");
  let playerOneScore = 0;
  let playerTwoScore = 0;

  console.log("----------ENjoY PlAYinG SNakE 🐍  &  LaDDeRS 🪜----------");

  return runGame(
    playerOneName,
    playerTwoName,
    +playerOneScore,
    +playerTwoScore
  );
}

console.log(play());
