const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


function addTask() {
    const taskText = taskInput.value.trim();


    if (taskText) {
        const listItem = document.createElement('li');
        listItem.classList.add('task', 'green');
        
        listItem.innerHTML = `
            <label>${taskText}</label>
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(listItem);


        const deleteBtn = listItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        taskInput.value = '';
    }
}


addTaskBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});