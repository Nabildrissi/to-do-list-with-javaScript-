// Existing functionality for the regular To-do List
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');

    // Creating the task text span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Creating the container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'task-buttons';

    // Creating the update button
    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Modifier';
    updateBtn.className = 'updateBtn';

    updateBtn.addEventListener('click', function() {
        const newTaskText = prompt("Modifier la tâche:", taskSpan.textContent);

        if (newTaskText && newTaskText.trim() !== '') {
            taskSpan.textContent = newTaskText.trim();
        }
    });

    // Creating the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.className = 'deleteBtn';

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Append the buttons to the button container
    buttonContainer.appendChild(updateBtn);
    buttonContainer.appendChild(deleteBtn);

    // Append the task text and the buttons container to the list item
    li.appendChild(taskSpan);
    li.appendChild(buttonContainer);

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Append the list item to the task list
    taskList.appendChild(li);
}

// Filter functionality
document.getElementById('filterInput').addEventListener('input', function() {
    const filterText = this.value.toLowerCase();
    const tasks = document.querySelectorAll('#taskList li');

    tasks.forEach(function(task) {
        const taskText = task.querySelector('span').textContent.toLowerCase();
        if (taskText.includes(filterText)) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
});

// New functionality for the To-do List with checkboxes
document.getElementById('addCheckboxTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('checkboxTaskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addCheckboxTask(taskText);
        taskInput.value = '';
    }
});

function addCheckboxTask(taskText) {
    const taskList = document.getElementById('checkboxTaskList');

    const li = document.createElement('li');

    // Creating the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    // Creating the task text span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Creating the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.className = 'deleteBtn';

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Append the checkbox, task text, and delete button to the list item
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}