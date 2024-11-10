import { initCount } from "../../../../shared/auto-increment.js";
import taskOperations from "../service/dashboard-service.js";

window.addEventListener("load", initEvent);

function initEvent(){
    isAlreadyLogin();
    loadAllTasks();
    document.querySelector("#add").addEventListener("click",addTask);
    document.querySelector("#save").addEventListener("click",saveTasks);
}

function isAlreadyLogin(){
    if(localStorage.user){
        document.querySelector("#greet").innerText = "Welcome To ";
    }

    else{
        location.href = "user.html"
    }
}
const ids = initCount() 
function addTask(){
    const fields = ['title', 'desc', 'date', 'priority'];
    const taskObject = {};
    taskObject.id = ids();
    for(let field of fields){
          taskObject[field] = document.querySelector(`#${field}`).value;
    }
    console.log(taskObject);
    for(let field of fields){
        document.querySelector(`#${field}`).value = "";
  }
    const task = taskOperations.add(taskObject);
    console.log("final ", task);
    printTask(task)
}

function printTask(task){
    const tbody = document.querySelector("#task-rows");
    const tr = tbody.insertRow();
    for(let key in task){
        if(key == "isDeleted"  || key == "newlyAdded" || key == "important"){
            continue
        }
        const td = tr.insertCell();
        td.innerText = task[key];
    }
    const td = tr.insertCell();
    td.appendChild(createIcon("fa-solid fa-pen-to-square me-3"));
    td.appendChild(createIcon("fa-solid fa-trash"));
}


function createIcon(className){
    const icon = document.createElement('i');
    icon.className = className
    return icon;
}

function saveTasks(){
    var obj = taskOperations.getAllTasks();
    var json = JSON.stringify(obj);
    if(localStorage){
        localStorage.tasks = json;
        alert("Data Saved")
    }
    else{
        alert("Outdated Browser");
    } 
}

function loadAllTasks(){
    const taskArray = taskOperations.loadAllSavedTasks();
    for(let item in taskArray){
        printTask(taskArray[item])
    }
}