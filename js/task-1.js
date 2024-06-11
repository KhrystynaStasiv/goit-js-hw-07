const liElem = document.querySelectorAll(`li.item`);
console.log(`Number of categories : ${liElem.length}`);

const elemTittles = document.querySelectorAll(`h2`);
elemTittles.forEach(function (elemTittle) {
  const tittle = elemTittle.textContent;
  console.log(`Category : ${tittle}`);
  const listCategories =
    elemTittle.nextElementSibling.querySelectorAll(`li`).length;
  console.log(`Elements : ${listCategories}`);
});
