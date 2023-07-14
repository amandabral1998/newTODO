const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

const addList = document.getElementById("add-lists");

const addBtn = document.getElementById("add-input");

const input = document.getElementById("input-value");

addBtn.addEventListener("click", () => {
  // console.log("clicked");
  const inputValue = input.value;
  if (input.value == "") alert("Enter some Data");
  else {
    todoList.push(inputValue);
    localStorage.setItem("todolist", JSON.stringify(todoList));
    addList.innerHTML = "";

    for (let i = 0; i < todoList.length; i++) {
      addList.innerHTML += ` <tr>
<th scope="row" class="spaces">${i + 1}</th>
<td class="wide spaces">
 ${todoList[i]}
</td>
<td class="spaces">
  <h4>
    <i
      class="bi bi-pencil-square"
      data-index="${i}"
      id="edit-todo"
      style="color: rgb(19, 239, 78)"
    ></i>
  </h4>
</td>
<td class="spaces">
  <h4>
    <i
      class="bi bi-trash"
      data-index="${i}"
      id="delete-todo"
      style="color: rgb(255 52 52)"
    ></i>
  </h4>
</td>
</tr>`;
      input.value = "";
    }
  }
});

addList.addEventListener("click", (e) => {
  const target = e.target;
  if (target.id == "delete-todo") {
    const index = Number(target.getAttribute("data-index"));
    let yes_no = confirm(`Do you want to delete the todo #${index + 1}`);
    if (yes_no) {
      todoList.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(todoList));
      addList.innerHTML = "";

      for (let i = 0; i < todoList.length; i++) {
        addList.innerHTML += ` <tr>
   <th scope="row" class="spaces">${i + 1}</th>
   <td class="wide spaces">
    ${todoList[i]}
   </td>
   <td class="spaces">
     <h4>
       <i
         class="bi bi-pencil-square"
         data-index="${i}"
         id="edit-todo"
         style="color: rgb(19, 239, 78)"
       ></i>
     </h4>
   </td>
   <td class="spaces">
     <h4>
       <i
         class="bi bi-trash"
         data-index="${i}"
         id="delete-todo"
         style="color: rgb(255 52 52)"
       ></i>
     </h4>
   </td>
   </tr>`;
      }
      input.value = ""
    }
  }
  else if(target.id =="edit-todo") {
   const index = Number(target.getAttribute('data-index'))
   const todo = todoList[index]
   const newTodo = prompt('Edit your List here' , todo)
   todoList[index] =  newTodo ? newTodo.trim() : null
   localStorage.setItem('todolist' , JSON.stringify(todoList))
   addList.innerHTML = "";

   for (let i = 0; i < todoList.length; i++) {
     addList.innerHTML += ` <tr>
<th scope="row" class="spaces">${i + 1}</th>
<td class="wide spaces">
 ${todoList[i]}
</td>
<td class="spaces">
  <h4>
    <i
      class="bi bi-pencil-square"
      data-index="${i}"
      id="edit-todo"
      style="color: rgb(19, 239, 78)"
    ></i>
  </h4>
</td>
<td class="spaces">
  <h4>
    <i
      class="bi bi-trash"
      data-index="${i}"
      id="delete-todo"
      style="color: rgb(255 52 52)"
    ></i>
  </h4>
</td>
</tr>`;
   }
   input.value = ""
  }
});
