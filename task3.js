let firstName = "Naveen";
let lastName = "Kumar";

// 1. Print using + (Concatenation)
let fullName = firstName + " " + lastName;
console.log(fullName);

// 2. Print using template string 
let fullNameTemplate = `${firstName} ${lastName}`;
console.log(fullNameTemplate);

// 3. Print length of full name
console.log(fullNameTemplate.length);

//TASK2

console.log (typeof("5"+2))
// If we concatenate one string value and one number value, it will always return 
//String data type.

console.log(typeof(5+"2"))
//If we concatenate number value and string value, it will return string data type.

console.log(typeof(true+1))
// Here the value of true is 1, Hence 1+1 = 2, it will return number data type

console.log(typeof(false+"hello"))
//if we concatenate string to any type, it will return string data type

console.log(typeof(null+1))
//null initiate the value zero or null. Hence 1+0 =1, it will return number data type


//TASK3

console.log(typeof(Number("100")))
//string "100" convert into number 100. Hence it will return Number variable.

console.log(Number("abc"))
//The alphabete word can not convert to number, hence it will return Nan

console.log(Number(true))
//number constructor of true boolean value is 1, hence it will return 1 (number)

console.log(Number(undefined))
//Undefined doesn't have any value, that variable can not convert into number, hence
//it will return Nan.

console.log(typeof(Number(null)))
//null contains 0 only, it will return the 0 (variable number)value


//TASK4

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(undefined));

console.log(Boolean([]));
//Non primitive data type with or without value will return "true". because 
// an empty array is successfully initiates an object in memory.

console.log(Boolean({}));
// similar to an array, object also will return "True"

//TASK5

let num = 7;

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

//TASK6

let marks = 75;
let grade;

if (marks >= 90) {
    grade = "A";
} else if (marks >= 75) {
    grade = "B";
} else if (marks >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("Marks: " + marks);
console.log("Grade: " + grade);

//TASK7

let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");//output
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

//TASK8

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

//TASK9

let number = 3;

for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(number + " x " + i + " = " + result);
}

//TASK10

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i; // This is the same as sum = sum + i
}

console.log("The final sum is: " + sum);

if("0"){
   console.log ("true block");
}else{
   console.log("false block");
}

//any string which is not empty will consider as true.
//If the vlue is zero alone (not inside the colons), this will return false value, then false statement activated 
//for else print "false blcok"
//Even though the value inside the quotes is 0, 
// since it is wrapped in quotes, makes it a string.