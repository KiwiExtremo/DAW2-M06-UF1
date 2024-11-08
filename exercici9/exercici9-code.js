window.onload = initialize;

function initialize() {
    document.getElementById("buttonPlus11").onclick = plus11;
    document.getElementById("buttonMult8").onclick = mult8;
    document.getElementById("buttonMarks").onclick = marks;
    document.getElementById("buttonHeight").onclick = height;
    document.getElementById("buttonSalary").onclick = salary;
    document.getElementById("buttonPlus5").onclick = plus5;
    document.getElementById("buttonMult10").onclick = mult10;
    document.getElementById("buttonEvenOdd").onclick = evenOdd;
}

function plus11() {
    var div = document.getElementById("plus11Div");
    var button = document.getElementById("buttonPlus11");
    var i = 1;

    while (i <= 25) {
        div.innerHTML += " " + (i * 11) + ",";
        i++;
    }

    div.innerHTML += " fi de la sèrie";

    button.parentNode.removeChild(button);
}

function mult8() {
    var div = document.getElementById("mult8Div");
    var button = document.getElementById("buttonMult8");
    var i = 8;

    while (i < 500) {
        div.innerHTML += " " + i + ",";
        i = i + 8;
    }

    div.innerHTML += " fi de la sèrie";

    button.parentNode.removeChild(button);
}

function marks() {
    var div = document.getElementById("marksDiv");
    var numberMarks = 0;
    var mark = 0;
    var moreThan7 = 0;

    while (numberMarks < 10) {
        mark = prompt("Introdueix la nota de l'alumne (" + (numberMarks + 1) + "/10):")

        if (mark >= 7) {
            moreThan7++;
        }

        numberMarks++;
    }

    div.innerHTML += "Hi ha " + moreThan7 + " alumnes amb nota igual o major a 7, i " + (10 - moreThan7) + " alumnes amb nota menor de 7";
}

function height() {
    var div = document.getElementById("heightDiv");
    var numHeights = 0;
    var sum = 0;

    while (numHeights < 5) {
        sum = sum + parseFloat(prompt("Introdueix una altura en metres (" + (numHeights + 1) + "/5):"));

        numHeights++;
    }

    div.innerHTML = "L'altura mitjana és de " + (sum / 5) + " metres";
}

function salary() {
    var div = document.getElementById("salaryDiv");
    var goodSalaries = 0;
    var poorSalaries = 0;
    var totalSalaries = 0;
    var currentSalary = 0;
    var totalMoneySpent = 0;

    while (totalSalaries < 5) {
        currentSalary = parseFloat(prompt("Introdueix el sou del treballador, entre 1000€ i 5000€ (" + (totalSalaries + 1) + "/5):"));

        totalMoneySpent += currentSalary;

        if (currentSalary > 3000) {
            goodSalaries++;
        
        } else {
            poorSalaries++;
        }

        totalSalaries++;
    }

    div.innerHTML = "Hi ha " + goodSalaries + " treballadors que cobren més de 3000€, i " + poorSalaries + " treballadors que cobren entre 1000€ i 3000€. A més, l'empresa gasta " + totalMoneySpent + "€ en sous cada mes";
}

function plus5() {
    var div = document.getElementById("plus5Div");
    var button = document.getElementById("buttonPlus5");
    var i = 1;

    while (i <= 20) {
        div.innerHTML += " " + (i * 5) + ",";
        i++;
    }

    div.innerHTML += " fi de la sèrie";

    button.parentNode.removeChild(button);
}

function mult10() {
    var div = document.getElementById("mult10Div");
    var button = document.getElementById("buttonMult10");
    var i = 10;

    while (i <= 1500) {
        div.innerHTML += " " + i + ",";
        i = i + 10;
    }

    div.innerHTML += " fi de la sèrie";

    button.parentNode.removeChild(button);
}

function evenOdd() {
    var div = document.getElementById("evenOddDiv");
    var evens = 0;
    var odds = 0;
    var currentNum = 0;
    var totalNums = 0;

    while (totalNums < 5) {
        currentNum = parseInt(prompt("Introdueix un número enter (" + (totalNums + 1) + "/5):"));

        if (currentNum % 2 == 0) {
            evens++;
        
        } else {
            odds++;
        }

        totalNums++;
    }

    div.innerHTML = "Hi ha " + evens + " números parells, i " + odds + " números senars"
}