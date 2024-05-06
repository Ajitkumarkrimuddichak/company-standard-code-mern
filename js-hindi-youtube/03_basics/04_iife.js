// Immediately Invoked Function Expressions (IIFE)
//Immediately  Execute hojaye this is IIFE (or) Global Scope ke Pallution se Problem hoti hai  isi Liye ise bachane ke liye IIFE used karate hai
(function chai() {
  //Isako named IIFE kahate hai
  console.log(`DB CONNECTED`);
})();

((name) => {
  //Isako Unnamed IIFE kahate hai
  console.log(`DB CONNECTED TWO ${name}`);
})("ajit");

// Interview Kahenge Two IIFE create karo joki dono likh do
