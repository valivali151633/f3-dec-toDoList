document.addEventListener("DOMContentLoaded" , function(){
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit" , function(event){
        event.preventDefault();
        const taskName = document.getElementById("taskName").value;
        if(taskName.trim() === ""){
            alert("please enter a task name");
        }
        const task = {
            name: taskName
        };
        addTask(task);
         taskForm.reset();
        
    });
    function addTask(task){
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        const taskInfo = document.createElement("span");
        taskInfo.innerHTML = `<strong>${task.name}</strong>`;

        const editButton = document.createElement("button");
        editButton.innerText = "edit";
        editButton.classList.add("submitBtn");
        editButton.addEventListener("click" , function(){
            const newName = prompt("enter the new task name:" , task.name);
            if(newName !== null){
                task.name=newName
                taskInfo.innerHTML = `<strong>${task.name}</strong>`;
            }
        });
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("submitBtn");
        deleteButton.addEventListener("click" , function(){
            taskItem.remove();
        });
        taskItem.appendChild(taskInfo);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }
});




