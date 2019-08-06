 function addTask(){
taskName = document.getElementById("taskName").value;

currentList = document.querySelector(".task-list").innerHTML;
document.querySelector(".task-list").innerHTML=currentList + "<br>" + taskName;
}