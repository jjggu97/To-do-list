function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var tasksList = document.getElementById("tasks");
    var newTask = document.createElement("li");
    newTask.textContent = taskText;

    // Add a button to remove the task
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    removeButton.onclick = function () {
        tasksList.removeChild(newTask);
    };

    newTask.appendChild(removeButton);
    tasksList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
}
