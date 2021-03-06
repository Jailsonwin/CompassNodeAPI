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
        var _a;
        let ul = document.createElement('ul');
        let description = document.createElement('li');
        let user = document.createElement('li');
        let date = document.createElement('li');
        ul.classList.add("task-ul");
        description.id = "description";
        date.id = "date";
        user.id = "user";
        let edit = document.createElement('button');
        edit.innerHTML = "Edit";
        edit.classList.add("edit-btn");
        edit.setAttribute('onclick', 'editTask(this)');
        edit.setAttribute('id', task._id);
        let remove = document.createElement('button');
        remove.innerHTML = "Remove";
        remove.classList.add("remove-btn");
        remove.setAttribute('onclick', 'removeTask(this)');
        remove.setAttribute('id', task._id);
        description.innerHTML = `<span>Description: </span>${task.description}`;
        date.innerHTML = `<span>Task date: </span>${task.date}`;
        user.innerHTML = `<span>User: </span>${task.user.name}`;
        ul.appendChild(description);
        ul.appendChild(date);
        ul.appendChild(user);
        (_a = document.querySelector(".users-container-none")) === null || _a === void 0 ? void 0 : _a.appendChild(ul);
        ul.appendChild(edit);
        ul.appendChild(remove);
        paginationtsk();
    });
}
function addTask(event) {
    event.preventDefault();
    const description = document.getElementById('description');
    const datetime = document.getElementById('time');
    const user = document.getElementById('user');
    let data = {
        description: `${description.value}`,
        date: `${datetime.value}`,
        user: `${user.value}`
    };
    fetch('http://localhost:3000/tasks', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (json) {
        console.log(json);
    });
    //setTimeout(function(){
    //    location.href = './tasks.html'
    //},2000);
    description.value = "";
    datetime.value = "";
    user.value = "";
}
const taskSearch = document.getElementById("task-search");
taskSearch.addEventListener("input", function () {
    var _a, _b, _c;
    var taskCards = document.querySelectorAll(".task-ul");
    if (taskSearch.value.length > 0) {
        for (var i = 0; i < taskCards.length; i++) {
            var taskCard = taskCards[i];
            var descLi = taskCard.querySelector("#description");
            var dateLi = taskCard.querySelector("#date");
            var userLi = taskCard.querySelector("#user");
            let regex = new RegExp(this.value, "i");
            var searchString = (_a = descLi.textContent) === null || _a === void 0 ? void 0 : _a.split(": ")[1];
            searchString += (_b = dateLi.textContent) === null || _b === void 0 ? void 0 : _b.split("date: ")[1];
            searchString += (_c = userLi.textContent) === null || _c === void 0 ? void 0 : _c.split(": ")[1];
            !regex.test(searchString) ?
                taskCard.style.display = "none" :
                taskCard.style.display = "flex";
        }
    }
    else {
        for (var i = 0; i < taskCards.length; i++) {
            var taskCard = taskCards[i];
            taskCard.style.display = "flex";
        }
    }
});
function editTask(p) {
    console.log(p.id);
    fetch(`http://localhost:3000/tasks/${p.id}`, {
        method: "GET"
    }).then(function (response) {
        return response.json();
    })
        .then(function (data) {
        populateInputTask(data);
        var modal = document.getElementById("modal");
        var cancel = document.getElementById("modalCancel");
        modal.style.display = "block";
        cancel.onclick = function () {
            modal.style.display = "none";
        };
    });
}
function putTaskData(p) {
    const description = document.getElementById('descriptionEdit');
    const datetime = document.getElementById('timeEdit');
    const user = document.getElementById('userEdit');
    let dataEdit = {
        description: `${description.value}`,
        date: `${datetime.value}`,
        user: `${user.value}`
    };
    fetch(`http://localhost:3000/tasks/${p.id}`, {
        method: "PUT",
        body: JSON.stringify(dataEdit),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (json) {
        console.log(json);
    });
}
function populateInputTask(data) {
    const description = document.getElementById('descriptionEdit');
    const datetime = document.getElementById('timeEdit');
    const user = document.getElementById('userEdit');
    const confirm = document.querySelector('[name="editConfirm"]');
    confirm.setAttribute('id', data._id);
    description.value = data.description;
    datetime.value = data.date;
    user.value = data.user._id;
}
function removeTask(p) {
    fetch(`http://localhost:3000/tasks/${p.id}`, {
        method: "DELETE"
    })
        .then(res => {
        if (res.ok) {
            console.log("HTTP request successful");
            window.location.reload();
        }
        else {
            console.log("HTTP request unsuccessful");
        }
        return res;
    })
        .then(function (res) {
        return res.json();
    })
        .then(data => listTasks(data))
        .catch(error => console.log(error));
}
function populateSelectUser() {
    const select = document.querySelector('#user');
    fetch('http://localhost:3000/users')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        let option;
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            option.value = data[i]._id;
            select.appendChild(option);
        }
    });
}
function populateSelectEditUser() {
    const select = document.querySelector('#userEdit');
    fetch('http://localhost:3000/users')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        let option;
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            option.value = data[i]._id;
            select.appendChild(option);
        }
    });
}
function paginationtsk() {
    // Get total number of pages
    let usersp = document.querySelectorAll(".task-ul");
    const listArray = Array.from(usersp);
    // console.log(listArray)
    // State
    // Number of products
    const numberOfItems = listArray.length;
    const numberPerPage = 3;
    const currentPage = 1;
    // Number of pages
    const numberOfPages = Math.ceil(numberOfItems / numberPerPage);
    function accomodatePage(clickedPage) {
        if (clickedPage <= 1) {
            return clickedPage + 1;
        }
        if (clickedPage >= numberOfPages) {
            return clickedPage - 1;
        }
        return clickedPage;
    }
    function buildPagination(clickedPage) {
        $('.paginator').empty();
        const currPageNum = accomodatePage(clickedPage);
        if (numberOfPages >= 3) {
            for (let i = -1; i < 2; i++) {
                $('.paginator').append(`<button class="btn btn-primary" value="${currPageNum + i}">${currPageNum + i}</button>`);
            }
        }
        else {
            for (let i = 0; i < numberOfPages; i++) {
                $('.paginator').append(`<button class="btn btn-primary" value="${i + 1}">${i + 1}</button>`);
            }
        }
    }
    function buildPage(currPage) {
        const trimStart = (currPage - 1) * numberPerPage;
        const trimEnd = trimStart + numberPerPage;
        console.log(trimStart, trimEnd);
        console.log(listArray.slice(trimStart, trimEnd));
        $('.content').empty().append(listArray.slice(trimStart, trimEnd));
        // $('.grid-uniform').empty().append(listArray.slice(trimStart, trimEnd));
    }
    $(document).ready(function () {
        buildPage(1);
        buildPagination(currentPage);
        $('.paginator').on('click', 'button', function () {
            var clickedPage = parseInt($(this).val());
            buildPagination(clickedPage);
            console.log(`Page clicked on ${clickedPage}`);
            buildPage(clickedPage);
        });
    });
}
