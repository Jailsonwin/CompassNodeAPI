"use strict";
function fetchTasks() {
    fetch('http://localhost:3000/tasks')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        listTasks(data);
    });
}
function listTasks(tasks) {
    return tasks.map(function (task) {
        const ul = document.getElementById('tasks');
        let description = document.createElement('li');
        let user = document.createElement('li');
        let date = document.createElement('li');
        user.classList.add("last-li");
        description.innerHTML = `<span>Description: </span>${task.description}`;
        date.innerHTML = `<span>Task date: </span>${task.date}`;
        user.innerHTML = `<span>User: </span>${task.user}`;
        ul.appendChild(description);
        ul.appendChild(date);
        ul.appendChild(user);
    });
}
