// 1. Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//   if (age >= 18) {
//     return 'Вы совершеннолетний человек';
//   }

//   return 'Вы не совершеннолетний человек';
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

//2. Функция checkPassword получает пароль пользователя в параметр password, 
//проверяет его на совпадение с паролем администратора в переменной 
//ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
//Проведи рефакторинг кода функции checkStorage используя паттерн 
//«ранний возврат»:
//удали переменную message;
//удали else;
//код должен работать так же, как и до оптимизации.

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
    
//     // return password === ADMIN_PASSWORD ? 'Добро пожаловать!' : 'Доступ запрещен, неверный пароль!';
  
//    if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   } 
//   return 'Доступ запрещен, неверный пароль!';//
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// 3. Функция checkStorage проверяет возможность оформления заказа 
//и возвращает сообщение о результате.Она принимает два параметра, 
//значения которых будут задаваться во время её вызова.

//available - доступное количество товаров на складе;
//ordered - количество единиц товара в заказе.
//Проведи рефакторинг кода функции checkStorage используя паттерн 
//«ранний возврат».

// function checkStorage(available, ordered) {
//   if (ordered === 0) {`
//     return 'В заказе еще нет товаров';
//   }

//   if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   } 

//   return 'Заказ оформлен, с вами свяжется менеджер';
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// 4. Объяви переменную fruits и присвой ей массив фруктов - 
//строк 'яблоко', 'слива', 'груша' и 'апельсин'.

// 5. Объяви три переменные и присвой каждой из них значение, 
//используя нотацию квадратных скобок.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// 6. Переопредели значения элементов с индексами 1 и 3. 
//Замени 'слива' на 'персик', а 'апельсин' на 'банан'.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// fruits[1] = 'персик';
// fruits[3] = 'банан';

// console.log(fruits);

// 7. Объяви переменную fruitsArrayLength и 
//присвой ей длину массива fruits используя свойство length.

// const fruits = ['яблоко', 'персик', 'груша', 'банан'];

// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

//8. Объяви две перемнные:
// lastElementIndex	индекс последнего элемента масcива fruits через 
//длина_массива - 1
//lastElement	значение последнего элемента массива

// const fruits = ['яблоко', 'персик', 'груша', 'банан'];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementsIndex);
// console.log(lastElement);


// 9. Напиши функцию getExtremeElements(array) которая принимает 
//один параметр array - массив элементов произвольной длины.
//Функция должна возвращать массив из двух элементов - первого 
//и последнего элемента параметра array.

// function getExtremeElements(array) {
//     array.splice(1, array.length - 2);
//     return array;
// }
  
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));
// console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']));

// 10. Дополни код функции splitMessage(message, delimeter) так, чтобы 
//она возвращала в переменной words результат разделения строки message 
//по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   return words;
// }

// console.log(splitMessage('Манго спешит на поезд', ' '));
// console.log(splitMessage('Манго', ''));
// console.log(splitMessage('лучшее_за_неделю', '_'));

// 11. Сервису гравировки украшений нужна функция, которая бы автоматически 
//считала цену гравировки, в зависимости от количества слов и цены за слово.
//Объявлена функция calculateEngravingPrice(message, pricePerWord).
//Эта функция принимает строку, состоящую из слов разделённых только 
//пробелами(параметр message) и цену гравировки одного слова
//(параметр pricePerWord).
//Напиши тело функции, чтобы она возвращала общую стоимость гравировки 
//всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//   const totalPrice = message.split(' ').length * pricePerWord;
//   return totalPrice;
// }

// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));
// console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));
// console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 20));

// 12. Дополни код функции makeStringFromArray(array, delimeter) так, 
//чтобы она возвращала в переменной string результат соединения элементов 
//массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);
  
//   return string;
// }

// console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '));
// console.log(makeStringFromArray(['М', 'а', 'н', 'г', 'о'], ''));
// console.log(makeStringFromArray(['лучшее', 'за', 'неделю'], '_'));

// 13. Напиши функцию slugify(title) которая принимает заголовок 
//статьи, параметр title, и возвращает slug, созданный из этой 
//строки.
//Значением параметра title будут строки, слова которых 
//разделены только пробелами.
//Все символы slug должны быть в нижнем регистре.
//Все слова slug должна быть разделены тире.


// function slugify(title) {
//   const slug = title.toLowerCase().split(' ').join('-');
//   return slug;
// }

// console.log(slugify('Английский для разработчика'));
// console.log(slugify('Массивы для новичков'));
// console.log(slugify('Десять секретов JavaScript'));
// console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));

// 14. Дополни код так, чтобы переменные содержали частичные 
//копии исходного массива fruits.
//firstTwoEls - массив из первых двух элементов.
//nonExtremeEls - массив из всех элементов кроме первого и 
//последнего.
//lastThreeEls - массив из трёх последних элементов.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// 15. Дополни код так, чтобы в переменной allClients получился 
//массив всех элементов массивов oldClients и newClients.

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// 16. Напиши функцию makeArray(firstArray, secondArray, 
//maxLength) для создания нового массива со всеми элементами 
//двух исходных firstArray и secondArray.
//Параметр maxLength содержит максимально допустимую длину 
//нового массива.
//Если количество элементов нового массива больше maxLength, 
//функция должна вернуть копию массива длиной maxLength элементов.
//В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//   const concatArray = firstArray.concat(secondArray);
//   return concatArray.length > maxLength ? concatArray.slice(0, maxLength) : concatArray;

// }

// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
// console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));
// console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0));


// 17. Функция logNumbersInRange(start, end) логирует все целые числа 
//в диапазоне от start до end включительно.Дополни тело функции так, 
//чтобы она работала правильно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// 18. Напиши функцию calculateTotal(number), которая принимает целое 
//число(параметр number) и возвращает сумму всех целых чисел от 
//единицы и до этого числа.Например, если number равно 3, 
//то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//   let totalSum = 0;
  
//   for (let i = 0; i <= number; i += 1) {
//     totalSum += i;
//   }

//   return totalSum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24)); 

// 19. Дополни код цикла for так, чтобы он последовательно 
// //логировал все элементы массива fruits.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// 20. Напиши функцию calculateTotalPrice(order), которая принимает 
//один параметр order - массив чисел, и рассчитывает общую сумму его 
//элементов.Общая сумма элементов должна сохраняться в переменной total, 
//которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
// }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 21. Напиши фукцнию findLongestWord(string) которая принимает 
//произвольную строку состоящую только из слов разделённых 
//пробелом(параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   const splitString = string.split(' ');
//   console.log(splitString);
//   let longestWord = splitString[0];
  
//   for (let i = 1; i < splitString.length; i += 1){
//     if (splitString[i].length > longestWord.length) {
//       longestWord = splitString[i];
//     }
//   }
//     return longestWord;
//   }
 
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// 22. Дополни код функции createArrayOfNumbers(min, max) так, 
//чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// 23. Напиши функцию filterArray(numbers, value), которая 
//принимает массив чисел(параметр numbers) и возвращает новый массив, 
//в котором будут только те элементы массива numbers, которые больше 
//чем значение параметра value(число).

// function filterArray(numbers, value) {
//   const newFilterArray = [];

//   for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] > value) {
//       newFilterArray.push(numbers[i])
//     }
//   }

//   return newFilterArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// 24. Функция checkFruit(fruit) принимает строку с названием фрукта 
//(параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
//Дополни код функции так, что если:
//фрукт есть в массиве, то функция возвращает true;
//фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit);
// }

// console.log(checkFruit('слива'));
// console.log(checkFruit('мандарин'));
// console.log(checkFruit('груша'));
// console.log(checkFruit('Груша'));
// console.log(checkFruit('яблоко'));

// 25. Общими элементами массивов называют те элементы, 
//которые присутствуют во всех массивах.
//Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими 
//будут числа 3 и 5, т.к.они присутствуют в обоих исходных массивах.
//А числа 0, 1 и 8 присутствуют только в одном из массивов.
//Напиши функцию getCommonElements(array1, array2) которая получает 
//два массива произвольной длины в параметры array1 и array2, 
//и возвращает новый массив, состоящий из тех элементов, 
//которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// };


// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// 26. Выполни рефакторинг кода функции calculateTotalPrice(order) 
//заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const oneItem of order) {
//     total += oneItem;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 27. Выполни рефакторинг функции filterArray(numbers, value) 
//заменив цикл for на for...of.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
    
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//28. Дополни выражения остатка от деления так, 
//чтобы код проходил тесты.

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

//29. Напиши функцию getEvenNumbers(start, end) которая 
//возвращает массив всех чётных чисел от start до end.
//Чётным считается число которое делится на 2 без остатка.

// function getEvenNumbers(start, end) {
//   const evenNumberArray = [];
//   let number;

//   for (let i = start; i <= end; i += 1){
//     if (i % 2 === 0) {
//       number = i;
//       evenNumberArray.push(number);
//   }
//   }
//   return evenNumberArray;
// }
  
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

//30. Дополни код так, чтобы в переменную number записывалось 
//первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

//31. Если цикл находится в теле функции, то оператор break не 
//прекращает выполнение функции, а только прервёт цикл.
//Для того чтобы прерывать выполнение сразу цикла и функции 
//есть оператор return.
//В примере ищем число 3. Как только выполнится условие if, 
//делаем возврат, который прервёт выполнение цикла и функции.

// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

//32. Напиши функцию includes(array, value), которая делает 
//тоже самое, что и метод массива массив.includes(значение) - 
//проверяет, есть ли в массиве array значение value, возвращая 
//true если есть и false в противном случае.
//При выполнении этой задачи в теле функции includes() нельзя 
//использовать метод массив.includes(значение).

// function includes(array, value) {
//   // let result = false;
//   for (const number of array) {
//     if (number === value) {
//       return true
//     }
//   }
//     return false;
//   }


// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));