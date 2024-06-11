function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector(`.change-color`);
const bodyEleme = document.querySelector(`body`);
const spanColor = document.querySelector(`.color`);
btnElem.addEventListener(`click`, (event) => {
  btnElem.setAttribute(`style`, `background-color: ${getRandomHexColor()}`);
  spanColor.textContent = getRandomHexColor();
});
