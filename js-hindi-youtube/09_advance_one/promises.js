//Defination :-The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A Promise is in one of these states:-
//(i) pending:- initial state, neither fulfilled nor rejected.
//(ii) rejected:- meaning that the operation failed.
//(iii) fulfilled:- meaning that the operation was completed successfully.

// fetch() global function

//(1)
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task Ex:-DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve(); //method
  }, 1000);
});
promiseOne.then(function () {
  //.then ka direct connection resolve ke sath || .then ke sath oen callback milata hai yah function automaticly one argument accept karata hai or return karata hai
  console.log("Promise consumed");
});

//(2)
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//(3)
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user); //resolve ke andar jobhi parameter pass karoge vah. yaha pe mil jata hai
});

//(4) or (3) used
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "ajit", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected")); //ya hamesa chalega hi chalega res/req ho ya na ho

//(5)VVI Promise ko app .then/.catch se handle karate hai ya async,try/await/catch aap pe depend karata hai
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});
async function consumePromiseFive() {
  try {
    const response = await promiseFive; //promiseFive yek object hai jo ki app is tarah se handle nahi kar sakate hai Ex:- promiseFive()
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//(or)
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
//getAllUsers()

//(or)
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// fetch() global function :-
//The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// Note :- Promise se aap request kiya or vaha se one Error code  404,505 to resolve me lega ki reject me milega :- to vah hamesa resolve me hi milega kyo ki vah Error nahi hai
//Error tab hoga usa case me jab request karahi nahi paya hai browser ko
//yaha to network request hai ise nahi pata hai 404 kya hai

// working fetch me kya-kya kar sakate hai
//(1) Invalid header name :- fetch('https://example.com/', { headers });
//(2) URL includes credentials :- fetch('https://user:password@example.com/');
//(3) or bhi hai plese document red link :- https://developer.mozilla.org/en-US/docs/Web/API/fetch
