const input = document.querySelector("h1"); // Selects the first <h1> element in the document and assigns it to the 'input' variable
const inputRef = document.querySelector("#selection"); // Selects the element with the id 'selection' and assigns it to the 'inputRef' variable

const sizeRef = document.querySelector("#font-size"); // Selects the element with the id 'font-size' and assigns it to the 'sizeRef' variable
sizeRef.value = input.style.fontSize.slice(0, -2); // Sets the value of 'sizeRef' to the font size of the 'input' element, removing the 'px' unit

console.log(input.style.fontSize); // Outputs the current font size of the 'input' element to the console

inputRef.addEventListener("change", (e) => { // Adds an event listener to the 'inputRef' element, listening for the 'change' event
  input.style[e.target.id] = // Sets the style property of the 'input' element based on the id of the target element that triggered the event
    e.target.value + (e.target.id === "font-size" ? "px" : ""); // Sets the value of the style property, adding the 'px' unit if the target element is the font size input
});