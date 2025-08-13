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
}  console.log(capitalizeWords("salom dunyo"));
//__________________________________________________________________________________________________

// 2. Massivdagi har bir ismni katta harfga o‘tkazing
function toUpperNames(names) {
  return names.map(name => name.toUpperCase())
}
console.log(toUpperNames(["ali", "vali", "hasan"])); 
//__________________________________________________________________________________________________
// 3. Massivda nechta musbat son borligini toping
function countPositive(numbers) {
const tiveNumbers = numbers.filter(num => num > 0);
  return tiveNumbers.length;
}
console.log(countPositive([1, -3, 4, 0, 6])); 
//__________________________________________________________________________________________________
// 4. Stringdagi bo‘sh joylarni olib tashlang
function removeSpaces(str) {
  const trimmed = str.trim();
  const heySpaces = trimmed.replaceAll( " ", "")
  return heySpaces; 
}
console.log(removeSpaces("  salom   dunyo  ")); // "salomdunyo"
//__________________________________________________________________________________________________
// 5. Berilgan sonlar orasidan biror juft son bor-yo‘qligini tekshiring
function hasEvenNumber(arr) {
  return arr.some(num => num % 2 === 0) ;
}
console.log(hasEvenNumber([1, 3, 5, 8])); // true
//______________________________________________________________________________________________________________________________________________
// 6. Massivdagi 0 qiymatli elementlarni olib tashlang
function removeZeros(arr) 
{
return arr.filter(tema => tema !== 0);
}
console.log(removeZeros([0, 1, 2, 0, 3])); // [1, 2, 3]
//______________________________________________________________________________________________________________________________________________
// 7. Har bir so‘zni teskari qilib qaytaring
function reverseWords(str) {
const SeWords = str.split(" ");

const reversed = SeWords.map(Word => Word.split("").reverse().join(" "));
  return reversed.join(" ") ;
  
  
}
console.log(reverseWords("salom dunyo")); // "molas oynud"
//__________________________________________________________________________________________________
// 8. Faqat 3 harfli so‘zlarni qoldiring
function threeLetterWords(words) {
  return words.filter(itm => itm.length <= 3 )
  
}
console.log(threeLetterWords(["sal", "olma", "kor", "bor"])); // ["sal", "kor", "bor"]
//__________________________________________________________________________________________________
// 9. Massivdagi sonlarni 2 ga ko‘paytiring
function doubleNumbers(numbers) {
  return numbers.map(num => num * 2)
  
}
console.log(doubleNumbers([2, 3, 5]))
//__________________________________________________________________________________________________________________________________________
// 10. Matndagi har bir harfni alohida massivga oling
function splitChars(str) {
  return str.split("")
  
}
console.log(splitChars("hello")); // ['h','e','l','l','o']
//__________________________________________________________________________________________________________________________________________
// 11. Massivdagi butun sonlarni saqlang
function onlyIntegers(arr) {
  return arr.filter(arr => Number.isInteger(arr))
 
}
console.log(onlyIntegers([1.5, 2, 3.1, 4])); // [2, 4]
//_________________________________________________________________________________________________________________________________________


// 12. Massivdagi har bir elementga uning indexini qo‘shing
function addIndex(arr) {
  return arr.map((value, index) => value + index);
  
}
console.log(addIndex([10, 20, 30])); // [10, 21, 32]
//__________________________________________________________________________________________________________________________________________
// 13. Stringda nechta 'a' harfi borligini sanang
function countA(str) {
  return str.toLowerCase().split("").filter( num => num === "a").length;
}
console.log(countA("Ananas sharbati  ichvopman")); // 6
//____________________________________________________________________________________________________________________________________________
// 14. Har bir so‘zdan faqat birinchi harfni oling
function getInitials(str) {
  return str.split(/\s+/).map(str => str[0]).join("");
  
}
console.log(getInitials("Hello World From JS")); // "HWFJ"
//_____________________________________________________________________________________________________________________________
// 15. Ichma-ich massivlarni tekislashtiring
function flattenArray(arr) {
  return arr.flat()
  // 1. flat() metodidan foydalaning
}
console.log(flattenArray([1, [2, 3], [4, 5]])); // [1,2,3,4,5]
//______________________________________________________________________________________________________________________________


// 17. Stringdagi raqamlarni sonlarga aylantiring
function extractNumbers(str) {
  return str
    .split("")
    .filter((char) => !isNaN(char) && char !== " ")
    .map(char => Number(char));
  }
console.log(extractNumbers("ab1c3d2")); // [1,3,2]
//____________________________________________________________________________________________________________________________________________

// 18. Har bir so‘zni teskari qilib, oxirgi so‘zni katta harf bilan qaytaring
function specialReverse(str) {
   let words = str.split(' '); 
  let reversedWords = words.map(word => 
    word.split('').reverse().join('') 
  );  
  let lastIndex = reversedWords.length - 1;
  reversedWords[lastIndex] = reversedWords[lastIndex].toUpperCase();

  return reversedWords;
}
//_____________________________________________________________________________________________________________
  
  // 1. split() orqali so‘zlarga bo‘ling
  // 2. map() orqali har birini teskari qiling
  // 3. oxirgi so‘zni toUpperCase() qiling

console.log(specialReverse("salom dunyo js")); // ['molas', 'oynud', 'SJ']

// 19. 2-qavatgacha bo‘lgan ichki massivlarni flatten qiling (flatMap bilan)
function flatMapExample(arr) {
  // 1. flatMap() yordamida birinchi qatlamni yoying
  // 2. Ichidagi yana bitta massiv bo‘lsa, uni ham yoying
}
console.log(flatMapExample([1, [2, [3, 4]], 5])); // [1,2,[3,4],5]

// 20. Massivda barcha qiymatlar son ekanligini tekshiring
function allNumbers(arr) {
  // 1. every() yordamida typeof qiymat 'number' ekanligini tekshiring
}
console.log(allNumbers([1, 2, 3])); // true




















































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
