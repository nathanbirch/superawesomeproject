const addTodo = (event) => {
  if (event.key === 'Enter') {
    const todoItem = document.getElementById('todoInput').value;
    if (todoItem) {
      const todoList = document.getElementById('todoList');
      const todoItemElement = document.createElement('li');
      todoItemElement.innerText = todoItem;

      // Create delete button with FontAwesome icon
      const deleteButton = document.createElement('span');
      deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
      deleteButton.classList.add('delete-btn');
      deleteButton.onclick = function () {
        deleteTodo(todoItemElement);
      };

      // Append delete button to the list item
      todoItemElement.appendChild(deleteButton);
      todoList.appendChild(todoItemElement);

      document.getElementById('todoInput').value = '';
    }
  }
};

const deleteTodo = (element) => {
  element.remove();
};

document.getElementById('todoInput').addEventListener('keypress', addTodo);
