function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const taskList = document.getElementById("taskList");

    const task = document.createElement("li");

    task.innerHTML = `
        ${taskText}
        <button onclick="completeTask(this)">Complete</button>
    `;

    taskList.appendChild(task);

    input.value = "";
}

function completeTask(button) {
    const task = button.parentElement;
    task.classList.toggle("completed");
}
