let count = 0;

let clock = setInterval(() => {

  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let pm_am = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  if (hours < 10) {
    hours = "0" + hours; 
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  console.log(hours + " : " + minutes + " : " + seconds + " " + pm_am);

  count++;

  if (count === 10) {
    clearInterval(clock);
    console.log("Clock Stopped");
  }

}, 1000);

// Task 2 – Age Calculator

function calculateAge() {

let birthYear = prompt("Enter Birth Year:");
let birthMonth = prompt("Enter Birth Month:");
let birthDay = prompt("Enter Birth Date:");

    let today = new Date();

    let birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days = days + lastMonth.getDate(); 
    }

    if (months < 0) {
        years--;
        months = months + 12;
    }

    console.log(`Current Age: ${years} years, ${months} months, and ${days} days.`);
}

calculateAge();

//TASK3

//Explain why 'Middle' comes last and what is Event Loop
//in java script, in the background 3 engines are call stack, webApi and callbackquee.
//callstack will call only render for synchronousn not capable of asynchronous.
//WebApi is nothing but search engine like google chrome
//Callbackquee only render for asynchronous
//in javascript, line by line execution takes place.
//the Middle output line asynchronous code, this will come inside the call stack, since call stack render 
// only synchronous, it will push it to WebApi side. The WebApi process split function and time.
//The function split inside callbackquee and the time split in the event loop inside. The event loop process
//after the given time is done, and will trigger inside the callbackquee and if any function is there, it will
//push to inside the call stack, here through flip process, means path and value, here the path is console 
// and the value is "Middle". after split callback going to print in the last.

//Event loop : This will handle asynchronous operations without blocking the main   thread.

console.log("Start");
setTimeout(() => { console.log("Middle"); }, 0);
console.log("End")

//TASK4

let number = 10;
let timer = setInterval(() => {
  console.log(number);
  number--;

  if (number < 0) {
    clearInterval(timer);
    console.log("Time Up!");
  }
}, 1000);

//TASK5

function checkResult(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 35) {
            resolve("Pass");
        } else {
            reject("Fail");
        }
    });
}

checkResult(40)
    .then(result => {
        console.log("Result:", result);
    })
    .catch(error => {
        console.log("Result:", error);
    })
    .finally(() => {
        console.log("Exam process completed.");
    });


  //TASK6

  function step1() {
  return Promise.resolve("Step 1 Completed");
}

function step2() {
  return Promise.resolve("Step 2 Completed");
}

function step3() {
  return Promise.resolve("Step 3 Completed");
}
step1()
  .then(res => {
    console.log(res);
    return step2();
  })
  .then(res => {
    console.log(res);
    return step3();
  })
  .then(res => {
    console.log(res);
    console.log("All Steps Done");
  });

  //TASK7

  fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    console.log("Total Products:", data.length);

    data.forEach(product => {
      console.log(product.title);
    });

    console.log("First Product Price:", data[0].price);
  });


  //task8

  fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    const expensive = data
      .filter(product => product.price > 500)
      .map(product => ({
        title: product.title,
        price: product.price
      }));

    console.log(expensive);
  });


  //task9

  fetch("https://fakestoreapi.com/product")
  .then(res => {
    if (!res.ok) {
      throw new Error("Failed to load products");
    }
    return res.json();
  })
  .then(data => console.log(data))
  .catch(() => {
    console.log("Failed to load products. Please try again.");
  });


  //Mini Project


  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load products.");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("loading").style.display = "none";
            document.getElementById("count").innerText =
                "Total Products: " + data.length;

            displayProducts(data);
        })
        .catch(error => {
            document.getElementById("loading").style.display = "none";
            document.getElementById("error").innerText =
                "Failed to load products. Please try again.";
        });
}

function displayProducts(products) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(product => {
        const card = `
            <div class="card">
                <h4>${product.title}</h4>
                <img src="${product.image}" alt="${product.title}">
                <p><strong>Price:</strong> $${product.price}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}

fetchProducts();
