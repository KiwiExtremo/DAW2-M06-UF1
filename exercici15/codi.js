var today = new Date();

window.onload = initialize;

function initialize() {
    document.getElementById("btnGetDate").onclick = getDate;
    document.getElementById("btnGetDay").onclick = getDay;
    document.getElementById("btnGetHours").onclick = getHours;
    document.getElementById("btnGetMinutes").onclick = getMinutes;
    document.getElementById("btnGetMonth").onclick = getMonth;
    document.getElementById("btnGetSeconds").onclick = getSeconds;
    document.getElementById("btnGetTime").onclick = getTime;
    document.getElementById("btnGetFullYear").onclick = getFullYear;
    document.getElementById("btnSetDate").onclick = setDate;
    document.getElementById("btnSetHours").onclick = setHours;
    document.getElementById("btnSetMinutes").onclick = setMinutes;
    document.getElementById("btnSetMonth").onclick = setMonth;
    document.getElementById("btnSetSeconds").onclick = setSeconds;
    document.getElementById("btnSetTime").onclick = setTime;
    document.getElementById("btnSetFullYear").onclick = setFullYear;
    document.getElementById("btnValidateDate").onclick = btnValidateDate;

    document.getElementById("today").innerHTML += today;
}

function getDate() {
    var div = document.getElementById("testDiv");

    div.innerHTML = `El dia del mes de la data és el ${today.getDate()}`;
}

function getDay() {
    var div = document.getElementById("testDiv");

    div.innerHTML = `El dia de la setmana de la datada és el ${today.getDay()}`;
}

function getHours() {
    var div = document.getElementById("testDiv");

    div.innerHTML = `Les hores de la data són les ${today.getHours()}`;
}

function getMinutes() {
    var div = document.getElementById("testDiv");

    div.innerHTML = `Els minuts de la data són ${today.getMinutes()}`;
}

function getMonth() {
    var div = document.getElementById("testDiv");

    div.innerHTML = `El mes de la data és el ${today.getMonth()}`;
}

function getSeconds() {
    var div = document.getElementById("testDiv");

    div.innerHTML = `Els segons de la data són ${today.getSeconds()}`;
}

function getTime() {
    var div = document.getElementById("testDiv");

    div.innerHTML = `Han passat ${today.getTime()} milisegons entre l'1 de gener de 1970 i la data`;
}

function getFullYear() {
    var div = document.getElementById("testDiv");

    div.innerHTML = `L'any de la data és ${today.getFullYear()}`;
}

function setDate() {
    var div = document.getElementById("testDiv");
    var newDate = new Date();

    newDate.setDate(15);

    div.innerHTML = `Al modificar el dia de la data a [dia 15], queda així: <br>${newDate}`;
}

function setHours() {
    var div = document.getElementById("testDiv");
    var newDate = new Date();

    newDate.setHours(23);

    div.innerHTML = `Al modificar les hores de la data a [23 hores], queda així: <br>${newDate}`;
}

function setMinutes() {
    var div = document.getElementById("testDiv");
    var newDate = new Date();

    newDate.setMinutes(45);

    div.innerHTML = `Al modificar els minuts de la data a [45 minuts], queda així: <br>${newDate}`;
}

function setMonth() {
    var div = document.getElementById("testDiv");
    var newDate = new Date();

    newDate.setMonth(newDate.getMonth() + 1);

    div.innerHTML = `Al modificar el mes de la data al [mes següent], queda així: <br>${newDate}`;
}

function setSeconds() {
    var div = document.getElementById("testDiv");
    var newDate = new Date();

    newDate.setSeconds(30);

    div.innerHTML = `Al modificar els segons de la data al [30 segons], queda així: <br>${newDate}`;
}

function setTime() {
    var div = document.getElementById("testDiv");
    var newDate = new Date();
    var startingDate = new Date();
    startingDate.setFullYear(startingDate.getFullYear() + 1);
    startingDate.setMonth(startingDate.getMonth() + 1);
    startingDate.setDate(15);
    startingDate.setHours(23);
    startingDate.setMinutes(45);
    startingDate.setSeconds(30);

    var milisecondsBetween = Math.abs(startingDate - startingDate.getDate());

    newDate.setTime(milisecondsBetween);

    div.innerHTML = `Al modificar el temps de la data a [15/mes següent/any vinent a les 23:45:30], queda així: <br>${newDate}`;
}

function setFullYear() {
    var div = document.getElementById("testDiv");
    var newDate = new Date();

    newDate.setFullYear(newDate.getFullYear() + 1);

    div.innerHTML = `Al modificar els anys de la data al [any vinent], queda així: <br>${newDate}`;
}

function btnValidateDate() {
    var userDate = document.getElementById("textDate").value.split('/');
    var day = parseInt(userDate[0]);
    var month = parseInt(userDate[1]);
    var year = parseInt(userDate[2]);

    var trueDate = new Date(year, month - 1, day);

    if (trueDate.getFullYear() === year && trueDate.getMonth() === (month - 1) && trueDate.getDate() === day) {
        alert("La data és correcta");

    } else {
        alert("La data és incorrecta");
    }
}