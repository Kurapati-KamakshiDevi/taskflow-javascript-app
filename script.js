function addTask(){

  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if(task === ""){
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = task;

  li.onclick = function(){
    li.style.textDecoration = "line-through";
    li.style.opacity = "0.6";
  }

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
