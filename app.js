function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      var taskItem = document.createElement('li');
      taskItem.appendChild(document.createTextNode(taskInput.value));
      
      var deleteButton = document.createElement('button');
      deleteButton.appendChild(document.createTextNode('Delete'));
      deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
      };
      
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      
      taskInput.value = '';
    }

    function changeColor(color){
      document.body.style.backgroundcolor = color;
    }
  }
  