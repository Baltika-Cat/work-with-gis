import childFunction from "./child.js"
import clearPage from "./clearPage.js";
import statusFunction from "./statusCodesAndPepsi.js";

const body = document.body;

const main = document.createElement('div'); 
main.classList.add('main');
// body.append(main); // заюзаю потом, когда решу делать main общим

const childButton = document.createElement('div');
childButton.classList.add('blockButton');
childButton.textContent = "Вытащить child";

const statusButton = document.createElement('div');
statusButton.classList.add('blockButtton');
statusButton.textContent = "Список кодов по статусу";

const startScreen = () => {
  body.append(main);
  main.append(childButton);
  main.append(statusButton);
  childButton.addEventListener('click', () => {
    clearPage();
    childFunction();
  })
  statusButton.addEventListener('click', () => {
    clearPage();
    statusFunction();
  })
}

startScreen();