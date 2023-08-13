const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="delete">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = '';

        const deleteButton = li.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
});
