window.onload = initialize;

function initialize() {
    document.getElementById("buttonSumVs0").onclick = buttonSumVs0;
    document.getElementById("buttonBank").onclick = buttonBank;
    document.getElementById("buttonCensus").onclick = buttonCensus;
    document.getElementById("buttonTriangles").onclick = buttonTriangles;
    document.getElementById("buttonSumLast5").onclick = buttonSumLast5;
    document.getElementById("buttonMultTable5").onclick = buttonMultTable5;
    document.getElementById("buttonMultTable").onclick = buttonMultTable;
    document.getElementById("buttonTriangles2").onclick = buttonTriangles2;
    document.getElementById("buttonInts").onclick = buttonInts;

    function buttonSumVs0() {
        var div = document.getElementById("sumVs0Div");
        var sum = 0;
        var num = 0;

        do {
            num = parseInt(prompt("Introdueix un número (el 9999 tancarà el programa):"));

            if (num != 9999) {
                sum += num;
            }
        } while (num !== 9999);

        if (sum > 0) {
            div.innerHTML = "La suma de tots els números introduïts és " + sum + " i el número és major a 0";

        } else if (sum < 0) {
            div.innerHTML = "La suma de tots els números introduïts és " + sum + " i el número és menor a 0";

        } else {
            div.innerHTML = "La suma de tots els números introduïts és 0";
        }
    }

    function buttonBank() {
        var div = document.getElementById("bankDiv");
        div.innerHTML = "";

        var accountNum = 0;
        var clientsName = 0;
        var currentBalance = 0;
        var totalBalances = 0;
        var currentClient = 1;
        
        do {
            accountNum = parseInt(prompt("Introdueix el número de compte (si és inferior a 0 es tancarà el programa):"));

            if (accountNum >= 0) {
                clientsName = prompt("Introdueix el nom del client:");
                currentBalance = parseInt(prompt("Introdueix el saldo actual:"));

                totalBalances += currentBalance;

                div.innerHTML += "Client #" + currentClient + ":<br>" +
                    "Número de compte: " + accountNum + "<br>" +
                    "Nom del client: " + clientsName + "<br>" +
                    "Saldo actual: " + currentBalance + "€<br><br>";
            }

            currentClient++;

        } while (accountNum >= 0);

        div.innerHTML += "El saldo total dels clients del banc és de " + totalBalances + "€";
    }

    function buttonCensus() {
        var div = document.getElementById("censusDiv");
        var currentDNI;
        var currentAge;
        var currentSex;
        var totalCensed = 0;
        var males = 0;
        var malesBetween16And65 = 0;

        do {
            currentDNI = prompt("Introdueix el DNI de la persona censada (el 0 tancarà el programa:");

            if (currentDNI != 0) {
                currentAge = prompt("Introdueix l'edat de la persona censada:");
                currentSex = prompt("Introdueix el sexe de la persona censada (masculí/femení):");
                
                totalCensed++;

                if (currentSex === "masculí") {
                    males++;

                    if (parseInt(currentAge) < 65 && parseInt(currentAge) > 16) {
                        malesBetween16And65++;
                    }
                }
            }

        } while (currentDNI != 0);

        div.innerHTML = "En total s'han censat " + totalCensed + " persones, de les quals " + males + " son homes i " + (totalCensed - males) + " son dones. Dels homes, " + malesBetween16And65 + " tenen entre 16 i 65 anys.";
    }

    function buttonTriangles() {
        var div = document.getElementById("trianglesDiv");
        div.innerHTML = "";

        var base = 0;
        var height = 0;
        var area = 0;
        var bigTriangles = 0;


        for (var i = 0; i < 3; i++) {
            base = parseFloat(prompt("Introdueix la base del triangle (" + (i + 1) + "/3):"));
            height = parseFloat(prompt("Introdueix l'altura del triangle (" + (i + 1) + "/3):"));

            area = base * height / 2;

            div.innerHTML += "Triangle #" + (i + 1) + ":<br>";
            div.innerHTML += "Base: " + base + "<br>";
            div.innerHTML += "Altura: " + height + "<br>";
            div.innerHTML += "Superfície: " + area + "<br><br>";

            if (area > 12) {
                bigTriangles++;
            }
        }

        div.innerHTML += "Hi ha " + bigTriangles + " triangles amb superfície major a 12";
    }

    function buttonSumLast5() {
        var div = document.getElementById("sumLast5Div");
        var currentNum;
        var sum = 0;

        for (var i = 0; i < 10; i++) {
            currentNum = parseFloat(prompt("Introdueix un número (" + (i + 1) + "/10):"));
            
            if ( i > 4) {
                sum += currentNum;
            }
        }

        div.innerHTML = "La suma dels últims 5 números és " + sum;
    }

    function buttonMultTable5() {
        var div = document.getElementById("multTable5Div");
        div.innerHTML = "Taula del 5:<br>";

        for (var i = 1; i <= 10; i++) {
            div.innerHTML += "5 x " + i + " = " + (5 * i) + "<br>";
        }
    }

    function buttonMultTable() {
        var div = document.getElementById("multTableDiv");
        var currentNum = parseInt(prompt("Introdueix el número per al qual vols la taula:"));

        div.innerHTML = "Taula del " + currentNum + ":<br>";
        
        for (var i = 1; i <= 12; i++) {
            div.innerHTML += currentNum + " x " + i + " = " + (currentNum * i) + "<br>";
        }
    }

    function buttonTriangles2() {
        var div = document.getElementById("triangles2Div");
        var side1;
        var side2;
        var side3;
        var equilaterals = 0;
        var isosceles = 0;
        var scalenes = 0;
        var typesOfTriangles = ["equilàter", "isosceles", "escalè"];
        var smallest;

        for (var i = 0; i < 4; i++) {
            side1 = parseFloat(prompt("Introdueix el primer costat del triangle (" + (i + 1) + "/4):"));
            side2 = parseFloat(prompt("Introdueix el segon costat del triangle (" + (i + 1) + "/4):"));
            side3 = parseFloat(prompt("Introdueix el tercer costat del triangle (" + (i + 1) + "/4):"));

            div.innerHTML += "Triangle #" + (i + 1) + ": ";

            if (side1 === side2 || side1 === side3 || side2 === side3) {
                if (side1 === side2 && side2 === side3) {
                    div.innerHTML += "Equilàter<br><br>";
                    equilaterals++;

                } else {
                    div.innerHTML += "Isòsceles<br><br>";
                    isosceles++;
                }
            } else {
                div.innerHTML += "Escalè<br><br>";
                scalenes++;
            }
        }

        if (equilaterals < isosceles && equilaterals < scalenes) {
            smallest = 0;

        } else if (isosceles < scalenes) {
            smallest = 1;

        } else {
            smallest = 2;
        }
        
        div.innerHTML += "El tipus de triangle amb menor quantitat és l'" + typesOfTriangles[smallest];
    }

    function buttonInts() {
        var div = document.getElementById("intsDiv");
        var currentNum;
        var positiveNums = 0;
        var negativeNums = 0;
        var multiplesOf15 = 0;
        var evenNums = 0;

        for (var i = 0; i < 6; i++) {
            currentNum = parseInt(prompt("Introdueix un número enter (" + (i + 1) + "/6):"));

            if (currentNum > 0) {
                positiveNums++;

            } else if (currentNum < 0) {
                negativeNums++;
            }

            if (currentNum % 15 == 0) {
                multiplesOf15++;
            }

            if (currentNum % 2 == 0) {
                evenNums++;
            }
        }

        div.innerHTML = "Dels valors ingressats, " + positiveNums + " números son positius, " + negativeNums + " són negatius, " + multiplesOf15 + " són múltiple de 15 i " + evenNums + " són parells. Tingues en compte que un mateix número pot complir varies condicions";
    }
}