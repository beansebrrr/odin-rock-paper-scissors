/**
 * Pock Scaper Rissors
*/

const conditions = {
  "rock" : {
    "paper" : false,
    "scissors" : true,
    "lizard" : true,
    "spock" : false,
  },
  "paper" : {
    "rock" : true,
    "scissors" : false,
    "lizard" : false,
    "spock" : true,
  },
  "scissors" : {
    "rock" : false,
    "paper" : true,
    "lizard" : true,
    "spock" : false,
  },
  "lizard" : {
    "rock" : false,
    "paper" : true,
    "scissors" : false,
    "spock" : true,
  },
  "spock" : {
    "rock" : true,
    "paper" : false,
    "scissors" : true,
    "lizard" : false,
  },
};
const weapons = Object.keys(conditions)
let playerScore = 0;
let computerScore = 0;


function playRound(player, comp) {
  if (comp == player) {
    console.log("Tie");
  } else if (isWinner(player, comp)) {
    console.log("Win");
    playerScore++;
  } else if (isWinner(comp, player)) {
    console.log("Lose");
    computerScore++;
  } else {
    console.log("Something really bad happened.");
  };
};

function playGame(rounds=1) {
  for (let i = 0; i < rounds; i++) {
    console.log(`---\nRound ${i+1}\n---`)
    playRound(playerShoot(), computerShoot());
    console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
  };
};

function computerShoot() {
  const i = Math.floor(Math.random() * weapons.length);
  console.log(`Computer shoots ${weapons[i]}`);
  return weapons[i];
};

function playerShoot() {
  let p = '';
  function isAWeapon(input) {
    return (weapons.indexOf(input) > -1);
  };
  while (!isAWeapon(p)) {
    p = prompt("Rock, paper, or scissors?").toLowerCase();
  };
  console.log(`Player shoots ${p}`);
  return p;
};

function isWinner(main, opponent) {
  return conditions[main][opponent];
};

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => playGame(5))