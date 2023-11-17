function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = '<span>' + taskInput.value + '</span><button class="delete-button" onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(element) {
    var li = element.parentNode;
    li.parentNode.removeChild(li);
}
