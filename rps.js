// Basic Rock Paper Scissors Game

// Find instructions here: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

const choices = ['rock', 'paper', 'scissors'];

var computerChoice, 
    playerChoice;

function getComputerChoice() {
  computerChoice = choices[Math.floor(Math.random() * 3)]
  // console.log(`Computer Choice: ${computerChoice};`)
  return computerChoice;
};

function getPlayerChoice() {
  playerChoice = window.prompt("Choose Rock, Paper, or scissors: ");
  playerChoice = playerChoice.toLowerCase();
  // console.log(`pre-conditional player: ${playerChoice};`)
  if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
    playerChoice = window.prompt("Pick again");
    // console.log(`post-conditional player: ${playerChoice};`)
    return playerChoice;
  };
  return playerChoice;
};

getComputerChoice();
getPlayerChoice();
