export default function statusFunction() {
  const body = document.body;

  const childArea = document.createElement('div');
  childArea.classList.add('child-area')
  body.append(childArea);

  const statusInput = document.createElement('input');
  statusInput.classList.add('input');
  statusInput.placeholder = 'STATUS';
  childArea.append(statusInput);

  const childInput = document.createElement('input');
  childInput.classList.add('input');
  childArea.append(childInput);

  const childButton = document.createElement('div');
  childButton.classList.add('button');
  childArea.append(childButton);
  childButton.textContent = 'ТЫК';

  const childOutputArea = document.createElement('div');
  childOutputArea.classList.add('child-output-area');
  childArea.append(childOutputArea);

  const childOutput = document.createElement('div');
  childOutput.classList.add('output');
  childOutputArea.append(childOutput);

  const buttonCopy = document.createElement('div');
  buttonCopy.classList.add('button-copy');
  buttonCopy.textContent = 'Copy';

  const array = [];

  const func = (jsonfile) => {
    const obj = jsonfile.cisInfo
    const status = obj.status;
    const owner = obj.ownerName;
    if (owner === 'ООО "ПЕПСИКО ХОЛДИНГС"' && status === statusInput.value.toUpperCase()) {
      array.push(obj.cis)
    }
  }

  childButton.addEventListener('click', () => {
    const value = JSON.parse(childInput.value)
    const file = value;
    console.log(file)
    for (j = 0; j < file.length; j += 1) {
      console.log(file.length)
      console.log(j)
      func(file[j])
    }

    const str = array.join('\n')
    childOutput.innerHTML = str.replace(/\n/g, "<br>");
    childOutput.textContent = str;

    childOutputArea.append(buttonCopy);

  })

  buttonCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(childOutput.innerText)
  })
}