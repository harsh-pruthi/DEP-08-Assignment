const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoInput.addEventListener('input', ()=>{
    console.log(todoInput.value);

})

let todos = [];

 
function renderTodos() {
    todoList.innerHTML = '';
    for (let index = 0; index < todos.length; index++) {
        const todo = todos[index];
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <div class="todo-actions">
                <button onclick="toggleTodo(${index})">${todo.completed ? 'Undo' : 'Complete'}</button>
                <button class="edit-btn" onclick="editTodo(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    }
}

function addTodo() {
    const todoText = todoInput.value.trim();
    console.log(todoText)
    if (todoText) {
        todos.push({
            text: todoText,
            completed: false
        });
        todoInput.value = '';
        renderTodos();
    }
}

function editTodo(index) {
    const newText = prompt('Edit todo:', todos[index].text);
    const completed = prompt('Edit status');
    if (newText !== null) {
        todos[index].text = newText.trim();
        todos[index].text = completed;
        renderTodos();
    }
}

function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo?')) {
        todos.pop(index);
        renderTodos();
    }
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}


todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

renderTodos(); 