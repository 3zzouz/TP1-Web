const setParams = (mn, mx, tr) => {
  min = mn;
  max = mx;
  tries = tr;
};
let min, max, tries;
function game(difficulty) {
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
  alert("Sorry, no more tries remaining. The correct answer was " + target);
}

const diff = document.querySelector("#difflist");
const menu = document.querySelector(".accordion");
diff.addEventListener("click", (event) => {
  if (["easy", "mod", "hard"].includes(event.target.id)) {
    const difficulty = event.target.getAttribute("value");
    game(difficulty);
  }
});
