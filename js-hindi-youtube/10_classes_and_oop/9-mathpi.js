//Question how to convert PI=3.1415926535 to convert 4/3 ho sakati hai ya nahi ho sakati hai to kyo

const descripter = Object.getOwnPropertyDescriptor(Math, "PI"); //property hai jo hidden object ke bare me bata hai.
//console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    // console.log("chai nhi bni");
  },
};
//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: true,
});
//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    // console.log(`${key} : ${value}`);
  }
}
