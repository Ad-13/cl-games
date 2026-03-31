const playerMove = process.argv[2];
const availableMoves = ["rock", "paper", "scissors"];
const computerMove =
  availableMoves[Math.floor(Math.random() * availableMoves.length)];

if (!availableMoves.includes(playerMove)) {
  console.log("Invalid move. Please choose rock, paper, or scissors.");
  process.exit(1);
}

const resultMap = {
  draw: "Draw!",
  win: "You win!",
  lose: "You lose!",
};

const rulesSetMatrix = [
  // scissors, paper, rock
  /* scissors */ [resultMap.draw, resultMap.win, resultMap.lose],
  /* paper */ [resultMap.lose, resultMap.draw, resultMap.win],
  /* rock */ [resultMap.win, resultMap.lose, resultMap.draw],
];

const playerMoveIndex = availableMoves.indexOf(playerMove);
const computerMoveIndex = availableMoves.indexOf(computerMove);

const result = rulesSetMatrix[playerMoveIndex][computerMoveIndex];

console.log(
  `Your move is "${playerMove}". Computer move is "${computerMove}". Result: ${result}`,
);

process.exit(0);
