/**
 * Pock Scaper Rissors
*/

const btnSection  = document.querySelector("div.btnSection")
btnSection.addEventListener("click", (e) => playRound(e))

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
const emojis = {
  "rock" : "✊",
  "paper" : "🖐️",
  "scissors" : "✌️",
  "lizard" : "🫳",
  "spock" : "🖖",
}

const weapons = Object.keys(conditions)
let playerScore = 0;
let computerScore = 0;

const playerActionText = document.querySelector(".playerAction")
const playerScoreText = document.querySelector(".playerScore")
const computerActionText = document.querySelector(".computerAction")
const computerScoreText = document.querySelector(".computerScore")

const playerChoiceBox = document.querySelector("#playerChoice")
const computerChoiceBox = document.querySelector("#computerChoice")
const resultText = document.querySelector("#resultText")

const modalContainer = document.querySelector(".modalContainer")
const modalHeader = document.querySelector(".modal>h1");
const restartButton = document.querySelector(".modal>button");

function playRound(e) {
  const player = playerShoot(e)
  const comp = computerShoot()

  resultText.classList = []

  if (comp == player) {
    resultText.textContent = "Tie!"
  } else if (determineWinner(player, comp)) {
    resultText.classList.add("victory");
    resultText.textContent = `${player} wins against ${comp}!`;
    playerScore++;
  } else if (!determineWinner(player, comp)) {
    resultText.classList.add("loss");
    resultText.textContent = `${player} loses to ${comp}.`
    computerScore++;
  } else {
    console.log("Something really bad happened.");
  };
  updateScreen()
};

function updateScreen() {
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  if (playerScore > 4) { popUp("You won!") }
  else if (computerScore > 4) { popUp("You lost!") };
};


function computerShoot() {
  const i = Math.floor(Math.random() * weapons.length);
  const choice = weapons[i]
  console.log(`Computer shoots ${choice}`);
  computerChoiceBox.textContent = emojis[choice]
  return choice;
};

function playerShoot(e) {
  let choice = e.target.id;
  
  function isAWeapon(input) { return (weapons.indexOf(input) > -1) };
  
  if (isAWeapon(choice)) {
    console.log(`Player shoots ${choice}`)
    playerChoiceBox.textContent = emojis[choice]
    return (choice);
  };
};

function determineWinner(main, opponent) {
  return conditions[main][opponent];
};


function restartGame() {
  playerChoiceBox.textContent = ''
  computerChoiceBox.textContent = ''
  resultText.textContent = '';
  modalContainer.style.display = "none"
  playerScore = 0;
  computerScore = 0;
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
} 

function popUp(message) {
  modalHeader.textContent = message;
  modalContainer.style.display = "flex"

  restartButton.addEventListener("click", () => restartGame());
};
