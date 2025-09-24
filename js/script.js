const item = document.querySelector('#display');
const newTodo = document.createElement('div');

document.querySelector("button").addEventListener('click', (event) => {
  item.append(newTodo);  
})