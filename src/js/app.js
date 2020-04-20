//elements
const rangeInput = document.getElementById('p-length');
const passwordLength = document.getElementById('password-length');
const generateBtn = document.getElementById('generate-btn');
const results = document.getElementById('results');

//checkboxes
const pNumbers = document.getElementById('p-numbers');
const pLowercase = document.getElementById('p-lowercase');
const pUppercase = document.getElementById('p-uppercase');
const pSpecial = document.getElementById('p-special');

// begin arrows
const arrNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const arrLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const arrUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const arrSpecial = ['~', '+', '=', '_', '-', ')', '(', '*', '&', '^', '%', '$', '#', '@', '!'];

//выводим длину пароля на экран
rangeInput.oninput = () => {
  passwordLength.innerHTML = rangeInput.value;
};

//генерируем пароли при загрузке страницы
generatePass();
//генерируем пароли при клике на кнопку
generateBtn.addEventListener('click', generatePass);

function generatePass() {
  let resultArr = [];

  //проверка чекбоксов на checked
  if (pNumbers.checked) {
    resultArr = resultArr.concat(arrNumbers);
  }
  if (pLowercase.checked) {
    resultArr = resultArr.concat(arrLowercase);
  }
  if (pUppercase.checked) {
    resultArr = resultArr.concat(arrUppercase);
  }
  if (pSpecial.checked) {
    resultArr = resultArr.concat(arrSpecial);
  }

  //перемешиваем массив
  shuffleArray(resultArr);

  //обнуляем результат выдачи пароля
  results.innerHTML = '';

  //выводим через цикл 8 вариантов пароля
  for (let k = 0; k < 8; k++) {
    let pass = ''; //будущий пароль
    let passLength = +rangeInput.value; //длина пароля

    for (let i = 0; i < passLength; i++) {
      //цикл количеством повторений равный длине пароля
      pass += resultArr[randomInteger(0, resultArr.length - 1)];
    }

    //выводим готовый пароль на экран
    results.innerHTML += '<li>' + pass + '</li>';
  }

}

//вычисляем рандомное число
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

//перемешивание массива
function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}


