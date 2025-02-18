/**
 * Pock Scaper Rissors
*/

let playerScore = 0;
let computerScore = 0;

const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

const playerAvatar = document.querySelector("#playerAvatar");
const playerChoiceBox = document.querySelector("#playerChoice");
const computerAvatar = document.querySelector("#computerAvatar");
const computerChoiceBox = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");

const modalContainer = document.querySelector(".modalContainer");
const modalHeader = document.querySelector("#modalHeader");
const restartButton = document.querySelector("#restartButton");

const btnSection  = document.querySelector(".btnSection");

// The godfather of all events btw.
btnSection.addEventListener("click", (e) => {
  initializeRound();
  playRound(e);
  updateScreen();
});

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

function initializeRound() {
  resultText.classList = [];
  playerAvatar.classList.remove("bounce")
  playerAvatar.offsetHeight;
  computerAvatar.classList.remove("bounce")
  computerAvatar.offsetHeight;
}


function playRound(e) {
  const player = playerShoot(e);
  if (player == false) { return };
  const comp = computerShoot()

  if (comp == player) {
    resultText.textContent = "Tie!";
  
  } else if (determineWinner(player, comp)) {
    resultText.classList.add("victory");
    resultText.textContent = capitalize(`${player} wins against ${comp}!`);
    playerAvatar.classList.add("bounce")
    playerScore++;
  
  } else if (!determineWinner(player, comp)) {
    resultText.classList.add("loss");
    resultText.textContent = capitalize(`${player} loses to ${comp}.`);
    computerAvatar.classList.add("bounce")
    computerScore++;
  } else {
    console.log("Something really bad happened.");
  };
  
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

  resultText.textContent = 'Rock, paper, scissors, lizard, spock!';
  resultText.classList = [];
  playerAvatar.classList.remove("bounce")
  computerAvatar.classList.remove("bounce")
  
  playerChoiceBox.textContent = '';
  computerChoiceBox.textContent = '';
  playerScore = 0;
  computerScore = 0;
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
};


function popUp(message) {
  modalHeader.textContent = message;
  modalContainer.style.display = "flex";

  restartButton.addEventListener("click", () => restartGame());
};


function capitalize(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1));
};
