// посчитать сумму только положительных чисел больше 5
// nums = [-1, 6, 3, 8];
//
// const result = nums.reduce((acc, num) => {
//     if (num > 5) {
//         return acc + num;
//     }
//     return acc;
// }, 0);
// console.log(result);

// из пользователей взять только активных и посчитать их количество
// users = [
//     {name: "Anna", active: true},
//     {name: "Tom", active: false},
//     {name: "Bob", active: true},
// ];
//
// const result = users.reduce((acc, user) => {
//     if (user.active) {
//        return acc + 1;
//     }
//     return acc;
// }, 0)
// console.log(result);

// посчитать общую сумму товаров дороже 100
// products =[
//     {price: 50},
//     {price: 200},
//     {price: 300},
// ]
// const result = products.reduce((acc, product) => {
//     if (product.price > 100) {
//         return acc + product.price;
//     }
//     return acc;
// }, 0)
// console.log(result)

// собрать обьект
// users = [
//     {name: "Tom"},
//     {name: "Anna"},
//     {name: "Nateee"}
// ];
// const result = users.reduce((acc, user) => {
//     if (user.name.length <= 3) {
//         acc.short.push(user.name);
//     } else {
//         acc.long.push(user.name);
//     }
//     return acc
// },{short: [], long: []});
// console.log(result)

// анйти средний возраст пользователей
// users = [
//     {age:20},
//     {age:30},
//     {age:40}
// ];
// const tottalAge = users.reduce((acc, user) => {
//     return acc + user.age;
// }, 0);
// const result = tottalAge / users.length;
// console.log(result);

// Оставить только положительные числа и удвоить их
// nums = [-1, 2, -3, 4];
//
// function positiveNumbers(arr) {
//     return arr
//         .filter(num => num > 0)
//         .map(num => num * 2)
// }
// const result = positiveNumbers(nums);
// console.log(result);

// Оставить активных пользователей и вернуть их имена
// users = [
//     {name:"Anna", active:true},
//     {name:"Tom", active:false},
//     {name:"Bob", active:true}
// ];
//
// function activeUsers(arr) {
//     return arr
//         .filter(user => user.active === true)
//         .map(user => user.name)
// }
//
// const result = activeUsers(users);
// console.log(result);

// Оставить товары дороже 100 и посчитать сумму
// products = [
//     {price:50},
//     {price:200},
//     {price:300}
// ];
// const result = products
//     .filter(product => product.price > 100)
//     .reduce((acc,product) => {
//         return acc+product.price;
//     }, 0)
// console.log(result);


// Оставить слова длиной больше 3 и сделать uppercase
// words = ["hi", "hello", "sun", "code"]
//
// function lengthMore(arr) {
//     return arr
//         .filter(word => word.length > 3)
//         .map(word => word.toUpperCase())
//
// }
// const result = lengthMore(words);
// console.log(result);