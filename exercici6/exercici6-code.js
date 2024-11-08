function initializeButtons() {
    document.getElementById("buttonMean").onclick = simpleMean;
    document.getElementById("buttonKey").onclick = checkKey;
    document.getElementById("buttonCalc4").onclick = checkNumbers;
    document.getElementById("buttonMean2").onclick = complexMean;
    document.getElementById("buttonLength").onclick = checkLength;
    document.getElementById("buttonBiggest").onclick = checkBiggest;
    document.getElementById("buttonSign").onclick = checkSign;
    document.getElementById("buttonLength2").onclick = checkLongerLength;
    document.getElementById("buttonTest").onclick = calcTestScore;
}

window.onload = initializeButtons;

function simpleMean() {
    var studentName = prompt("Introdueix el nom de l'alumne");
    var score1 = prompt("Introdueix la primera nota:");
    var score2 = prompt("introdueix la segona nota:");
    var score3 = prompt("Introdueix la tercera nota:");

    var mean = (parseInt(score1) + parseInt(score2) + parseInt(score3)) / 3;

    document.getElementById("meanDiv").innerHTML = "La nota mitjana de l'alumne/a " + studentName + " és de " + mean;

    if (mean > 7) {
        document.getElementById("meanDiv").innerHTML += ". Per tant, l'alumne/a ha estat promocionat";
    } else {
        document.getElementById("meanDiv").innerHTML += ". Malauradament, l'alumne/a no promociona";
    }

    document.getElementById("buttonMean").value = "Tornar a calcular";
}

function checkKey() {
    var firstTry = prompt("Introdueix la clau:");
    var secondTry = prompt("Torna a introduir-la:");

    if (firstTry == secondTry) {
        document.getElementById("keyDiv").innerHTML = "La clau coincideix";

        document.getElementById("buttonKey").value = "Provar una altra clau";
    } else {
        document.getElementById("keyDiv").innerHTML = "La clau no coincideix";

        document.getElementById("buttonKey").value = "Tornar a intentar-ho";
    }
}

function checkNumbers() {
    var number1 = parseInt(prompt("Introdueix el primer número:"));
    var number2 = parseInt(prompt("Introdueix el segon número:"));

    if (number1 > number2) {
        var sum = number1 + number2;
        var diff = number1 - number2;

        document.getElementById("calc4Div").innerHTML = "La suma dels 2 números és " + sum + " i la resta és " + diff;
    } else {
        var prod = number2 * number1;
        var division = number2 / number1;

        document.getElementById("calc4Div").innerHTML = "El producte dels 2 números és " + prod + " i la divisió és " + division;
    }

    document.getElementById("buttonCalc4").value = "Tornar a calcular";
}

function complexMean() {
    var studentName = prompt("Introdueix el nom de l'alumne");
    var score1 = prompt("Introdueix la primera nota:");
    var score2 = prompt("introdueix la segona nota:");
    var score3 = prompt("Introdueix la tercera nota:");

    var mean = (parseInt(score1) + parseInt(score2) + parseInt(score3)) / 3;

    document.getElementById("mean2Div").innerHTML = "La nota mitjana de l'alumne/a " + studentName + " és de " + mean;

    if (mean >= 5) {
        document.getElementById("mean2Div").innerHTML += ". Per tant, l'alumne/a ha aprovat";
    } else {
        document.getElementById("mean2Div").innerHTML += ". Malauradament, l'alumne/a ha suspès";
    }

    document.getElementById("buttonMean2").value = "Tornar a calcular";
}

function checkLength() {
    var number = parseInt(prompt("Introdueix un número de l'1 al 99:"));

    if (number > 10 && number < 100) {
        document.getElementById("lengthDiv").innerHTML = "El número " + number + " té 2 xifres";

    } else if (number < 10) {
        document.getElementById("lengthDiv").innerHTML = "El número " + number + " té 1 xifra";

    } else {
        document.getElementById("lengthDiv").innerHTML = "El número " + number + " està fora de rang";
    }

    document.getElementById("buttonLength").value = "Comprovar un altre número";
}

function checkBiggest() {
    var number1 = parseInt(prompt("Introdueix el primer número:"));
    var number2 = parseInt(prompt("Introdueix el segon número:"));
    var number3 = parseInt(prompt("Introdueix el tercer número:"));
    var biggest;

    if (number1 >= number2 && number1 >= number3) {
        biggest = number1;

    } else if (number2 < number3) {
        biggest = number3;

    } else {
        biggest = number2;
    }

    document.getElementById("biggestDiv").innerHTML = "El número " + biggest + " és el més gran";

    document.getElementById("buttonBiggest").value = "Provar més números";
}

function checkSign() {
    var number = parseInt(prompt("Introdueix un número:"));

    if (number < 0) {
        document.getElementById("signDiv").innerHTML = "El número " + number + " és negatiu";

    } else if (number > 0) {
        document.getElementById("signDiv").innerHTML = "El número " + number + " és positiu";

    } else {
        document.getElementById("signDiv").innerHTML = "El número " + number + " és 0";
    }

    document.getElementById("buttonSign").value = "Provar més números";
}

function checkLongerLength() {
    var number = parseInt(prompt("Introdueix un número d'1 a 3 xifres:"));

    if (number >= 1000 || number < 1) {
        document.getElementById("length2Div").innerHTML = "El número " + number + " està fora de rang";

    } else if (number >= 100) {
        document.getElementById("length2Div").innerHTML = "El número " + number + " té 3 xifres";

    } else if (number >= 10) {
        document.getElementById("length2Div").innerHTML = "El número " + number + " té 2 xifres";

    } else {
        document.getElementById("length2Div").innerHTML = "El número " + number + " té 1 xifra";
    }

    document.getElementById("buttonLength2").value = "Comprovar un altre número";
}

function calcTestScore() {
    var testerName = prompt("Introdueix el nom del aspirant:");
    var totalQuestions = parseInt(prompt("Introdueix el número de preguntes realitzades:"));
    var correctAnswers = parseInt(prompt("Introdueix el número de preguntes respostes correctament:"));

    var correctPercent = 100 * (correctAnswers / totalQuestions);

    if (correctPercent > 100) {
        document.getElementById("testDiv").innerHTML = "Hi ha un error en les dades introduides";
        
    } else if (correctPercent >= 90) {
        document.getElementById("testDiv").innerHTML = "L'aspirant " + testerName + " té un nivell superior";

    } else if (correctPercent >= 75) {
        document.getElementById("testDiv").innerHTML = "L'aspirant " + testerName + " té un nivell mitjà";

    } else if (correctPercent >= 50) {
        document.getElementById("testDiv").innerHTML = "L'aspirant " + testerName + " té un nivell regular";

    } else {
        document.getElementById("testDiv").innerHTML = "L'aspirant " + testerName + " està fora de nivell";
    }

    document.getElementById("buttonTest").value = "Calcular el nivell d'un altre aspirant";
}