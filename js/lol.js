const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

// Skapa en JavaScript-array för att lagra uppgifter
const tasks = [];

// Funktion för att lägga till en uppgift
function addTask(taskText) {
    tasks.push(taskText);
    updateTaskList();
}

// Funktion för att ta bort en uppgift
function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

// Funktion för att uppdatera uppgiftslistan på sidan
function updateTaskList() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.innerHTML = `
            ${task}
            <button type="button" class="btn btn-danger btn-sm" onclick="removeTask(${index})">Ta bort</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Lägg till en händelselyssnare för formuläret
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

// Initial uppdatering av listan
updateTaskList();