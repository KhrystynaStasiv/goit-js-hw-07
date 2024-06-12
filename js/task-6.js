function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const inputElem = controls.querySelector("input");
const btnCreate = controls.querySelector("[data-create]");
const btnDestroy = controls.querySelector("[data-destroy]");
const boxCreate = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = Number(inputElem.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElem.value = "";
  }
});
create;
function createBoxes(amount) {
  const arrBoxCreate = [];
  boxCreate.innerHTML = "";
  for (let i = 1; i <= amount; i++) {
    const divElem = document.createElement("div");
    divElem.classList.add("div-color");
    divElem.style.width = `${30 + i * 10}px`;
    divElem.style.height = `${30 + i * 10}px`;
    divElem.style.backgroundColor = getRandomHexColor();
    arrBoxCreate.push(divElem);
  }
  boxCreate.append(...arrBoxCreate);
}

function destroyBoxes() {
  boxCreate.innerHTML = "";
}

btnDestroy.addEventListener("click", destroyBoxes);
