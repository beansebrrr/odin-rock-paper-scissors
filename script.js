/**
 * Pock Scaper Rissors
*/

const btnSection  = document.querySelector("div.btnSection")

btnSection.addEventListener("click", (event) => {
  let playerShoot = event.target.id;
  
  function isAWeapon(input) {
    return (weapons.indexOf(input) > -1);
  };

  if (isAWeapon(playerShoot)) {
    console.log(`Player shoots ${playerShoot}`)
    playRound(playerShoot, computerShoot());
  };
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


function computerShoot() {
  const i = Math.floor(Math.random() * weapons.length);
  console.log(`Computer shoots ${weapons[i]}`);
  return weapons[i];
};


function isWinner(main, opponent) {
  return conditions[main][opponent];
};