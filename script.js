
 //TASK 1: Create a var variable. Declare, initialize, reassign, redeclare and print the
//final value.

var a= 10; 
    a= 20;
var a= 25;

console.log(a)  // the output is => 25

// TASK 2: Create a let variable. Declare, initialize, reassign, attempt redeclaration and
//print value.

let b=10;
    b=20; 
//let b=20; // redeclaration is not possible for Var.

console.log(b); // the output is => 20


// TASK 3: Create a const variable. Declare and initialize. Attempt reassigning and
//redeclaring

const c= 100; 

//   c= 200; // reassigning is not possibe in const variable it leads to TypeError

// const c= 300;  //redeclaration is not allowed in const variable

console.log(c); // the output is => 100

//TASK 4: Create one var, one let, and one const variable. Reassign only allowed
//variables and print all.

var A= 10;

let B= 20;

const C= 30;

A= 40;
B= 50;

console.log(A); //The output is=> 40
console.log(B); //The output is=> 50
console.log(C); //The output is=> 30

//TASK 5: Print one variable using console.log(), alert(), and document.writeln().

let value= "welcome to party";

console.log(value);//The output will be displayed on the developer tool console
//alert(value) //The output will be pop-up in the screen whenever we refresh or reload the page
//document.writeln(value); //The output will be displayed on the webpage


//TASK 6: Use confirm(). Store the result in a let variable and print it using console.log().

let Result = confirm("Do you agree?") 
console.log(Result); //The output will be displayed on the developer tool as a boolean value(True or Falsa) as per the users action


//TASK 7: Use prompt(). Store user input and print using console.log() and
//document.writeln()

   let userName = prompt("Enter your Name:");

   console.log("User name is: " + userName); //The output will be in the developer tool
   document.writeln("User name is: " + userName); //the output will be on the webpage

//TASK 8: Print one variable using console.log(), console.warn(), and console.error().

let print="Hello world";
console.log(print);
console.warn(print);
console.error(print);

// TASK 9: Create var price = 100. Reassign to 200. Print before and after values.

var price=100;
console.log(price); //The output will be 100 because it will print before the reassigning
price=200;
console.log(price); //The output will be 200 because it will print after

//TASK 10: Create a let boolean variable. Assign true, reassign false, and print final
//value.

 let result= true;
 result= false;
 console.log(result); //The output is false 


 //TASK 11: Create a string variable. Reassign a new string and print both values
//separately.

let str1="Phani";
 let str2="kumar";
 console.log(str1,str2); 

 // TASK 12: Redeclare the same var variable three times with different values and print
//final value.

var number = 50; // Redeclare the same var variable three times
var number = 60;
var number = 70;

console.log(number);// the output is 70, because system will take the latest or recent one 


// TASK 13: Create a const object. Modify one property value and print the object.

const data = {
   name : "Phani",
   qualification : "BCA",
};
console.log(data);

data.qualification = "MBA";

console.log(data);

//TASK 14: Create one var, one let, and one const variable. Print using console.log(),
//console.warn(), console.error().

var f = 44;
let g = 55;
const h = 66;
console.log(f);
console.warn(f);
console.error(f);

console.log(g);
console.warn(g);
console.error(g);

console.log(h);
console.warn(h);
console.error(h);
