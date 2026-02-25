
document.addEventListener("DOMContentLoaded", function () {

    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    
    function createTask(taskText) {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;

        return listItem;
    }

    
    function addTask() {
        const taskText = taskInput.value.trim();

        if (!taskText) {
            alert("Please enter a task.");
            return;
        }

        const newTask = createTask(taskText);
        taskList.appendChild(newTask);
        taskInput.value = "";
    }

    
    addTaskBtn.addEventListener("click", addTask);


    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    
    taskList.addEventListener("click", function (event) {

    
        if (event.target.classList.contains("delete-btn")) {
            event.target.parentElement.remove();
        }


        if (event.target.classList.contains("task-text")) {
            event.target.parentElement.classList.toggle("completed");
        }
    });

});