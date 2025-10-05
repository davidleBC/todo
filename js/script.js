const newItem = document.createElement('div');
const projBtn = document.querySelector('#createProject');
const projList = document.querySelector('#projList');

projBtn.addEventListener('click', (event) => {
  projList.appendChild(newItem);
  newItem.append('cat ');

})

function createTodo (title, description, dueDate, priority) {
    

  return {title, description, dueDate, priority}

}

function createProj (name) {

  return {name}
}