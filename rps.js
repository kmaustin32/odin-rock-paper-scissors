// Basic Rock Paper Scissors Game

// Find instructions here: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

const choices = ['rock', 'paper', 'scissors'];

var computerChoice, 
    playerChoice,
    computerScore = 0,
    playerScore = 0;
    // roundsToWin = 0;

// roundsToWin = prompt("please enter number of rounds to win");

function getComputerChoice () {
  computerChoice = choices[Math.floor(Math.random() * 3)]
  console.log(`Computer Choice: ${computerChoice};`)
  return computerChoice;
};

// function getPlayerChoice () {
//   playerChoice = window.prompt("Choose rock, paper, or scissors: ");
//   playerChoice = playerChoice.toLowerCase();
//   console.log(`pre-conditional player: ${playerChoice};`)
//   if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
//     playerChoice = window.prompt("Pick again");
//     console.log(`post-conditional player: ${playerChoice};`)
//     return playerChoice;
//   };
//   return playerChoice;
// };

function playRound () {

  getComputerChoice();
  // getPlayerChoice();

  if (playerChoice == computerChoice) {
    console.log("It's a tie! No one wins here! Or, um, everyone wins, maybe?");
  } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
    playerScore++;
    console.log("Congratulations! Rock breaks scissors! Player has bested the computer!");
  } else if (playerChoice == 'paper' && computerChoice == 'rock') {
    playerScore++;
    console.log("Congratulations! Paper covers rock! Player has bested the computer!");
  } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
    playerScore++;
    console.log("Congratulations! Scissors cut paper! Player has bested the computer!");
  } else {
    computerScore++;
    console.log("Sorry, you lose! Computer wins this round. We are doomed!")
  };

  plScore.textContent = playerScore;
  comScore.textContent = computerScore;

  console.log(playerScore, computerScore);
};

// const game = () => {
//   while (playerScore < 5 && computerScore < 5) {
//     playRound();
//   }
//   alert(`The game has been completed! computer: ${computerScore}; player: ${playerScore};`)
// };

let plScore = document.querySelector('#pl-score');
let comScore = document.querySelector('#com-score');
let buttons = document.querySelectorAll('.play-btn');

function checkGame () {
  if (playerScore == 5 || computerScore == 5) {
    let winner = ''
    if (playerScore > computerScore) {
      winner  = "Player";
    } else {
      winner = "Computer";
    };

    setTimeout(function(winner) {
      alert(`${winner} has won the game. Thanks for playing.`);
      resetGame();
    }, 500);
  };
};

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  plScore.textContent = 0;
  comScore.textContent = 0;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    playerChoice = e.target.id;
    console.log(playerChoice);

    playRound();
    checkGame();
  });
};
