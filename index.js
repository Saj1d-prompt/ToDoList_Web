const taskInp = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(){
    const task = taskInp.value.trim();
    if(task === ""){
        alert("Please Enter a Task");
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${task}</span>
                    <div>
                        <button onclick="completeTask(this)">Complete</button>
                        <button onclick="deleteTask(this)">Delete</button>
                    </div>
                        `;

    taskList.appendChild(listItem);
    taskInp.value = "";
}