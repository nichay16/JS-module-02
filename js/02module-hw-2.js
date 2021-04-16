// 1.Есть массив logins с логинами пользователей. Напиши 
//скрипт добавления логина в массив logins.Добавляемый логин 
//должен:
//проходить проверку на длину от 4 до 16-ти символов 
//включительно быть уникален, то есть отсутствовать в массиве 
//logins
//Разбей задачу на подзадачи с помощью функций.
//Проверку на отсутствие аргументов или на правильный тип 
//аргументов делать не нужно.
//Напиши функцию isLoginValid(login), в которой проверь 
//количество символов параметра login и верни true или false 
//в зависимости от того, попадает ли длина параметра в заданный 
//диапазон от 4 - х до 16 - ти символов включительно.
//Напиши функцию isLoginUnique(allLogins, login), которая 
//принимает список всех логинов и добавляемый логин как 
//параметры и проверяет наличие login в массиве allLogins, 
//возвращая true если такого логина еще нет и false если логин 
//уже используется.
//Напиши функцию addLogin(allLogins, login) которая:
//Принимает новый логин и массив всех логинов как параметры
//Проверяет валидность логина используя вспомогательную функцию 
//isLoginValid
//Если логин не валиден, прекратить исполнение функции addLogin 
//и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 
//символов'
//Если логин валиден, функция addLogin проверяет уникальность 
//логина с помощью функции isLoginUnique
//Если isLoginUnique вернет false, тогда addLogin не добавляет 
//логин в массив и возвращает строку 'Такой логин уже 
//используется!'
//Если isLoginUnique вернет true, addLogin добавляет новый 
//логин в logins и возвращает строку 'Логин успешно добавлен!'

function isLoginValid (login, min = 4, max = 16) {
  return login.length >= min && login.length <= max;
}

function isLoginUnique (allLogins, login) {
  return allLogins.includes(login);
}

function addLogin(allLogins, login) {
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message = ERROR;
  for (const log of allLogins) {
    // console.log(login);
    const valid = isLoginValid(log);
    const unique = isLoginUnique(log)
    if (valid) {
      if (unique) {
        message = SUCCESS;
      }
        message = REFUSAL;  
    }
    return message;
  }
// 
//   if (!isLoginValid(login)) {
//     message = ERROR;
//   } else if (!isLoginUnique(login)) {
//     allLogins.push(login);
//     message = REFUSAL;
//   } else {
//     message = SUCCESS;
//   }
  return message;
}


const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax')); 
// 'Логин успешно добавлен!

// console.log(addLogin(logins, 'robotGoogles')); 
// 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast')); 
// 'Ошибка! Логин должен быть от 4 до 16 символов' 

const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
};

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

// const callback1 = function (value) {
//     return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//     return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

