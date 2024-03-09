// // 1. Berilgan stiring ichidan olib tashlanishi kerak bo'lgan stringni birinchi uchraganini olib tashlash
// function text(str, value) {
//   const index = str.indexOf(value);
//   if (index !== -1) {
//     return str.slice(0, index) + str.slice(index + value.length);
//   } else {
//     return str;
//   }
// }
// console.log(text("To be or not to be", "not"));
// console.log(text("I like legends", "end"));
// console.log(text("ABABAB", "BA"));

// function symbol(str) {
//   const indSymbol = str.indexOf("<");
//   const indSymbol1 = str.lastIndexOf(">");
//   if (indSymbol !== -1 && indSymbol1 !== -1) {
//     return str.slice(indSymbol + 1, indSymbol1);
//   }
//   return str;
// }

// console.log(symbol("<div>"));
// console.log(symbol("<span>"));
// console.log(symbol("<a>"));

// 4. Berilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali.

// const atext = text.filte((t) => {
//   return t.text !== "not";
// });
// console.log(atext);

// function unbracketTag(str) {
//   let text = "<div>";
//   return text - "<>";
// }
// console.log(unbracketTag);

// function num(a) {
//   let a = alert;
//   if (num % 2 == 0) {
//     console.log(true);
//   } else num % 2 !== 0;
//   console.log(false);
// }

// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];
// myprod.discount6;
// //   const

// function isEven(element) {
//   if (element % 2 == 0) {
//     console.log(true);
//   } else element % 2 != 0;
//   console.log(false);
// }

// let numbers = [4, 5, 6, 7, 11, 12, 16, 17];

// console.log(numbers.some(isEven));

// // let citeDevolepment =[
// // 	{ country: 'Belarus', city: 'Brest' },
// // 	{ country: 'Russia', city: 'Omsk' },
// // 	{ country: 'Russia', city: 'Samara' },
// // 	{ country: 'Belarus', city: 'Grodno' },
// // 	{ country: 'Belarus', city: 'Minsk' },
// // 	{ country: 'Poland', city: 'Lodz' }
// // ]
// // citeDevolepment

// // /*
// //   1,2   =>  3  ( = 1+2 )
// //   5,10  =>  45 ( = 5+6+7+8+9+10 )
// //   -1,1  =>  0  ( = -1 + 0 + 1 )
// // */

// function getSumBetweenNumbers(n1, n2) {
//   let n;
// }

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// function anyBook() {
//   if (alreadyRead == false) {
//     console.log("Akrom Malikning Halqa kitobi oqilmagan");
//   }
// }
