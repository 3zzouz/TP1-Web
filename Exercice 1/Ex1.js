let min, max, tries;
// Function to set the game parameters based on difficulty
const setParams = (mn, mx, tr) => {
  min = mn;
  max = mx;
  tries = tr;
};
// Function to handle the guessing game
function game(difficulty) {
  // Set game parameters based on difficulty level
  switch (difficulty) {
    case "easy":
      setParams(0, 15, 10);
      break;
    case "moderate":
      setParams(0, 30, 5);
      break;
    case "hard":
      setParams(0, 50, 3);
      break;
    default:
      console.error("Invalid difficulty level");
      return;
  }
  
  const target = Math.floor(Math.random() * (max - min));
  for (let i = 0; i < tries; i++) {
    // Prompt the user for a guess
    const guess = parseInt(
      prompt("Guess the number. It's between " + min + " and " + max)
    );
    if (guess === target) {
      alert("Congrats! You've won");
      return;
    } else {
      alert("Wrong answer. Remaining tries: " + (tries - (i + 1)));
    }
  }
  // Alert the user that no more tries are remaining and reveal the correct answer
  alert("Sorry, no more tries remaining. The correct answer was " + target);
}

const diff = document.querySelector("#difflist");
const menu = document.querySelector(".accordion");
diff.addEventListener("click", (event) => {
  if (["easy", "mod", "hard"].includes(event.target.id)) {
    //Starts the game after the user chooses the difficulty
    const difficulty = event.target.getAttribute("value");
    game(difficulty);
  }
});
