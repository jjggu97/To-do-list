function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var tasksList = document.getElementById("tasks");
    var newTask = document.createElement("li");

    // Add a checkbox to mark the task as completed
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        if (checkbox.checked) {
            newTask.classList.add("completed");
        } else {
            newTask.classList.remove("completed");
        }
    };

    // Add a button to remove the task
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    removeButton.onclick = function () {
        tasksList.removeChild(newTask);
    };

    newTask.appendChild(checkbox);
    newTask.appendChild(document.createTextNode(" ")); // Add space between checkbox and task text
    newTask.appendChild(document.createTextNode(taskText));
    newTask.appendChild(removeButton);
    tasksList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
}
