import {
  carInfo,
  getUserInfo,
  hasEmail,
  getTotalSalary,
  calculaterSpeed,
  calculaterWorkTime,
  calculaterVolume,
  isPasswordStrong,
  calculateBirthYear,
} from "../index.mjs";

 console.log(getUserInfo)
 //__________________________________________
 console.log(addTax({ name: "Telefon", price: 1000 }));
 //_____________________________________________
console.log(carInfo({ modell: "Cobalt", year: "2022", color: "oq" }));
//_________________________________________________
console.log(hasEmail({ name: "Ali", email: "ali@gmail.com" }));
//_________________________________________________
console.log(
  getTotalSalary({ name: "Ali", salary: 1000 }, { name: "Vali", salary: 1500 })
);
//_________________________________________________
console.log(calculaterSpeed({ model: "Cobalt", distanca: 150, time: 3 }));
//_________________________________________________
console.log(calculaterWorkTime({ name: "Ali", start: 9, end: 18 }));
//_________________________________________________
console.log(calculaterVolume({ side: 5 }));
console.log(isPasswordStrong({ username: "test", password: "12345678" }));
//_________________________________________________
console.log(calculateBirthYear({ name: "Shokir", age: 55 }));
//_________________________________________________
