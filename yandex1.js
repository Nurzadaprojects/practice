// Пропущенный самолёт (Яндекс-вариант)
// Ситуация: В аэропорту должны приземлиться самолёты с номерами по порядку.
//     Но один потерялся. Тебе дают массив приземлившихся,
//     и они не отсортированы.
//     Дано: const planes = [12, 14, 15, 11];
// Цель: Найти, что пропущено число 13.

// const planes = [12, 14, 15, 11];
//
// function findLostPlane(arr) {
//     const cache = {};
//     let min = arr[0];
//     let max = arr[0];
//
//     for (let num of arr) {
//         if(num < min) min = num;
//         if(num > max) max = num;
//         cache[num] = true;
//     }
//
//     for (let i = min; i <= max; i++) {
//         if(!cache[i]) {
//             return i;
//         }
//     }
// }
// console.log(findLostPlane(planes));


// "Пропавший ID"
// Дано: const ids = [101, 103, 104, 105];
// Вывод в консоли: 102
// const ids = [101, 103, 104, 105];
//
// function lostId(arr) {
//     const cache = {};
//     let min = arr[0];
//     let max = arr[0];
//
//     for (let id of arr) {
//         if (id < min) min = id;
//         if (id > max) max = id;
//         cache[id] = true;
//     }
//
//     for (let i = min; i <= max; i++) {
//         if(!cache[i]) {
//             return i;
//         }
//     }
// }
// console.log(lostId(ids));

// "Лишний билет"Дано: const tickets = [1, 2, 2, 4, 5];
// (Здесь 2 — дубликат, а 3 — пропало).
// Вывод в консоли: { missing: 3, duplicate: 2 }

// const tickets = [1, 2, 2, 4, 5];
//
// function extraTicket(arr) {
//     const cache = {};
//
//     for (let i of arr) {
//         if(cache[i]) {
//             cache[i] += 1;
//         } else {
//             cache[i] = 1;
//         }
//     }
//     return cache;
// }
// console.log({ missing: 3, duplicate: 2 });

// Дырявый забор
// "Дано: const heights = [10, 11, 13, 14, 16];
// "Вывод в консоли: [12, 15] (Массив всех пропущенных чисел).
// const heights = [10, 11, 13, 14, 16];
//
// function leakyFence(arr) {
//     const cache = {};
//     const missing = [];
//
//     let min = arr[0];
//     let max = arr[0];
//
//     for (let id of arr) {
//         if(id < min) min = id;
//         if(id > max) max = id;
//         cache[id] = true;
//     }
//
//     for (let i = min; i <= max; i++) {
//         if(!cache[i]) {
//             missing.push(i);
//         }
//     }
//     return missing;
// }
// console.log(leakyFence(heights));

// "Проверка последовательности"
// Дано 1: const nums1 = [1, 2, 3]; →
// Вывод: trueДано 2: const nums2 = [1, 3]; → Вывод: false

// const nums1 = [1, 2, 3];
// const nums2 = [1, 3, 9];
//
// function sequenceCheck(arr) {
//     const cache = {};
//     let min = arr[0];
//     let max = arr[0];
//
//     for (let i of arr) {
//         if(i < min) min = i;
//         if(i > max) max = i;
//         cache[i] = true;
//     }
//
//     for (let id = min; id <= max; id++) {
//         if(!cache[id]) {
//             return false;
//         }
//      }
//     return true;
// }
// console.log(sequenceCheck(nums1));
// console.log(sequenceCheck(nums2));

// "Первое пропущенное"
// Нам нужно проверять числа, начиная строго с 1 и вверх, пока не найдем "дырку".
//     Дано 1: const nums = [3, 4, -1, 1]; → Вывод: 2 (1 есть, а 2 — нет).
// Дано 2: const nums = [1, 2, 0]; → Вывод: 3 (1 и 2 есть, следующее — 3).

// const nums1 = [3, 4, -1, 1];
// const nums2 = [1, 2, 0];
//
// function firstMissed(arr) {
//     const cache = {};
//
//     for (let i of arr) {
//         cache[i] = true;
//     }
//     let candidate = 1;
//
//     while (cache[candidate]) {
//         candidate++;
//     }
//     return candidate;
// }
// console.log(firstMissed(nums1));
// console.log(firstMissed(nums2));


// const data = [4, 1, 2, 1, 5];
//
// function findMissMatch(arr) {
//     const cache = {};
//     let duplicate = null;
//     let missing = null;
//
//     for (let i of arr) {
//         if(cache[i]) {
//             duplicate = i;
//         }
//         cache[i] = true;
//     }
//
//     for (let i = 1; i <= arr.length; i++) {
//         if(!cache[i]) {
//             missing = i;
//         }
//     }
//     return { missing: missing, duplicate: duplicate };
// }
// console.log(findMissMatch(data));

// const arr1 = [1, 5, 9];
// const arr2 = [2, 4, 8];
//
// function mergeArray(a, b) {
//     let result = [];
//     let i = 0; // палец для первого массива
//     let j = 0; // палец для второго массива
//
//     // Пока У ОБОИХ есть элементы
//     while (i < a.length && j < b.length) {
//         if (a[i] < b[j]) { // Сравниваем текущие элементы по их индексам
//             result.push(a[i++]); // Берем из первого и двигаем i
//         } else {
//             result.push(b[j++]); // Берем из второго и двигаем j
//         }
//     }
//
//     // Склеиваем остатки (хвосты), если один массив закончился раньше другого
//     return result.concat(a.slice(i)).concat(b.slice(j));
// }
//
// console.log(mergeArray(arr1, arr2));
// // Вывод: [1, 2, 4, 5, 8, 9]
