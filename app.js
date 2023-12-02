let todoList = document.getElementById("todolist");
let savebtn = document.getElementById("save");
let todobtn = document.getElementById("addTodobtn");
let dltAllBtn = document.getElementById("deleteAlltodo");
let editedLi = null;
savebtn.style.display = "none";
dltAllBtn.style.display = "none";
function addTodo() {
  let getTodoInput = document.getElementById("todoinput");
  let todoInputValue = getTodoInput.value;
  if (todoInputValue.trim()) {
    let creatLi = document.createElement("li");
    creatLi.innerText = todoInputValue;
    dltAllBtn.style.display = "inline-block";

    todoList.appendChild(creatLi);
    // creat edit btn
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    creatLi.appendChild(editBtn);
    //    creat delete btn
    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    creatLi.appendChild(dltBtn);

    dltBtn.addEventListener("click", function () {
      creatLi.remove();
      if (todoList.children.length === 0) {
        dltAllBtn.style.display = "none";
      }
      // console.log(todoList.children.length)
    });
    editBtn.addEventListener("click", function () {
      let editLiText = creatLi.childNodes[0].nodeValue;
      // console.log(a);
      getTodoInput.value = editLiText;
      savebtn.style.display = "inline-block";
      todobtn.style.display = "none";
      editedLi = creatLi;
      // console.log(editedLi);
    });
    savebtn.addEventListener("click", function () {
      savebtn.style.display = "none";
      todobtn.style.display = "inline-block";
      editedLi.childNodes[0].nodeValue = getTodoInput.value;
    });
  }else{
    alert("please enter TODO")
  }

  
  getTodoInput.value = "";

}
dltAllBtn.addEventListener("click", function(){
  // console.log(todoList.children);
  if (todoList.children.length>0) {
    todoList.innerHTML=null;  
    dltAllBtn.style.display="none";
  }
})
