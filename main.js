import childFunction from "./child.js"
import clearPage from "./clearPage.js";

const body = document.body;

const main = document.createElement('div'); 
main.classList.add('main');
// body.append(main); // заюзаю потом, когда решу делать main общим

const childButton = document.createElement('div');
childButton.classList.add('blockButton');
childButton.textContent = "Вытащить child";

const startScreen = () => {
  body.append(main);
  main.append(childButton);
  childButton.addEventListener('click', () => {
    childFunction();
  })
}

startScreen();