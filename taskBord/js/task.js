class TaskList {
    constructor(taskText,taskDate,taskTime) {
        this.taskText = taskText;
        this.taskDate = taskDate;
        this.taskTime = taskTime;
    }
}

var taskList = JSON.parse(localStorage.getItem("notes"));

if (taskList == null) {
    taskList = [];
}

const addTask = () => {
    taskText = document.getElementById("taskText").value;
    taskDate = document.getElementById("taskDate").value;
    taskTime = document.getElementById("taskTime").value;

    if (new Date(taskDate+"T"+taskTime)<new Date()) {
        alert("you can not to add task in the past");
        return;
    }

    taskList.push(new TaskList(taskText,taskDate,taskTime));
    addNote(); 
    saveTasks();
    document.getElementById("taskForm").reset();
}

const addNote = () => {
    var note = ``;
    for (var index=0; index<taskList.length; index++) {
        note += `<div id="note${index}" class="note" onmouseover="showButton(${index})" onmouseout="hideButton(${index})">
                    <input id="deleteBtn${index}" type="button" class="btn-close closeBtn" onclick="deleteNote(${index})" style="opacity: 0"/>
                    <div class="taskText">${taskList[index].taskText}</div>
                    <div class="taskDate">${niceDate(taskList[index].taskDate)}</div>
                    <div class="taskTime">${taskList[index].taskTime}</div>
                 </div>`
    }
    document.getElementById("taskList").innerHTML = note;
}

const deleteNote = (index) => {
    taskList.splice(index, 1);
    addNote();
    saveTasks();
}

const saveTasks = () => {
    localStorage.setItem("notes",JSON.stringify(taskList));
}

const showButton = (index) => {
    document.getElementById("deleteBtn"+index).style.opacity=1;
}

const hideButton = (index) => {
    document.getElementById("deleteBtn"+index).style.opacity=0;
}

const niceDate = (uglyDate) => {
    var newDate = uglyDate.split('-');
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
}

addNote();




