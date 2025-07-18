// // Valid Parentheses

// // const validParentheses= (s) => {
// //     let stack = [];
// //     for(let i = 0;i<s.length;i++){

// //     }

// // }

// // A function that is a property of an object is called its method.
// // If a function is inside an object, it’s called a method.
// let user = {
//   name: "stuti",
//   lastname: "Sk",
// };
// // created object with user props
// // add method to the user object
// // This is like saying: “Hey user, now you know how to say hi!”
// user.sayHie = function () {
//   //   console.log("helloe");
// };
// // we call the method
// user.sayHie();

// // let user2 ={
// //     sayHie: function() {
// //         console.log("helloe2")
// //     }
// // }
// let user2 = {
//   name: "stuti",
//   lastname: "Sk",
//   sayHie() {
//     // console.log(this.name);
//   },
// };
// user2.sayHie();

// // The value of this is evaluated during the run-time, depending on the context.
// function sayHi() {
//   // alert(this);
// }

// sayHi(); // undefined

// //   In this case this is undefined in strict mode.
// // n non-strict mode the value of this in such case will
// // be the global object (window in a browser,

// // Arrow functions have no “this”

// // Tasks
// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }
// // method = obj ka child func
// let user3 = makeUser();
// console.log(user3.ref.name);

// let obj = {
//   makeUser() {
//     return {
//       name: "John",
//       ref: this,
//     };
//   },
// };
// let user6 = obj.makeUser();
// console.log(user6.ref);

// function sayHello() {
//   console.log(this);
// }
// sayHello();

// let user4 = {
//   sayHello() {
//     console.log(this);
//   },
// };

// user4.sayHello(); // 'this' is the user object ✅

// remove duplicasy

// [1, 1, 2, 2, 3, 3, 4]
// [(1, 2, 3, 4, _, _, _)];

// sorted
// they would be in front of each other
// const removeDuplicates = (array) => {
//   if (array.length === 0) return 0;

//   let i = 0;

//   for (let j = 1; j < array.length; j++) {
//     if (array[j] !== array[i]) {
//       i++;
//       array[i] = array[j];
//     }
//   }

//   return i + 1;
// };

// console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4]));

// maximum and minimum in an array
// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
// Maximum element is: 9
// unsorted array

const findingMinMax = (array) => {
  console.log(array[0]);
  let minimum = array[0];
  let maximum = array[1];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  return { minimum, maximum };
};

// console.log(findingMinMax([3, 5, 4, 1, 9]));

// 3 < 3  5

// reverse an array 

const reverseArray = (array) => {
let left = 0;
let right = array.length -1;
while(left < right){
  [array[left],array[right]]= [array[right],array[left]];
  
  left++;
  right--;
}
return array;
}
console.log(reverseArray([2,3,4,5,6]))