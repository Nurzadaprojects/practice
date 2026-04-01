// const items = ['apple', 'banana', "apple", "orange"];
//
// function countItems(arr) {
//     const cache = {};
//
//     for (let fruit of arr) {
//         if (cache[fruit]) {
//             cache[fruit] += 1;
//         } else {
//             cache[fruit] = 1;
//         }
//     }
//     return cache;
// }
// console.log(countItems(items));
//
//


// 1. Unique (Уникальные числа)Нужно просто «отметить» в объекте, какие числа мы встретили.
//     Дано: const nums = [1, 2, 2, 3, 1];
// Вывод в консоли: {1: true, 2: true, 3: true}

// const nums = [1, 2, 2, 3, 1];
//
// function uniqueNumbers(arr) {
//     const numbers = {};
//
//     for (let numb of arr) {
//         numbers[numb] = true;
//     }
//     return numbers;
// }
// console.log(uniqueNumbers(nums))


// 2. Letter Counter (Счетчик букв)Посчитать каждую букву в строке (строка в цикле работает как массив).
// Дано: const word = "apple";
// Вывод в консоли: {a: 1, p: 2, l: 1, e: 1}

// const word = "apple";
//
// function letterCounter(arr) {
//     const letters = {};
//
//     for (let letter of arr) {
//         if (letters[letter]) {
//             letters[letter] += 1;
//         } else {
//             letters[letter] = 1;
//         }
//     }
//     return letters;
// }
// console.log(letterCounter(word));


// 3. Has Duplicate (Есть ли повторы?)Вернуть true,
//     если хоть одно число встретилось второй раз.
//     Дано: const nums = [1, 2, 3, 2];
// Вывод в консоли: true (потому что 2 уже было в «шкафу»)
// const nums = [1, 2, 3, 2];
//
// function hasDuplicate(arr) {
//     const numbers = {};
//
//     for (let numb of arr) {
//         if(numbers[numb]) {
//             return true;
//         }
//         numbers[numb] = true;
//     }
//     return numbers;
// }
// console.log(hasDuplicate(nums))

// 4. Translator (Простой словарь)
// Найти значение по ключу.
//     Дано: const dict = {apple: "яблоко", banana: "банан"};
// Вызов: translate(dict, "banana");
// Вывод в консоли: "банан"
// const dict = {apple: "яблоко", banana: "банан"};
//
// function translate(word) {
//     return dict[word];
// }
// console.log(translate('banana'));

// 5. First Double (Первый повтор)
// Найти число, которое первым «стукнулось» в занятый ящик шкафа.
//     Дано: const nums = [1, 5, 2, 5, 1];
// Вывод в консоли: 5 (потому что пятерка первой повторилась)

// const nums = [1, 5, 2, 5, 1];
//
// function findFirstNumb(arr) {
//     const number = {};
//
//     for (let numb of arr) {
//         if(number[numb]) {
//             return numb;
//         }
//         number[numb] = true;
//         }
//     return "Net povtorov"
//
// }
// console.log(findFirstNumb(nums));
//
// 1. "Детектор лжи" (Поиск уникального)
// Нужно найти число, которое встречается в массиве ровно один раз.
//     Все остальные числа повторяются.
//     Дано: const nums = [2, 3, 2, 4, 3];
// Вывод в консоли: 4
// Подсказка: сначала создай карту частот (как в задаче с буквами apple),
// а потом вторым циклом найди ключ, у которого значение равно 1.

// const nums = [2, 3, 2, 4, 3];
//
// function numberFinder(arr) {
//     const numbers = {};
//
//     for (let numb of arr) {
//         if (numbers[numb]) {
//             numbers[numb] += 1;
//         } else {
//             numbers[numb] = 1;
//         }
//     }
//     for (let key in numbers) {
//         if (numbers[key] === 1) {
//             return key;
//         }
//     }
// }
// console.log(numberFinder(nums));

// 2. "Сборщик налогов" (Сумма без дубликатов)
// Посчитай сумму всех чисел в массиве, но если число повторяется,
//     прибавь его только один раз.
//     Дано: const nums = [1, 2, 1, 3, 2];
// Вывод в консоли: 6 (это \(1 + 2 + 3\))
// Подсказка: создай пустой объект. Идя по циклу, проверяй: если числа нет в объекте
// прибавляй его к сумме и записывай в объект. Если есть — просто иди дальше.

// const nums = [1, 2, 2, 3];
//
// function sunUnique(arr) {
//     let sum = 0;
//     let seen = {};
//
//     for (let num of arr) {
//         if(!seen[num]) {
//             sum += num;
//             seen[num] = true;
//         }
//     }
//     return sum;
// }
// console.log(sunUnique(nums));

// №4 (Черный список)Она очень похожа на предыдущую,
//     но вместо суммы мы будем собирать массив.
//     Задача: У тебя есть список всех имен и список "забаненных".
//     Нужно оставить только тех, кого НЕТ в черном списке.
//     Дано: all = ["Tom", "Anna", "Bob"], banned = ["Bob"]
// Вывод: ["Tom", "Anna"]

// const all = ["Tom", "Anna", "Bob"];
// const banned = ["Bob"];
//
// function filterNames(names, blacklist) {
//     let result = [];
//     let cache = {};
//
//     for (let name of blacklist) {
//         cache[name] = true;
//     }
//
//     for (let name of names) {
//         if (!cache[name]) {
//             result.push(name)
//         }
//     }return result;
// }
// console.log(filterNames(all, banned));



// Задача: Проверь, состоят ли две строки из одинаковых букв.Anagramma
// str1 = "rail";
// str2 = "liar";
//
// function isAnagram(s1, s2) {
//     if (s1.length !== s2.length) return false;
//
//     const cache = {};
//
//     for (let char of s1) {
//         cache[char] = (cache[char] || 0) + 1;
//     }
//
//     for (let char of s2) {
//         if(!cache[char]) {
//             return false;
//         }
//         cache[char] -= 1;
//     }
//     return true;
// }
// console.log(isAnagram('rail', 'liars'));

// "Детектор одинаковых":
// Дан массив имен ["Anna", "Tom", "Anna"].
//     Верни объект, который просто пометит true каждое имя, которое встретилось.
// (Как в задаче Unique).
// Ожидаемый результат: { Anna: true, Tom: true }
// const name = ["Anna", "Tom", "Anna"];
//
// function uniqueName(arr) {
//     const names = {};
//
//     for (let i of arr) {
//         names[i] = true;
//     }
//     return names;
// }
// console.log(uniqueName(name));

// Мгновенная цена
// Дано: const prices = { "apple": 100, "orange": 200 };
// Задача: Напиши функцию getPrice(fruitName),
//     которая просто лезет в этот объект и возвращает цену.
//     Пример вызова: getPrice("apple") должен выдать 100.

// const prices = { "apple": 100, "orange": 200 };
//
// function getPrice(name) {
//     return prices[name] || "NOT AVAILABLE";
// }
// console.log(getPrice("banana"));

// "Проверка пропуска"
// Дано: const office = { "id_123": "Active", "id_777": "Active" };
// Задача: Напиши функцию checkAccess(id), которая вернет true,
//     если такой ID есть в объекте, и false, если его нет.

// const office = { "id_123": "Active", "id_777": "Active" };
//
// function checkAccess(id) {
//     return !!office[id];
// }
// console.log(checkAccess('id_555'));

// "Быстрый склад":Дан массив товаров const stock = ["болт", "гайка", "винт"];
// Переложи их в объект cache, чтобы потом можно
// было проверить наличие любого товара за \(O(1)\).

// const stock = ["болт", "гайка", "винт"];
//
// function buildCache(arr) {
//     let cache = {};
//     for (let item of arr) {
//          cache[item] = true;
//     }
//     return cache;
// }
// const myWarehouse = buildCache(stock);
// console.log(myWarehouse);
//


// Задача: Поиск чисел с определённой суммой
// Дано: массив const nums = [3, 5, 2, 7]; и цель const target = 8;
// Нужно: найти пару чисел, которые в сумме дают 8.
// const nums = [1, 5, 2, 3];
// const target = 8;
//
// function findSum(arr, target) {
//     let seen = {};
//
//     for (let num of arr) {
//         let missing = target - num;
//         if (!!seen[missing]) {
//             return [missing, num];
//         } else {
//             seen[num] = true;
//         }
//     }
//     return "SOLO"
// }
// console.log(findSum(nums, target));

