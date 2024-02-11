const input = document.querySelector("h1");
const inputRef = document.querySelector("#selection");

const sizeRef = document.querySelector("#font-size");
sizeRef.value = input.style.fontSize.slice(0, -2);
console.log(input.style.fontSize);

inputRef.addEventListener("change", (e) => {
  input.style[e.target.id] =
    e.target.value + (e.target.id === "font-size" ? "px" : "");
});
