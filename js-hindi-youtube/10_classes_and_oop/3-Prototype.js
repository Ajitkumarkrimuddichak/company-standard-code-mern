// let myName = "Ajit     "
// let mychannel = "chai     "
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};
Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// Prototypel inheritance Old Syntex
const User = {
  name: "chai",
  email: "chai@google.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = User;

//(or)New/modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};
anotherUsername.trueLength();
"Ajit".trueLength();
"iceTea".trueLength();
