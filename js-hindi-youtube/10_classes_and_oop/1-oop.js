//(1) Object literal Ex:-
const user = {
  //Execution Context se Relation hai
  username: "Ajit",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this); //current context //(or) this keyword used matalab current context ki bata hota hai //(or) Function context hai //(or) yah sab node invirnoment me run kar rahe hai to this me method alag gota hai Ex:-Terminal
  },
};
//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);//Global context // (or) yah pura ko copy kar ke browser pe run kare to this ka methods alaga aata hai

//(2) Constructor function Ex:- new kya karata hai //new sirf allow karata hai ki aap yekahi object literal se  muliple instances bana sako
// const promiseOne = new Promise()
// const date = new Date()//new naya context banane me kam aata hai or new ko hi Constructor function kahate hai.

//(or)userOne ke andar kumar aagaya hai hamane to userTwo to print hi nahi kiya hai userTwo over ride kar diya joki ham nahi chahate hai
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}
const userOne = User("ajit", 12, true);
const userTwo = User("kumar", 11, false);
console.log(userOne);

//(or)over ride nahi hoga kyo ki 'new' used karane se naya instance mijata hai // or sahi bhi hai
// function User(username, loginCount, isLoggedIn) {
//   this.username = username;
//   this.loginCount = loginCount;
//   this.isLoggedIn = isLoggedIn;

//   this.greeting = function () {
//     console.log(`Welcome ${this.username}`);
//   };
//   return this;
// }
// const userOne = new User("ajit", 12, true);
// const userTwo = new User("ChaiAurCode", 11, false);
// console.log(userOne.constructor);//constructor property:-referencr hoti hai khud hi ke bare me
//console.log(userTwo);

// Note :-(1) Jab bhi aap new keyword used karate hai to sabase pahale yek Empty object create hota hai jise instance bola jata hai.
//(2) yek Constructor function call hota hai new keyword ke karan "ye kya karata hai aapake jitane bhi argument ko pack karata hai or dedeta hai"
//(3)ye jo this keyword jo aapane argument bagera hai vah this me injekat hota hai
//(4)aapako mil jate hai function ke andar
