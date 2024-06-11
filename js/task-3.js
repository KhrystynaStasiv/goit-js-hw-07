const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener(`input`, () => {
  const value = inputElem.value.trim();
  if (value === ``) {
    outputElem.textContent = `Anonymous`;
  } else {
    outputElem.textContent = value;
  }
});
