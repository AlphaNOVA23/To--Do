const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim(); 

    if (taskText !== '') {
        addTaskToList(taskText); 
        taskInput.value = '';
    } else {
        alert('Please enter a task.'); 
    }
});

function addTaskToList(taskText) {

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li); 
    });
}
