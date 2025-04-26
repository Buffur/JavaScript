const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        const span = document.createElement('span');
        span.textContent = taskText;
        
        const deleteButton = document.createElement('span');
        deleteButton.textContent = '✖';
        deleteButton.className = 'delete-btn';
        
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        
        li.appendChild(span);
        li.appendChild(deleteButton);
        
        taskList.appendChild(li);
        
        taskInput.value = '';
    }
});