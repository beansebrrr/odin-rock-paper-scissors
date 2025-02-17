/**
 * Pock Scaper Rissors
*/

const btnSection  = document.querySelector("div.btnSection")

btnSection.addEventListener("click", (e) => playerShoot(e))


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

const playerActionText = document.querySelector(".playerAction")
const computerActionText = document.querySelector(".computerAction")
const resultText = document.querySelector("#resultText")

function playRound(player, comp) {
  playerActionText.textContent = `You used ${player}!`
  computerActionText.textContent = `Computer used ${comp}!`
  

  resultText.classList = []
  if (comp == player) {
    resultText.textContent = "Tie!"
  }
  else if (isWinner(player, comp)) {
    resultText.textContent = "You win!"
    resultText.classList.add("victory")
    playerScore++;
  }
  else if (isWinner(comp, player)) {
    resultText.textContent = "You lost!"
    resultText.classList.add("loss")
    computerScore++;
  }
  else {
    console.log("Something really bad happened.");
  };
};


function computerShoot() {
  const i = Math.floor(Math.random() * weapons.length);
  console.log(`Computer shoots ${weapons[i]}`);
  return weapons[i];
};

function playerShoot(e) {
  let choice = e.target.id;
  
  function isAWeapon(input) {
    return (weapons.indexOf(input) > -1);
  };
  if (isAWeapon(choice)) {
    console.log(`Player shoots ${choice}`)
    playRound(choice, computerShoot());
  };
}


function isWinner(main, opponent) {
  return conditions[main][opponent];
};