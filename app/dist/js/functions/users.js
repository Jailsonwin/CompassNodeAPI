"use strict";
function fetchUsers() {
    fetch('http://localhost:3000/users')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        listUsers(data);
    });
}
function listUsers(users) {
    return users.map(function (user) {
        var _a;
        let ul = document.createElement('ul');
        let name = document.createElement('li');
        let cpf = document.createElement('li');
        let birthDate = document.createElement('li');
        let email = document.createElement('li');
        let password = document.createElement('li');
        let address = document.createElement('li');
        let number = document.createElement('li');
        let complement = document.createElement('li');
        let city = document.createElement('li');
        let state = document.createElement('li');
        let country = document.createElement('li');
        let zipCode = document.createElement('li');
        ul.classList.add("user-ul");
        let edit = document.createElement('button');
        edit.innerHTML = "Edit";
        edit.classList.add("edit-btn");
        edit.setAttribute('onclick', 'editUser(this)');
        edit.setAttribute('id', user._id);
        let remove = document.createElement('button');
        remove.innerHTML = "Remove";
        remove.classList.add("remove-btn");
        remove.setAttribute('onclick', 'removeUser(this)');
        remove.setAttribute('id', user._id);
        name.innerHTML = `<span>Name: </span>${user.name}`;
        cpf.innerHTML = `<span>CPF: </span>${user.cpf}`;
        birthDate.innerHTML = `<span>Birthdate: </span>${user.birthDate}`;
        email.innerHTML = `<span>Email: </span>${user.email}`;
        password.innerHTML = `<span>Password: </span>${user.password}`;
        address.innerHTML = `<span>Address: </span>${user.address}`;
        number.innerHTML = `<span>Number: </span>${user.number}`;
        complement.innerHTML = `<span>Complement: </span>${user.complement}`;
        city.innerHTML = `<span>City: </span>${user.city}`;
        state.innerHTML = `<span>State: </span>${user.state}`;
        country.innerHTML = `<span>Country: </span>${user.country}`;
        zipCode.innerHTML = `<span>Zip Code: </span>${user.zipCode}`;
        ul.appendChild(name);
        ul.appendChild(cpf);
        ul.appendChild(birthDate);
        ul.appendChild(email);
        ul.appendChild(password);
        ul.appendChild(address);
        ul.appendChild(number);
        ul.appendChild(complement);
        ul.appendChild(city);
        ul.appendChild(state);
        ul.appendChild(country);
        ul.appendChild(zipCode);
        ul.appendChild(edit);
        ul.appendChild(remove);
        (_a = document.querySelector(".users-container")) === null || _a === void 0 ? void 0 : _a.appendChild(ul);
    });
}
function addUser(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const cpf = document.getElementById('cpf');
    const birthDate = document.getElementById('birthdate');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const address = document.getElementById('address');
    const number = document.getElementById('number');
    const complement = document.getElementById('complement');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const country = document.getElementById('country');
    const zipCode = document.getElementById('zipCode');
    let data = {
        name: `${name.value}`,
        cpf: `${cpf.value}`,
        birthDate: `${birthDate.value}`,
        email: `${email.value}`,
        password: `${password.value}`,
        address: `${address.value}`,
        number: `${number.value}`,
        complement: `${complement.value}`,
        city: `${city.value}`,
        state: `${state.value}`,
        country: `${country.value}`,
        zipCode: `${zipCode.value}`
    };
    fetch('http://localhost:3000/users', {
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
    name.value = "";
    cpf.value = "";
    birthDate.value = "";
    email.value = "";
    password.value = "";
    address.value = "";
    number.value = "";
    complement.value = "";
    city.value = "";
    state.value = "";
    country.value = "";
    zipCode.value = "";
}
function editUser(p) {
    fetch(`http://localhost:3000/users/${p.id}`, {
        method: "GET"
    }).then(function (response) {
        return response.json();
    })
        .then(function (data) {
        populateInputUser(data);
        var modal = document.getElementById("modal");
        var cancel = document.getElementById("modalCancel");
        modal.style.display = "block";
        cancel.onclick = function () {
            modal.style.display = "none";
        };
    });
}
function putUserData(p) {
    const name = document.getElementById('nameEdit');
    const cpf = document.getElementById('cpfEdit');
    const birthdate = document.getElementById('birthdateEdit');
    const email = document.getElementById('emailEdit');
    const password = document.getElementById('passwordEdit');
    const address = document.getElementById('addressEdit');
    const number = document.getElementById('numberEdit');
    const complement = document.getElementById('complementEdit');
    const city = document.getElementById('cityEdit');
    const state = document.getElementById('stateEdit');
    const country = document.getElementById('countryEdit');
    const zipCode = document.getElementById('zipCodeEdit');
    let dataEdit = {
        name: `${name.value}`,
        cpf: `${cpf.value}`,
        birthDate: `${birthdate.value}`,
        email: `${email.value}`,
        password: `${password.value}`,
        address: `${address.value}`,
        number: `${number.value}`,
        complement: `${complement.value}`,
        city: `${city.value}`,
        state: `${state.value}`,
        country: `${country.value}`,
        zipCode: `${zipCode.value}`
    };
    fetch(`http://localhost:3000/users/${p.id}`, {
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
function populateInputUser(data) {
    const name = document.getElementById('nameEdit');
    const cpf = document.getElementById('cpfEdit');
    const birthDate = document.getElementById('birthdateEdit');
    const email = document.getElementById('emailEdit');
    const password = document.getElementById('passwordEdit');
    const address = document.getElementById('addressEdit');
    const number = document.getElementById('numberEdit');
    const complement = document.getElementById('complementEdit');
    const city = document.getElementById('cityEdit');
    const state = document.getElementById('stateEdit');
    const country = document.getElementById('countryEdit');
    const zipCode = document.getElementById('zipCodeEdit');
    const confirm = document.querySelector('[name="editConfirm"]');
    confirm.setAttribute('id', data._id);
    name.value = data.name;
    cpf.value = data.cpf;
    birthDate.value = data.birthDate;
    email.value = data.email;
    password.value = data.password;
    address.value = data.address;
    number.value = data.number;
    complement.value = data.complement;
    city.value = data.city;
    state.value = data.state;
    country.value = data.country;
    zipCode.value = data.zipCode;
}
function removeUser(p) {
    fetch(`http://localhost:3000/users/${p.id}`, {
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
        .then(data => listUsers(data))
        .catch(error => console.log(error));
}
const userSearch = document.getElementById("user-search");
userSearch.addEventListener("input", function () {
    var _a;
    var userCards = document.querySelectorAll(".user-ul");
    if (userSearch.value.length > 0) {
        for (var i = 0; i < userCards.length; i++) {
            var userCard = userCards[i];
            var allLi = userCard.querySelectorAll("li");
            var searchString = "";
            let regex = new RegExp(this.value, "i");
            for (let i = 0; i < allLi.length; i++) {
                searchString += (_a = allLi[i].textContent) === null || _a === void 0 ? void 0 : _a.split(": ")[1];
            }
            !regex.test(searchString) ?
                userCard.style.display = "none" :
                userCard.style.display = "flex";
        }
    }
    else {
        for (var i = 0; i < userCards.length; i++) {
            var userCard = userCards[i];
            userCard.style.display = "flex";
        }
    }
});
