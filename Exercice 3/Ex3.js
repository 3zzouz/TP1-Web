// Selecting HTML elements by their IDs
const button = document.querySelector("#button");
const na = document.querySelector("#name");
const cont = document.querySelector("#content");
const list = document.querySelector("#List");

// Function to create a new list item with a name and content
const createListItem = () => {
    // Create a new list item element
  const item = document.createElement("li");
  // Set the class of the list item to apply css styling
  item.className ="list-group-item d-flex justify-content-between align-items-center";
  item.textContent = `${na.value} : ${cont.value}`;

  // Create a delete icon element
  const del = document.createElement("i");
  // Set the class of the delete icon to apply css styling
  del.className = "fa-solid fa-trash-can ms-auto";
  item.appendChild(del);
    // Event listener applied to the delete icon to allow the user to delete the corresponding list item
  del.addEventListener("click", () => {
    list.removeChild(item);
  });

  return item;
};
// Event listener to create a new list item by pressing the button
button.addEventListener("click", () => {
  const listItem = createListItem();
  // Append the new list item to the list
  list.appendChild(listItem);
  //Reset the input values and disable the button
  na.value = "";
  cont.value = "";
  button.disabled = true;
});
// Function to toggle the disabled state of a button based on input values
const toggleDisabled = (el, param1, param2) => {
  el.disabled = !param1.value.trim().length || !param2.value.trim().length;
};
// Keyup event listener to the input element with ID "input"
document.getElementById("input").addEventListener("keyup", (e) => {
  // Check if the keyup event is from the "name" or "content" input
  if (["name", "content"].includes(e.target.name)) {
    // Calling the function to toggle the disabled state of the button based on input values
    toggleDisabled(button, na, cont);
  }
});
