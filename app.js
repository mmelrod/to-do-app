function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create a new delete button
    let deleteButton = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    //label the delete button
    deleteButton.textContent = "Delete";

    // set the title
    newLi.textContent = title;

    deleteButton.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement);
    })

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the delete button to the li
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    });

}


window.onload = function() {
  onReady();
};
