// отфильтруй числа больше 5 и удвой их

// nums = [1, 3, 6, 8, 2];
//
// function filterNumbers(arr) {
//     return arr
//         .filter(num => num > 5)
//         .map(num => num * 2);
// }
//
// const result = filterNumbers(nums);
// console.log(result);

// оставь слова больше 3 и переведи Upper
// words = ['hi', 'hello', 'code', 'sun', 'javascript'];
//
// function lengthMoreThree(arr) {
//     return arr
//         .filter(num => num.length > 3)
//         .map(num => num.toUpperCase());
// }
// const result = lengthMoreThree(words);
// console.log(result);

// отфильтруй полож числа и добавь к ним сом
// nums = [-2, 0, 3, 5, -1];
//
// function filterAndAdd(arr) {
//     return arr
//         .filter(num => num > 0)
//         .map(num => num + 'com')
// }
//
// const result = filterAndAdd(nums);
// console.log(result);

// оставь строки котрые содержат "а" и перве символы
// words = ['cat', 'dog', 'apple', 'banana'];
// function letterA(arr) {
//     return arr
//         .filter(num => num.includes('a'))
//         .map(num => num.slice(0, 3));
// }
// const result = letterA(words);
// console.log(result);

// отфильтруй числа больше 5 - если четное и *2, нечетное *3
// nums = [2, 3, 6, 7, 1];
//
// function moreFive(arr) {
//     return arr
//         .filter(num => num > 5)
//         .map(num => num % 2 === 0 ? num * 2 : num * 3)
// }
// const result = moreFive(nums);
// console.log(result);

// оставь чтеные числа и сделай их отрицательными
// nums = [1, 2, 3, 4, 5, 6, 7];
//
// function evenNumbers(arr) {
//     return arr
//         .filter(num => num % 2 === 0)
//         .map(num => -num)
// }
// const result = evenNumbers(nums);
// console.log(result);

// оставь строки длиной меньше 5 и + !
// words = ['hi', 'hello', 'sun', 'javascript'];
//
// function lengthFive(arr) {
//     return arr
//         .filter(num => num.length < 5)
//         .map(num => num + '!')
// }
// const result = lengthFive(words);
// console.log(result);

// оставь числа больше 0 и сделай их в виде строк
// nums = [-1, 0, 3, 5, -2];
//
// function moreThan0(arr) {
//     return arr
//         .filter(num => num > 0)
//         .map(num => num + "")
// }
// const result = moreThan0(nums);
// console.log(result);

// оставь строки котрые содержат о и сделай Upper
// words = ['dog', 'cat', 'cat', 'hello', 'sun'];
//
// function upperO(arr) {
//     return arr
//         .filter(num => num.includes('o'))
//         .map(num => num.toUpperCase())
// }
// const result = upperO(words);
// console.log(result);

// оставь числа меньше 10 и если четное +10, если нечетное +5
// nums = [3, 4, 7, 12, 8];
//
// function mapData(arr) {
//     return arr
//         .filter(num => num < 10)
//         .map(num => num % 2 === 0 ? num + 10 : num + 5)
// }
// const result = mapData(nums);
// console.log(result);

// отфильтровать пользователей старше 18  и вернуть их имена
// const users = [
//     {name: 'Anna', age: 17},
//     {name: 'Tom', age: 22},
//     {name: 'Bob', age: 15},
// ]
//
// function filterName(arr) {
//     return arr
//         .filter(user => user.age >= 18)
//         .map(user => user.name)
// }
// const result = filterName(users);
// console.log(result);

// оставить товары с ценой больше 100 и увеличить цену на 10%
// const products = [
//     {name: 'Shirt', price: 50},
//     {name: 'Shoes', price: 120},
//     {name: 'Hat', price: 80},
// ];
//
// function moreThan(arr) {
//     return arr
//         .filter(product => product.price > 100)
//         .map(product => ({
//             name: product.name,
//             price: product.price * 1.1,
//         }))
// }
// const result = moreThan(products);
// console.log(result);

// оставить книги с более чем 200стр и вернуть только названия
// const books = [
//     {title: 'Short story', pages: 150},
//     {title: 'War and Peace', pages: 1225},
//     {title: 'Harry Potter', pages: 350}
// ];
//
// function renderBooks(arr) {
//     return arr
//         .filter(book => book.pages > 200)
//         .map(book => book.title);
// }
//
// const result = renderBooks(books);
// console.log(result);

// отфильтровать студентов у которых балл >= 80 и имена с большой буквой
// const students = [
//     {name: 'anna', grade: 90},
//     {name: 'tom', grade: 75},
//     {name: 'bob', grade: 82},
// ]
// function nameGrade(arr) {
//     return arr
//         .filter(student => student.grade >= 80)
//         .map(student => student.name.toUpperCase())
// }
// const result = nameGrade(students);
// console.log(result);

// Оставить продукты со словом "Pro" в названии и вернуть объекты с полем salePrice = price * 0.9
// const items = [
//     {name: 'iPhone Pro', price: 1000},
//     {name: 'iPad', price: 800},
//     {name: 'Macbook Pro', price: 2000}
// ]
// function wordPro(arr) {
//     return arr
//         .filter(item => item.name.includes('Pro'))
//         .map(item => ({
//             name: item.name,
//             salePrice: item.price * 9
//         }))
// }
// const result = wordPro(items);
// console.log(result);


// HARD


// Есть список заказов,нужно:
// оставить только заказы со статусом "paid"
// вернуть только id заказов
// const orders = [
//     {id: 1, status: "paid"},
//     {id: 2, status: "pending"},
//     {id: 3, status: "paid"}
// ];
//
// function statusPaid(arr) {
//     return arr
//         .filter(order => order.status === "paid")
//         .map(order => order.id);
// }
// const result = statusPaid(orders);
// console.log(result);

// оставить пользователей:старше 18
// у которых имя начинается с "A"
// вернуть имена
// const users = [
//     {name: "Anna", age: 20},
//     {name: "Alex", age: 17},
//     {name: "Artem", age: 25},
//     {name: "Bob", age: 30}
// ];
//
// function olderEight(arr) {
//     return arr
//         .filter(user => user.age > 18 && user.name.startsWith('A'))
//         .map(user => user.name)
// }
// const result = olderEight(users);
// console.log(result);


// оставить товары:цена больше 100
// и сделать скидку 20%
// вернуть объекты
// const products = [
//     {name: "Phone", price: 300},
//     {name: "Book", price: 50},
//     {name: "Laptop", price: 1000}
// ];
//
// function leaveProduct(arr) {
//     return arr
//         .filter(product => product.price > 100)
//         .map(product => ({
//             name: product.name,
//             price: product.price * 0.8
//         }))
// }
// const result = leaveProduct(products);
// console.log(result);


// есть посты нужно:оставить только опубликованные (published: true)
// вернуть длину текста
// const posts = [
//     {text: "Hello world", published: true},
//     {text: "Draft post", published: false},
//     {text: "JS is awesome", published: true}
// ];
// function publishedPost(arr) {
//     return arr
//         .filter(post => post.published === true)
//         .map(post => post.text.length);
// }
// const result = publishedPost(posts);
// console.log(result);

// есть список пользователей нужно:оставить только активных (isActive: true)
// вернуть объект:name
// email в верхнем регистре
// const users = [
//     {name: "anna", email: "anna@mail.com", isActive: true},
//     {name: "tom", email: "tom@mail.com", isActive: false},
//     {name: "bob", email: "bob@mail.com", isActive: true}
// ];
// function activeUsers(arr) {
//     return arr
//         .filter(user => user.isActive === true)
//         .map(user => ({
//             name: user.name,
//             email: user.email.toUpperCase(),
//         }));
// }
// const result = activeUsers(users);
// console.log(result);


// HARD*2


// есть заказы, нужно:
// оставить только "paid"
// где amount > 100
// вернуть сумму * 0.9 (скидка)

// const orders = [
//     {id: 1, status: "paid", amount: 80},
//     {id: 2, status: "paid", amount: 150},
//     {id: 3, status: "pending", amount: 200},
//     {id: 4, status: "paid", amount: 300}
// ];
// function onlyPaid(arr) {
//     return arr
//         .filter(order => order.status === "paid" && order.amount > 100)
//         .map(order => order.amount * 0.9)
//
// }
// const result = onlyPaid(orders);
// console.log(result);

// есть пользователи нужно:оставить только активных
// у кого email содержит "gmail"
// вернуть email в нижнем регистре
// const users = [
//     {name: "Anna", email: "ANNA@GMAIL.COM", isActive: true},
//     {name: "Tom", email: "tom@yahoo.com", isActive: true},
//     {name: "Bob", email: "BOB@GMAIL.COM", isActive: false},
//     {name: "Kate", email: "KATE@GMAIL.COM", isActive: true}
// ];
// function onlyActive(arr) {
//     return arr
//         .filter(user => user.isActive && user.email.toLowerCase().includes('gmail'))
//         .map(user => ({
//             ...user,
//             email: user.email.toLowerCase()
//         }));
// }
//
// const result = onlyActive(users);
// console.log(result);

// есть товары нужно:оставить только те, у которых price > 100
// если category === "tech" → скидка 20%
// иначе → скидка 10%
// вернуть новый объект
// const products = [
//     {name: "Phone", price: 500, category: "tech"},
//     {name: "Shoes", price: 150, category: "fashion"},
//     {name: "TV", price: 800, category: "tech"},
//     {name: "Hat", price: 50, category: "fashion"}
// ];
// function leavePrice(arr) {
//     return arr
//         .filter(product => product.price > 100 )
//         .map(product => ({
//             ...product,
//             price: product.category === "tech" ? product.price * 0.8 : product.price * 0.9
//         }))
// }
// const result = leavePrice(products);
// console.log(result);

// есть посты нужно:оставить только опубликованные
// где длина текста > 10
// вернуть объект:
//     text
//     preview (первые 5 символов)
// const posts = [
//     {text: "Hello world!!!", published: true},
//     {text: "Short", published: true},
//     {text: "Draft post here", published: false},
//     {text: "JavaScript is cool", published: true}
// ];
// function getPublishedPosts(arr) {
//     return arr
//         .filter(post => post.published && post.text.length > 10)
//         .map (post => ({
//             text: post.text,
//             preview: post.text.slice(0, 5)
//         }))
// }
// const result = getPublishedPosts(posts);
// console.log(result);


// есть пользователи нужно:оставить только тех, у кого age > 18
// и имя длиннее 3
// вернуть:
//     name в верхнем регистре
//     email без "@"
// const users = [
//     {name: "Anna", age: 20, email: "anna@mail.com"},
//     {name: "Tom", age: 17, email: "tom@mail.com"},
//     {name: "Bob", age: 25, email: "bob@mail.com"},
//     {name: "Kate", age: 30, email: "kate@mail.com"}
// ];
// function komuEight(arr) {
//     return arr
//         .filter(user => user.age > 18 && user.name.length > 3)
//         .map(user => ({
//             name: user.name.toUpperCase(),
//             email: user.replace('@', ''),
//         }))
// }
// const result = komuEight(users);
// console.log(result);