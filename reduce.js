// найти сумму чисел
// nums = [1, 2, 3, 4];
//
// const result = nums.reduce((acc, num) => {
//     return acc + num
// })
// console.log(result)

// найти произведение всех чисел
// nums = [2, 3, 4];
//
// const result = nums.reduce((acc, num) => {
//     return acc * num
// })
// console.log(result)

// найти сумму толкьо ченых чисел
// nums = [1, 2, 3, 4, 5];
//
// const result = nums.reduce((acc, num) => {
//     if (num % 2 === 0) {
//         return acc + num;
//     } return acc;
// }, 0)
// console.log(result);


// посчитать количсетво элементов
// nums = [10, 20, 30];
//
// const result = nums.reduce((acc, num) => {
//     return acc + 1;
// }, 0)
// console.log(result)

// собрать строку из слов
// words = ["Hello", "World"];
//
// const result = words.reduce((acc, word) => {
//     return acc.concat(" ",word);
// })
// console.log(result);

// найти максимальное число
// nums = [3, 7, 2, 9, 1];
//
// const result = nums.reduce((acc, num) => {
//     if (num > acc) {
//         return num;
//     } else {
//         return acc;
//     }
// }, 0)
// console.log(result)

// найти сумму товаров
// products = [
//     {price: 100},
//     {price: 200},
//     {price: 50}
// ]
//
// const result = products.reduce((acc, num) => {
//      return acc + num.price;
// }, 0)
// console.log(result)

// собрать массив имен
// users = [
//     {name: "Anna"},
//     {name: "John"},
// ];
//
// const result = users.reduce((acc, user) => {
//     acc.push(user.name);
//     return acc;
// }, [])
// console.log(result);

// посчитать сколько поьзователей старше 18
// users = [
//     {age: 17},
//     {age: 20},
//     {age: 25}
// ];
//
// const result = users.reduce((acc, cur) => {
//     if (cur.age > 18) {
//         return acc + 1;
//     } else {
//         return acc;
//     }
// }, 0)
// console.log(result);

// найти сумму только нечетных чисел
// nums = [1, 2, 3, 4, 5];
//
// const result  = nums.reduce((acc, num) => {
//     if(num % 2 != 0) {
//         return acc + num
//     } return acc;
// }, 0)
// console.log(result)

// посчитать количсетво строк длиной больше 3
// words = ["hi", "hello", "sun", "javascript"];
//
// const result = words.reduce((acc, word) => {
//     if (word.length > 3) {
//         return  acc + 1;
//     } else {
//         return acc;
//     }
// }, 0)
// console.log(result);

// собрать массив eamil пользователей
// users = [
//     {email: "a@email.com"},
//     {email: "b@email.com"}
// ]
//
// const result = users.reduce((acc, user) => {
//     acc.push(user.email);
//     return acc;
// }, [])
// console.log(result)

// найти сумму  всех price
// products = [
//     {price: 100},
//     {price: 50},
//     {price: 200},
// ]
//
// const result = products.reduce((acc, product) => {
//     return acc + product.price;
// }, 0)
// console.log(result)

// найти сумму чисел больше 5
// nums = [1, 6, 3, 8];
//
// const result = nums.reduce((acc, num) => {
//     if (num > 5) {
//         return acc + num
//     } else {
//         return acc;
//     }
// }, 0)
// console.log(result);

// посчитать количсетво четных
// nums = [1, 2, 3, 4, 5, 6];
//
// const result = nums.reduce((acc, num) => {
//     if (num % 2 === 0) {
//         return acc + 1;
//     } else {
//         return acc;
//     }
// }, 0)
// console.log(result);

// собрать массив только положительных
// nums = [-1, 5, -3, 2];
//
// const result = nums.reduce((acc, num) => {
//     if (num > 0) {
//         acc.push(num);
//     }
//     return acc;
// }, [])
// console.log(result);

// собрать строку из имен
// users = [
//     {name: "Anna"},
//     {name: "John"},
// ];
//
// const result = users.reduce ((acc, user) => {
//     return acc + user.name + ' ';
// }, "")
// console.log(result.trim());

// найти макимальный прайс
// products = [
//     {price: 100},
//     {price: 500},
//     {price: 50},
// ]
//
// const result = products.reduce((acc, num) => {
//     if (acc > num.price) {
//         return acc;
//     } else {
//         return num.price;
//     }
// }, 0)
// console.log(result)

// посчитать количсетво email and gmail
// users = [
//     {email: "a@gmail.com"},
//     {email: "b@yahoo.com"},
//     {email: "c@gmail.com"},
// ]
// const results = users.reduce((acc, user) => {
//     if (user.email.includes("@gmail.com")) {
//         return acc + 1;
//     } else {
//         return acc
//     }
// }, 0)
// console.log(results)

// собрать массив только имен длиннее 3
// users = [
//     {name: "Tom"},
//     {name: "Anna"},
//     {name: "Kate"},
// ]
//
// const result = users.reduce((acc, user) => {
//     if (user.name.length > 3) {
//         acc.push(user.name)
//     } return acc;
// }, [])
// console.log(result)

// посчитаь сумму  только отрицательных
// nums = [-1, 2, -5, 3];
//
// const result = nums.reduce((acc, num) => {
//     if (num < 0) {
//         return acc + num
//     }
//     return acc;
// }, 0)
// console.log(result)


// собрать обьект
// nums = [1, 2, 3, 4, 5];
//
// const result = nums.reduce((acc, num) => {
//     if (num % 2 === 0) {
//         acc.even += 1;
//     } else {
//         acc.odd += 1;
//     }
//     return acc;
// }, {even: 0, odd: 0})
// console.log(result)

