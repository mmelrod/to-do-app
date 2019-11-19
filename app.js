function onReady() {
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');


  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id.value
   });
   newToDoText.value = '';

   renderTheUI();
   id = id+1;
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    const deleteToDo = document.getElementById('DelButton');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deletebutton = document.createElement('button');

      checkbox.type = "checkbox";

      deletebutton.textContent = "Delete";
      deletebutton.type = "DelButton";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deletebutton);
    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  deleteToDo.addEventListener('deleteToDo', event => {
    event.preventDefault();
    toDos = toDos.filter(id !==)
    renderTheUI();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
