// const word = "racecar";
//
// function isPalindrom(str) {
//     let left = 0;
//     let right = str.length - 1;
//
//     while(left < right) {
//         if(str[left] !== str[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrom(word));

// Задача №2 «Разворот массива»
// Теперь мы будем не просто проверять, а менять данные в памяти.
//     Это база для управления массивами.
//     Дано: const nums = [1, 2, 3, 4, 5];
// Вывод: [5, 4, 3, 2, 1]
// const nums = [1, 2, 3, 4, 5];
//
// function reverseArray(arr) {
//     let left = 0;
//     let right = arr.length -1;
//
//     while (left < right) {
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
//     return arr;
// }
// console.log(reverseArray(nums));

// Следующая задача №3: «Пара в 10»
// (Target Sum)Теперь применим «пальчики» для поиска.
//     Представь, что массив уже отсортирован.
//     Дано: const nums = [1, 2, 4, 6, 8, 9]; (по порядку!)
// Цель: найти два числа, сумма которых равна 10.
// const nums = [1, 2, 4, 6, 8, 9];
//
// function targetSum(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//
//     while (left < right) {
//         let sum = arr[left] + arr[right];
//
//         if (sum === 10) {
//             return [arr[left], arr[right]];
//         } else if (sum < 10) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return null;
// }
// console.log(targetSum(nums));


// Задача №4: "Удаление мусора" (Палиндром с пробелами)
// Это усложнение твоей первой задачи.
//     Яндекс обожает давать строки с «грязью» (пробелы, запятые, разный регистр).
// Дано: const phrase = "а роза упала на лапу азора";
// Вывод: true
// const phrase = "а роза упала на лапу азора";
//
// function isPalindrom(str) {
//     let cleanStr = str.replaceAll(' ', '').toLowerCase();
//     let left = 0;
//     let right = cleanStr.length -1;
//
//     while(left < right) {
//         if(cleanStr[left] !== cleanStr[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrom(phrase));

// Последний рывок: "Нули в конец" (Задача №5)
// Попробуй написать этот код.
//     Используй Swap, который мы учили (через temp).
// Дано: const nums = [0, 1, 0, 3, 12];
// Вывод: [1, 3, 12, 0, 0]
// const nums = [0, 1, 0, 3, 12];
//
// let j = 0;
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i] !== 0) {
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//         j++
//     }
// }
//
// console.log(nums)

// Объединение отсортированных массивов (Яндекс-стайл)
// Это классическая задача на Два указателя.
//     Нам нужно соединить два «ручейка» в одну «реку» так, чтобы порядок не нарушился.
//     const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// [1, 2, 3, 4, 5, 6]

// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
//
// function clueArrays(a, b) {
//     let result =[];
//     let i = 0;
//     let j = 0;
//
//     while (i < a.length && j < b.length) {
//         if(a[i] < b[j]) {
//             result.push(a[i]);
//             i++;
//         } else {
//             result.push(b[j]);
//             j++;
//         }
//     }
//     return result.concat(a.slice(i)).concat(b.slice(j));
// }
// console.log(clueArrays(arr1, arr2));

// Дано: const s = "I love JS";
// Вывод: "JS love I"


// let fruits = ["Яблоко", "Груша"];
//
// let temp = fruits[0];
// fruits[0] = fruits[1];
// fruits[1] = temp;
// console.log(fruits)

// Дано: массив из 4 имен
// const friends = ["Anna", "Tom", "Bob", "Kate"];
// Задача: Поменять местами КРАЯ (первое с последним) и СЕРЕДИНУ (второе с третьим),
// чтобы получилось ["Kate", "Bob", "Tom", "Anna"].
// const friends = ["Anna", "Tom", "Bob", "Kate"];
//
// function reverseFriends(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//
//     while (left < right) {
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
//     return arr;
// }
// console.log(reverseFriends(friends));

// const s = "I love JS";
//
// function reverseWord(arr) {
//     let words = arr.split(" ");
//
//     let left = 0;
//     let right = words.length -1;
//
//     while (left < right) {
//         let temp = words[left];
//         words[left] = words[right];
//         words[right] = temp;
//         left++;
//         right--;
//     }
//     return words.join(" ");
// }
// console.log(reverseWord(s));


// 1. "Перепутанные ключи" (Swap в объекте) 🔑
// Дано: У тебя есть объект с двумя ключами:
//     const home = { dad: "ключи от машины", mom: "ключи от квартиры" };
// Задача: Поменяй их значения местами, чтобы у папы были ключи от квартиры,
//     а у мамы — от машины.
//     Вывод в консоли: { dad: "ключи от квартиры", mom: "ключи от машины" }
// const home = { dad: "ключи от машины", mom: "ключи от квартиры" };
//
// function swapHomeKeys(obj) {
//     let temp = obj.dad;
//     obj.dad = obj.mom;
//     obj.mom = temp;
//     return obj;
// }
// console.log(swapHomeKeys(home));

// let a = 1;
// let b = 2;
// let c = 3;
//
// function add() {
//     let temp = a;
//     a = b;
//     b = c;
//     c = temp;
//
// }
// add();
// console.log(("a:", a));
// console.log(("b:", b));
// console.log(("c:", c));

// 2. "Крайние меры" (Первый и последний) ↔️
// Дано: Длинный массив const items = [10, 20, 30, 40, 50, 60, 70];
// Задача: Поменяй местами только первый и последний элементы массива, не используя цикл.
//     Просто обратись к ним по индексам.
//     Вывод в консоли: [70, 20, 30, 40, 50, 60, 10]
// const items = [10, 20, 30, 40, 50, 60, 70];
//
// function addNumb(arr) {
//     if(arr.length < 2) return arr;
//
//     let lastIndex = arr.length -1;
//
//     let temp = arr[0];
//     arr[0] = arr[lastIndex];
//     arr[lastIndex] = temp;
//     return arr;
// }
// console.log(addNumb(items))

// const s = "Yandex is cool"
// function reverseWord(str) {
//     let words = str.split(' ');
//
//     let left = 0;
//     let right = words.length - 1;
//
//     while(left < right) {
//         let temp = words[left];
//         words[left] = words[right];
//         words[right] = temp;
//         left++;
//         right--;
//     }
//     return words.join(' ');
// }
// console.log(reverseWord(s))

// const nums = [1, 5, 2, 3];
// const target = 8;
//
// function targetSum(arr, k) {
//     const cache = {};
//
//     for (let num of arr) {
//         let missing = k - num;
//
//         if (cache[missing]) {
//             return [missing, num];
//         }
//         cache[num] = true;
//     }
//     return null;
// }
// console.log(targetSum(nums));



// №11Пропущенный самолёт (Поиск дырки через объект)
// const planes = [1, 2, 4, 5]; // Дано (n = 5)
//
// function findLost(arr, n) {
//     const cache = {};
//
//     // 1. Записываем в "шкаф" всех, кто прилетел
//     for (let num of arr) {
//         cache[num] = true;
//     }
//
//     // 2. Идем по порядку от 1 до n и ищем, кого нет в шкафу
//     for (let i = 1; i <= n; i++) {
//         if (!cache[i]) {
//             return i; // Нашли дырку!
//         }
//     }
// }
//
// console.log(findLost(planes, 5)); // 3
//
//
// №10: Объединение отсортированных массивов (Два указателя)
// const a = [1, 3, 5];
// const b = [2, 4, 6];
//
// function merge(arr1, arr2) {
//     let result = [];
//     let i = 0;
//     let j = 0;
//
//     while(i < arr1.length && j < arr2.length) {
//         if(arr1[i] < arr2[j]) {
//             result.push(arr1[i++]);
//         } else {
//             result.push(arr2[j++]);
//         }
//     }
//     return result.concat(arr1.slice(i)).concat(arr2.slice(j));
// }
// console.log(merge(a, b))
//
//
// №12: Поиск пары (Target Sum) — через Объект
// const nums = [1, 5, 2, 3];
// const k = 8;
//
// function targetSum(arr, target) {
//     const cache = {};
//
//     for (let num of arr) {
//         let missing = target - num;
//
//         if(cache[missing]) {
//             return [missing, num]
//         }
//         cache[num] = true;
//     }
// }
// console.log(targetSum(nums, k));
//
// №3 (часть 2): Объект счётчика (Frequency Map)
// const votes = ['Ivan', 'Petr', 'Ivan'];
//
// function countVotes(arr) {
//     const cache = {};
//
//     for(let name of arr) {
//         if(cache[name]) {
//             cache[name] += 1;
//         } else {
//             cache[name] = 1;
//         }
//     }
//     return cache;
// }
// console.log(countVotes(votes));