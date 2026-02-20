//TASK1

let names = ["Arun", "Bala", "Charan", "David"];

names.forEach((currentElements, index, TotalArray)=>{

  console.log(currentElements);
}
)

//task2

let numbers = [2, 4, 6, 8];

let squares = numbers.map(num => num * num);

console.log(squares);

//task3

let products = [
  { name1: "mobile", price: 15000 },
  { name1: "laptop", price: 60000 },
  { name1: "keyboard", price: 1000 },
  { name1: "monitor", price: 12000 }
];

let filterProducts = products.filter(product => product.price > 10000);

console.log(filterProducts);



//task4

let products1 = [
  { name1: "mobile", price: 15000 },
  { name1: "laptop", price: 60000 },
  { name1: "keyboard", price: 1000 },
  { name1: "monitor", price: 12000 }
];

let findProduct = products.find(product => product.price > 10000);
console.log(findProduct);

//task5

let marks = [80, 75, 90, 60];

let total = marks.reduce((sum, mark) => sum + mark, 0);

console.log("Total Marks:", total);
let average = total / marks.length;

console.log("Average Marks:", average);

//task6

let ages = [12, 15, 17, 22];

let ageabove18 = ages.some(age => age > 18);

console.log(ageabove18); 

//task7

const scores = [60, 70, 80, 90];
const passMark = 35;

const allstudentsPassed = scores.every(score => score > passMark);

console.log(allstudentsPassed); 


//task 8

let sortprice=[200, 40, 1000, 5, 75]

let sort = sortprice.sort(( a,b)=>{

  return a-b;
})

let sort1 = sortprice.sort(( a,b)=>{

  return b-a;
})


console.log(sort); //Ascending
console.log(sort1); //Descending

//task9

let name = "naveen";

let Capsname= name[0].toUpperCase() + name.slice(1);

console.log(Capsname); 

//task10

let text = "javascript";

let count = text.split("a").length - 1;

console.log(count); 

//task11

let userInput = "   Hello World   ";

let cleanInput = userInput.trim().toUpperCase();

console.log(cleanInput); 

//task12

let sentence = "I love python";

let newSentence = sentence.replace("python", "javascript");

let startsWithI = newSentence.startsWith("I");


let endsWithJS = newSentence.endsWith("javascript");

console.log("New Sentence:", newSentence); //
console.log("Starts with 'I'?:", startsWithI); 
console.log("Ends with 'javascript'?:", endsWithJS); 

//TASK13

let employees = [
  { name: "A", salary: 25000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 15000 },
  { name: "D", salary: 60000 }
];


let morethan30= employees.filter(emp => emp.salary > 30000);


let firstempmore = employees.find(emp => emp.salary > 30000);


let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);


let lessthan20 = employees.some(emp => emp.salary < 20000);


let morethan10 = employees.every(emp => emp.salary > 10000);

console.log(morethan30);

console.log(firstempmore);

console.log(totalSalary);

console.log(lessthan20);

console.log(morethan10);


