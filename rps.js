// Basic Rock Paper Scissors Game

// Find instructions here: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

const choices = ['rock', 'paper', 'scissors'];

var computerChoice, 
    playerChoice,
    computerScore = 0,
    playerScore = 0;
    roundsToWin = 0;

roundsToWin = prompt("please enter number of rounds to win");

function getComputerChoice () {
  computerChoice = choices[Math.floor(Math.random() * 3)]
  console.log(`Computer Choice: ${computerChoice};`)
  return computerChoice;
};

function getPlayerChoice () {
  playerChoice = window.prompt("Choose rock, paper, or scissors: ");
  playerChoice = playerChoice.toLowerCase();
  console.log(`pre-conditional player: ${playerChoice};`)
  if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
    playerChoice = window.prompt("Pick again");
    console.log(`post-conditional player: ${playerChoice};`)
    return playerChoice;
  };
  return playerChoice;
};

function playRound () {

  getComputerChoice();
  getPlayerChoice();

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
};

const game = () => {
  while (playerScore < roundsToWin && computerScore < roundsToWin) {
    playRound();
  }
  console.log(`The game has been completed! computer: ${computerScore}; player: ${playerScore};`)
};

game();