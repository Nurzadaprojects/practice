// words = ["Aaaa", "Bbb", "Chhh", "Dhh", "Eeed", "Aaaa"];
//
// function countWords(arr) {
//     const shelf = {};
//
//     for (let word of arr) {
//         if(shelf[word]) {
//             shelf[word] += 1;
//         } else {
//             shelf[word] = 1;
//         }
//     }
//     return shelf;
//
// }
// console.log(countWords(words))

// Счётчик голосов:
//     Дан массив ['Ivan', 'Ivan', 'Petr'].
//     Верни объект: { Ivan: 2, Petr: 1 }.
// names = ['Ivan', 'Ivan', 'Petr'];
//
// function countNames(arr) {
//     const cache = {};
//
//     for (let name of arr) {
//         if (cache[name]) {
//             cache[name] += 1;
//         } else {
//             cache[name] = 1;
//         }
//     }
//     return cache;
// }
// console.log(countNames(names))

// Первый уникальный: В строке "aabbcde" найди символ,
//     который встречается 1 раз. (Ответ: "c").
// letters = ["aabbcde"];
//
// function uniqueLetter(arr) {
//     const cache = {};
//
//     for (let i of arr) {
//         if (cache[i]) {
//             cache[i] += 1;
//         } else {
//             cache[i] = 1;
//         }
//     }
//     for (let i of arr) {
//         if (cache[i] === 1) {
//             return i;
//         }
//     }
// }
// console.log(uniqueLetter("aabbcde"))

// Склад: Есть массив ['болт', 'гайка'].
//     Напиши функцию, которая говорит true,
//     если деталь есть в массиве (используй объект для проверки за \(O(1)\)).

// instruments = ['болт', 'гайка'];
//
// function wareHouse(arr) {
//     const cache = {};
//
//     for (let i of arr) {
//         cache[i] = true;
//     }
//     return cache;
// }
// const myWareHouse = wareHouse(instruments)
// console.log(myWareHouse);

// Сумма уникальных: Сложи числа в ``, но дубликаты игнорируй. (Ответ: 6)
// Дано: массив чисел const nums = [1, 2, 2, 3];
// Вывод в консоли: 6 (потому что мы складываем \(1 + 2 + 3\), а вторую двойку выбрасываем).

// const nums = [1, 2, 2, 3];
//
// function sumUnique(arr) {
//     let sum = 0;
//     const seen = {};
//
//     for (let num of arr) {
//         if(!seen[num]) {
//             sum += num;
//             seen[num] = true
//         }
//     }
//     return sum;
// }
//
// console.log(sumUnique(nums)); // Должно вывести 6
//
// Разрешенные имена:
//     Дан массив all = ["Tom", "Bob", "Anna"]
// и banned = ["Bob"]. Верни только разрешенных.

// const all = ["Tom", "Bob", "Anna"];
// const banned = ["Bob"]
//
// function namesNotBanned(names, blacklist ) {
//     let name = [];
//     const cache = {};
//
//     for (let i of blacklist) {
//         cache[i] = true;
//     }
//
//     for (let i of names) {
//         if (!cache[i]) {
//             name.push(i);
//         }
//     }
//     return name;
// }
// console.log(namesNotBanned(all, banned));


// Поиск пары обуви: Есть левые ботинки [38, 41]
// и правые [41, 42]. Найди общий размер (Ответ: [41]).
// const left = [38, 41];
// const right = [41, 42];
//
// function pairOfShoes(arr1, arr2) {
//     let result = [];
//     const leftCache = {};
//
//     for (let i of arr1) {
//         leftCache[i] = true;
//     }
//
//     for (let i of arr2) {
//         if(leftCache[i]) {
//             result.push([i]);
//         }
//     }
//     return result;
// }
// console.log(pairOfShoes(left, right));

// Анаграммы (Сравнение наборов букв)
// Суть: Проверить, можно ли из одного слова составить другое, переставив буквы.
//     Дано: const word1 = "норка"; и const word2 = "крона";
//     Вывод в консоли: true

// const word1 = "норка";
// const word2 = "крона";
//
// function anagram(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//
//     const cache = {};
//
//     for (let i of arr1) {
//         cache[i] = (cache[i] || 0) + 1;
//     }
//     for (let i of arr2) {
//         if(!cache[i]) {
//             return false;
//         }
//         cache[i] -= 1;
//     }
//     return true;
// }
// console.log(anagram("норка", "крона"))

// Самый частый (Поиск максимума)
// Суть: Найти число, которое встречается в списке больше всего раз.
//     Дано: const nums = [7, 1, 7, 2, 7];
// Вывод в консоли: 7
// const nums = [7, 1, 7, 2, 7];
//
// function findMaxixmum(arr) {
//     const cache = {};
//
//     for (let i of arr) {
//         cache[i] = (cache[i] || 0) + 1;
//     }
//     let maxCount =0;
//     let winner = null;
//
//     for (let i in cache) {
//         if (cache[i] > maxCount) {
//             maxCount = cache[i];
//             winner = i;
//         }
//     }
//     return Number(winner)
// }
// console.log(findMaxixmum(nums))
