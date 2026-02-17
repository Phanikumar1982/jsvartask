//TASK1

let word = "developer";
let count = 0;
let vowels = "aeiou";

console.log("Characters:");

for (let char of word) {
  console.log(char);

  count++;

  if (vowels.includes(char)) {
    console.log(`^ vowel: ${char}`);
  }
}

console.log(`---`);
console.log(`number of chars: ${count}`);

//TASK2

let skills = ["HTML", "CSS", "JavaScript", "React"];
let totalSkills = 0;

for (let skill of skills) {
  console.log(skill);

  console.log(`I know ${skill}`);

  totalSkills++;
}

console.log(`---`);
console.log(`Total skills: ${totalSkills}`);

//TASK3

let employee = {
  name: "Arun",
  role: "Tester",
  salary: 30000,
  experience: "2 years"
};

for (let key in employee) {

    console.log(`Key: ${key}`);

  console.log(`Value: ${employee[key]}`);


  console.log(`${key} : ${employee[key]}`);
  
  console.log("---");
}

//TASK4

function table(num) {
  console.log(`Multiplication Table for ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

table(5);

//TASK5

function square(num) {
  return num * num; 
}

let result = square(5);

console.log(`The square of 5 is: ${result}`);

//TASK6

// Function with default parameter
function register(name, department, role = "Developer") {
  console.log("Name:", name);
  console.log("Department:", department);
  console.log("Role:", role);
  console.log("-----------");
}

register("Rajesh", "IT", "Manager");

register("Geetha", "HR");


//TASK7

function checkScope(){
if(true){
var a = 100
let b = 200
}
console.log(a)
console.log(b)
}
   

//TASK8

console.log(x)
var x=10

//System throws an Undefined, if we call var variable, it will return 
//undefined, because we are calling only this var type, before hoisting 
//we are calling only variable, hence it return undefined.

//console.log(y)
let y =20//

//system thows reference error, because we are using let variable
//which is a block scope, and not accepted for hoisting.

//task9

function greet(name) {
    console.log("Hello, " + name + "! Welcome to the india.");
}

greet("Phani");

//task10

const add = (a, b) => a + b;

console.log(add(50, 10)); 

//Task11

let subtract = (a, b) => a - b;{

  let result = subtract(25, 12);
  console.log(result); 

}

// Task 12 – Callback

function calculate(operation, a, b) {
  return operation(a, b);
}

function add1 (a, b) {
  return a + b;
}

function subtract1 (a, b) {
  return a - b;
}

console.log("Add1:", calculate(add, 10, 5));
console.log("Subtract1:", calculate(subtract, 20, 10));


//TASK13

function total(a) {
  return function(b) {
    return function(c) {
      console.log(a + b + c);
    };
  };
}

total(5)(10)(15); 

//TASK14 using .next()

function* reward() {
  yield "Level 1 completed";
  yield "Level 2 completed";
  yield "Level 3 completed";
  yield "Team winner";
}

let rewardgenerator = reward();

console.log(rewardgenerator.next().value);
console.log(rewardgenerator.next().value);
console.log(rewardgenerator.next().value);
console.log(rewardgenerator.next().value);

//TASK14 using for ..of

function* reward1() {
  yield "Level 1 completed";
  yield "Level 2 completed";
  yield "Level 3 completed";
  yield "Team winner";
}

let rewardgenerator1 = reward();

for (let a of rewardgenerator1){

  console.log(a)
}


//Final Team Challenge

// Object → Team details
const team = {
  name: "Thala kings XI",
  city: "Chennai",
  captain: "Thala",
  players: 11
};

//  for...in → Print team details
console.log("Team Details:");
for (let key in team) {
  console.log(key + ":", team[key]);
}

//  Generator → Rewards system
function* rewards() {
  yield "Bronze Medal";
  yield "Silver Medal";
  yield "Gold Medal";
}

const rewardGen = rewards();
console.log("\nRewards:");
console.log(rewardGen.next().value);
console.log(rewardGen.next().value);
console.log(rewardGen.next().value);

//  Callback → Score calculation
function calculateScore(operation, a, b = 0) { // default parameter
  return operation(a, b);
}

// Named function
function addScore(a, b) {
  return a + b;
}

// Arrow function
const subtractScore = (a, b) => a - b;

console.log("\nScores:");
console.log("Add:", calculateScore(addScore, 50, 20));
console.log("Subtract:", calculateScore(subtractScore, 50, 10));

//  Currying → Bonus calculation
function bonusCalculator(bonus) {
  return function(score) {
    return score + bonus;
  };
}

const addBonus10 = bonusCalculator(10);
console.log("\nBonus Score:", addBonus10(80));



