const welcome = 'Welcome to the password validator tool!';

console.log(welcome);

const validate = 'Enter password to validate';

console.log(validate);

// let x = '';
// // let empty = '';

// console.log(' Password needs to be atleast ' + x.length +'10');

// console.log(' characters long ');

let password = "Password needs to be 10 characters long";
let empty = 10;

password.length = 10;
console.log(password);

if (empty >= 10){
    console.log('Success!');
  } else if (empty >= 10) {
    console.log('Failure! Too many character!')
  }