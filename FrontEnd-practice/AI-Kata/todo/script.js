document.getElementById('taskForm').addEventListener('submit', addTask);
document.addEventListener('DOMContentLoaded', displayTasks);

function addTask(e) {
    e.preventDefault();
    
    let taskName = document.getElementById('taskName').value.trim();
    let taskDesc = document.getElementById('taskDesc').value.trim();
    
    if (!taskName) {
        alert('Task name is required!');
        return;
    }
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (tasks.some(task => task.name === taskName)) {
        alert('Task already exists!');
        return;
    }
    
    let newTask = {
        name: taskName,
        description: taskDesc,
        timestamp: new Date().toISOString(),
        completed: false
    };
    
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
    
    document.getElementById('taskForm').reset();
}

function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let taskItems = document.getElementById('taskItems');
    let completedItems = document.getElementById('completedItems');
    
    taskItems.innerHTML = '';
    completedItems.innerHTML = '';
    
    tasks.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <strong>${task.name}</strong>: ${task.description || 'No description'}
            <button onclick="deleteTask(${index})" class="btn btn-danger btn-sm float-right">Delete</button>
            <button onclick="editTask(${index})" class="btn btn-info btn-sm float-right mr-2">Edit</button>
            <button onclick="toggleCompletion(${index})" class="btn btn-warning btn-sm float-right mr-2">${task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}</button>
        `;
        
        if (task.completed) {
            li.classList.add('completed');
            completedItems.appendChild(li);
        } else {
            taskItems.appendChild(li);
        }
    });
    
    document.getElementById('completedTasks').style.display = completedItems.childNodes.length > 0 ? 'block' : 'none';
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let task = tasks[index];
    
    let newName = prompt('Enter new task name:', task.name);
    if (newName) task.name = newName.trim();
    
    let newDesc = prompt('Enter new task description:', task.description);
    if (newDesc !== null) task.description = newDesc.trim();
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function toggleCompletion(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}