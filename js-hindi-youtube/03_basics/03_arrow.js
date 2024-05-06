const user = {
  username: "ajit ",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //Browser ke Anadar hai oh global object hai but yaha pe {} object hai

// function chai(){
//     let username = "ajit"
//     console.log(this);
//     console.log(this.username);//not working  this in function only for working object
// }
// chai()

// const chai = function () {
//     let username = "ajit"
//     console.log(this.username);
// }
// chai()

const chai = () => {
  let username = "ajit";
  console.log(this.username);
  console.log(this);
};
// chai()

// const addTwo = (num1, num2) => { //{} braces used to return likhana hoga or Exceptely return
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //no used {} to isako Implicate return kahate hai or nahi used karate hai return
//(or) const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "ajit" }); // Object return karana hai to () used karana hi hoga Ex:-
console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()
