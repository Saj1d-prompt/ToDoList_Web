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
                        <button onclick="completeTask(this)"> ✔ </button>
                        <button onclick="deleteTask(this)"> ✘ </button>
                    </div>
                        `;

    taskList.appendChild(listItem);
    taskInp.value = "";
}

function completeTask(button){
    const listItem = button.closest("li");
    listItem.querySelector("span").classList.toggle("completed");
}

function deleteTask(button){
    const listItem = button.closest("li");
    listItem.remove();
}