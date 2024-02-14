const generateRandomColor = () => {
  return Math.floor(Math.random() * 256);
};
document.querySelector("ol").addEventListener("click", (e) => {
  e.target.style.color = `rgb(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`;
});
