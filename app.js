var taskInput = document.getElementById("task");
var add = document.getElementById("add");
var taskList = document.getElementById("tasklist");
var clearButton = document.getElementById("clear");
var errorMSG = document.getElementById("error");
var finishedList = document.getElementById("finished");

add.addEventListener("click", function(){
    var  task = taskInput.value;
    if (task.trim()){
        var newItem = document.createElement("li");
        var newTask = document.createTextNode(task);
        newItem.appendChild(newTask);

        task.value = " ";   
        taskList.appendChild(newItem);
    }
    
    else{
        errorMSG.innerHTML = "Task cannot be empty";
    }

    var removeButton = document.createElement("Button");
    removeButton.innerHTML = "Done"
    removeButton.className = "remove"
    removeButton.addEventListener("click", removeTask);
    newItem.appendChild(removeButton);
    taskList.appendChild(newItem);

    errorMSG.remove("errorMSG");
})

clearButton.addEventListener("click", function(){
    taskList.innerHTML = " ";
})

function removeTask(e){
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);

    var oldList = document.createElement("li");
    var  remList = document.adoptNode(taskItem);
    finishedList.appendChild(remList);
    finishedList.removeEventListener(removeButton);
    finishedList.style.textDecoration = "line-through";
}