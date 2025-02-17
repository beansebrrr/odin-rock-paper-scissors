/**
 * Pock Scaper Rissors
*/

let playerScore = 0;
let computerScore = 0;

const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

const playerChoiceBox = document.querySelector("#playerChoice");
const computerChoiceBox = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");

const modalContainer = document.querySelector(".modalContainer");
const modalHeader = document.querySelector("#modalHeader");
const restartButton = document.querySelector("#restartButton");

const btnSection  = document.querySelector(".btnSection");

// The godfather of all events btw.
btnSection.addEventListener("click", (e) => playRound(e));

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
const weapons = Object.keys(conditions);
const emojis = {
  "rock" : "✊",
  "paper" : "🖐️",
  "scissors" : "✌️",
  "lizard" : "🫳",
  "spock" : "🖖",
};


function playRound(e) {
  const player = playerShoot(e);
  if (player == false) { return };
  const comp = computerShoot();

  resultText.classList = [];

  if (comp == player) {
    resultText.textContent = "Tie!";
  } else if (determineWinner(player, comp)) {
    resultText.classList.add("victory");
    resultText.textContent = capitalize(`${player} wins against ${comp}!`);
    playerScore++;
  } else if (!determineWinner(player, comp)) {
    resultText.classList.add("loss");
    resultText.textContent = capitalize(`${player} loses to ${comp}.`);
    computerScore++;
  } else {
    console.log("Something really bad happened.");
  };
  updateScreen();
};

function updateScreen() {
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  if (playerScore > 4) { popUp("You won!") }
  else if (computerScore > 4) { popUp("You lost!") };
};


function computerShoot() {
  const i = Math.floor(Math.random() * weapons.length);
  const choice = weapons[i];
  computerChoiceBox.textContent = emojis[choice];
  return choice;
};

function playerShoot(e) {
  let choice = e.target.id;
  
  function isAWeapon(input) { return (weapons.indexOf(input) > -1) };
  
  if (isAWeapon(choice)) {
    playerChoiceBox.textContent = emojis[choice];
    return (choice);
  };
  return false;
};

function determineWinner(main, opponent) {
  return conditions[main][opponent];
};

function restartGame() {
  modalContainer.style.display = "none";

  resultText.textContent = 'Rock, paper, scissors, lizard, Spock!';
  resultText.classList = [];
  
  playerChoiceBox.textContent = '';
  computerChoiceBox.textContent = '';
  playerScore = 0;
  computerScore = 0;
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
} 

function popUp(message) {
  modalHeader.textContent = message;
  modalContainer.style.display = "flex";

  restartButton.addEventListener("click", () => restartGame());
};

function capitalize(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1));
};
