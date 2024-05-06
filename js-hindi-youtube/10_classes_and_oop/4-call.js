function SetUsername(username) {
  //complex DB calls
  this.username = username; //har function ka khud ka this gota hai
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); //call method reference hold kar ke rakhata hai //(or)Yaha ka this alag hai this kya hai corrent context to

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
