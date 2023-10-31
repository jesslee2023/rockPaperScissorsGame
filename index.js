function playGame() {
    const userChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Invalid input. Please enter rock, paper, or scissors.");
        return playGame();
      }

      alert(`Computer's choice: ${computerChoice}`);

    if (userChoice === computerChoice) {
      alert("It's a tie!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      alert("You win!");
    } else {
      alert("You lose!");
    }
    
    const playAgain = confirm("Do you want to play again?");
    if (playAgain) {
      playGame();
    } else {
      alert("Thanks for playing, goodbye!");
    }
  }
  
  alert("Welcome to Rock, Paper, Scissors game!");
  playGame();  