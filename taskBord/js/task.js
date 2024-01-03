class TaskList {
    constructor(taskText,taskDate,taskTime) {
        this.taskText = taskText;
        this.taskDate = taskDate;
        this.taskTime = taskTime;
    }
}
var taskList = [];

const addTask = () => {
    taskText = document.getElementById("taskText").value;
    taskDate = document.getElementById("taskDate").value;
    taskTime = document.getElementById("taskTime").value;
    taskList.push(new TaskList(taskText,taskDate,taskTime));
    addNote(); 
    document.getElementById("taskForm").reset();
}

const addNote = () => {
    var note = ``;
    for (var index=0; index<taskList.length; index++) {
        note += `<div class="note">
                    <input type="button" class="btn-close closeBtn" onclick="deleteNote()"/>
                    <div class="taskText">${taskList[index].taskText}</div>
                    <div class="taskDate">${taskList[index].taskDate}</div>
                    <div class="taskTime">${taskList[index].taskTime}</div>
                 </div>`
    }
    document.getElementById("taskList").innerHTML = note;
}