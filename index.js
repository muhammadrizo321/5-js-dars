// 1. Har bir so‘zni katta harf bilan yozish
function capitalizeWords(str) {
  const words = str.split(" ");
  const capitalizeWords = words.map(word => {
    if (word.length === 0 ) 
      return "";
    return word[0].toUpperCase()+
    word.slice(1).toLowerCase();
  })
  return capitalizeWords.join(" ");
}  console.log(capitalizeWords("salom dunyo")); // "Salom Dunyo"





















































// //1______________________________________________
// function getUserInfo(user) {
//   return user;
// }
// const user4 = {
//   name: "Foydalanuvchi ismi: Sanvar",
//   age: "yoshi: 22",
// };
// console.log(user4);

// //2______________________________________________
// const addTax = (product) => (
//   (product.priceWithTax = product.price * 1.12), product
// );
// const reult3 = addTax({
//   name: "Telefon",
//   price: 1000,
// });
// console.log(reult3);

// //3______________________________________________

// function carInfo(car) {
//   return car;
// }
// const user2 = {
//   modell: "Cobalt",
//   year: "2022",
//   color: "oq",
// };
// console.log(user2);
// //4______________________________________________
// function hasEmail(user4) {
//   return user4;
// }
// const user5 = {
//   name: "Ali",
//   email: "ali@gmail.com",
// };
// console.log("email" in user5);
// //5______________________________________________
// function getTotalSalary(employees, employees2) {
//   return employees.salary + employees2.salary;
// }
// const employees = {
//   name: "Ali",
//   salary: 1000,
// };
// const employees2 = {
//   name: "vali",
//   salary: 1500,
// };
// console.log(getTotalSalary(employees, employees2));

// //6______________________________________________

// function calculaterSpeed(car) {
//   return car.distanca / car.time;
// }
// const car = {
//   model: "Cobalt",
//   distanca: 150,
//   time: 3,
// };
// console.log(car.distanca / car.time);
// //7______________________________________________
// function calculaterWorkTime(worker) {
//   return worker;
// }
// const worker = {
//   name: "Ali",
//   start: 9,
//   end: 18,
// };
// worker.horsWorked = worker.end - worker.start;
// console.log(worker);
// //8______________________________________________
// function calculaterVolume(cube) {
//   cube.volume = Math.pow(cube.side, 3);
//   return cube;
// }
// const reult = calculaterVolume({ side: 5 });
// //9______________________________________________
// const user9 = {
//   username: "test",
//   password: "12345678",
// };
// function isPasswordStrong(user9) {
//   return user9;
// }
// console.log(user9.password.length >= 8);

// //10_____________________________________________
// const person = {
//   name: "SHokir",
//   age: 55,
// };
// function calculateBirthYear(person) {
//   return person;
// }
// person.brithYear = 2025 - person.age;
// console.log(person);

// const book = {
//   title: "JS Fundamentalse",
//   athor: "Mirzo",
// };
// function checkProperty(obj, key) {
//   return key in obj;
// }

// const resnum = checkProperty(book, "athor");
// console.log(resnum);

// function charCounter(str) {
//   char[str.length];

//   return "assalom";
// }
// const str = "assalom";

// console.log(str);
