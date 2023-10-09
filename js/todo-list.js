const todoForm = document.getElementById("todo-form");
        const taskInput = document.getElementById("task");
        const taskList = document.getElementById("task-list");

        const tasks = [];

        function addTask(taskText) {
            tasks.push({ text: taskText, completed: false });
            updateTaskList();
        }

        function removeTask(index) {
            tasks.splice(index, 1);
            updateTaskList();
        }

        function editTask(index, newText) {
            tasks[index].text = newText;
            updateTaskList();
        }

        function toggleCompletion(index) {
            tasks[index].completed = !tasks[index].completed;
            updateTaskList();
        }

        function updateTaskList() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const listItem = document.createElement("li");
                listItem.className = "list-group-item d-flex justify-content-between align-items-center";
                
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = task.completed;
                checkbox.onchange = () => toggleCompletion(index);
                
                const taskText = document.createElement("span");
                taskText.style.textDecoration = task.completed ? "line-through" : "none";
                taskText.textContent = task.text;
                
                const buttonGroup = document.createElement("div");
                buttonGroup.className = "btn-group";
                
                const editButton = document.createElement("button");
                editButton.className = "btn btn-warning btn-sm";
                editButton.textContent = "Redigera";
                editButton.onclick = () => {
                    const newText = prompt("Redigera uppgiften:", task.text);
                    if (newText !== null) {
                        editTask(index, newText);
                    }
                };
                
                const deleteButton = document.createElement("button");
                deleteButton.className = "btn btn-danger btn-sm";
                deleteButton.textContent = "Ta bort";
                deleteButton.onclick = () => removeTask(index);
                
                buttonGroup.appendChild(editButton);
                buttonGroup.appendChild(deleteButton);
                
                listItem.appendChild(checkbox);
                listItem.appendChild(taskText);
                listItem.appendChild(buttonGroup);
                
                taskList.appendChild(listItem);
            });
        }

        todoForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                taskInput.value = "";
            }
        });

        updateTaskList();