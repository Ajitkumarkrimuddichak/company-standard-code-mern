function sayMyName() {
  // Function Defination
  console.log("A");
  console.log("J");
  console.log("I");
  console.log("T");
  console.log("K");
  console.log("U");
}
// sayMyName <=Function Reference
// sayMyName() <=Function Excute

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //Parameters
  // let result = number1 + number2
  // return result
  return number1 + number2;
  //console.log("ajit"); // Unreachable code
}
const result = addTwoNumbers(3, 5); //Arguments Pass
// console.log("Result: ", result);

function loginUserMessage(username) {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("ajit"))
// console.log(loginUserMessage())

function defoultparameter(username = "kumar") {
  return `${username} just logged in`;
}
// console.log(defoultparameter())

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "ajit",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleObject(user)
//(or)
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
