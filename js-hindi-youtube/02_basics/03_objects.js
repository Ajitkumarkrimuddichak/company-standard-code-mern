// Dono se object hi decilar hi hota hai singleton or object literals

// singleton <= Constructor se jo banata hai vahi khali singleton Hota hai
//Ex:-
//const tinderUser = new Object();
//console.log(tinderUser);

// object literals
const mySym = Symbol("key1");
const JsUser = {
  name: "Ajit",
  "full name": "Ajit kumar",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "ajit@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ajit@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "ajit@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
