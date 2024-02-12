const button = document.querySelector("#button");
const na = document.querySelector("#name");
const cont = document.querySelector("#content");
const list = document.querySelector("#List");

const createListItem = () => {
  const item = document.createElement("li");
  item.className =
    "list-group-item d-flex justify-content-between align-items-center";
  item.textContent = `${na.value} : ${cont.value}`;

  const del = document.createElement("i");
  del.className = "fa-solid fa-trash-can ms-auto";
  item.appendChild(del);

  del.addEventListener("click", () => {
    list.removeChild(item);
  });

  return item;
};

button.addEventListener("click", () => {
  const listItem = createListItem();
  list.appendChild(listItem);
  na.value = "";
  cont.value = "";
  button.disabled = true;
});

const toggleDisabled = (el, param1, param2) => {
  el.disabled = !param1.value.length || !param2.value.length;
};

document.getElementById("input").addEventListener("keyup", (e) => {
  console.log(e.target.name, e.target.value);
  if (["name", "content"].includes(e.target.name)) {
    toggleDisabled(button, na, cont);
  }
});
