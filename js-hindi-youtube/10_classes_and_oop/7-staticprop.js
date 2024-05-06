class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    //static:-us method ko/us property ko access hone se rok deta hai
    return `123`;
  }
}
const hitesh = new User("ajit");
// console.log(hitesh.createId())

class Teacher extends User {
  constructor(username, email) {
    super(username); //super constructor
    this.email = email;
  }
}
const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());
