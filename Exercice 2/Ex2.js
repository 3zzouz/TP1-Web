const par=document.querySelector("#paragraph");
const col=document.querySelector("#col");
const color=col.value;
const size=document.querySelector("#size");
const s=size.value;
const font=document.querySelector("#font");
const selected=font.value;

function changeText() {
    const color = col.value;
    const fontSize = size.value;
    const selectedFont = font.value;

    par.style.color = color;
    par.style.fontSize = `${fontSize}px`;
    par.style.fontFamily = selectedFont;
}

col.addEventListener("input",changeText);
size.addEventListener("input",changeText);
font.addEventListener("change",changeText);