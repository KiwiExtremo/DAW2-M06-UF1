window.onload = initialize;

function initialize() {
    var nums = document.getElementsByClassName("numero");
    var display = document.getElementById("display");
    var acum = 0;
    var lastOp = "";
    let fromOp = false;

    for (var i = 0; i < nums.length; i++) {
        nums[i].addEventListener("click", printOnDisplay);
        nums[i].addEventListener("click", clearFocus);
    }
    
    var operations = document.getElementsByClassName("operacio");

    for (var i = 0; i < operations.length; i++) {
        if (operations[i].id === "numC") {
            operations[i].addEventListener("click", clearDisplay);

        } else if (operations[i].id === "cuadr") {
            operations[i].addEventListener("click", doPower);
        
        } else if (operations[i].id === "raiz") {
            operations[i].addEventListener("click", doSqrt);
        
        } else {
            operations[i].addEventListener("click", doOperation);
        }

        operations[i].addEventListener("click", clearFocus);
    }

    document.body.addEventListener("keypress", keyboardInput);

    document.getElementById("coma").addEventListener("click", addComma);
    document.getElementById("coma").addEventListener("click", clearFocus);
    document.getElementById("igual").addEventListener("click", doOperation);
    document.getElementById("igual").addEventListener("click", clearFocus);

    display.value = 0;

    function clearFocus() {
        this.blur();

    }

    function keyboardInput(event) {
        switch(event.key) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                printOnDisplay(event.key);
                break;

            case "+":
            case "-":
            case "*":
            case "/":
            case "=":
            case "Enter":
                doOperation(event.key);
                break;

            case "Delete":
                clearDisplay();
                break;
            
            case ",":
            case ".":
                addComma();
                break;

            default:
                break;
        }
    }

    function printOnDisplay(key) {
        var num = this.value || key;

        if (fromOp) {
            display.value = parseFloat(num);
            fromOp = false;

        } else if (lastOp !== "equal" && lastOp !== "pow" && lastOp !== "sqrt" && display.value !== "Infinity") {
            display.value += parseFloat(num);

            // Done to clean all leftmost zeroes
            //display.value = parseFloat(display.value);

        } else if (lastOp === "equal") {
            clearDisplay();

            display.value = parseFloat(num);
            fromOp = false;
        }
    }
    
    function clearDisplay() {
        display.value = 0;
        acum = 0;
        lastOp = "";
        fromOp = false;
    }

    function addComma() {
        if (display.value.indexOf(".") == -1 && lastOp !== "equal" && lastOp !== "pow" && lastOp !== "sqrt" && display.value !== "Infinity") {
            display.value += ".";
        }
    }

    function doOperation(key) {

        var value = this.value || key;

        // TODO check if a lastOp = "number" would solve double operation errors
        switch (lastOp) {
            case "sum":
                acum += parseFloat(display.value);
                break;

            case "subt":
                acum -= parseFloat(display.value);
                break;
                
            case "mult":
                acum *= parseFloat(display.value);
                break;

            case "div":
                acum /= parseFloat(display.value);
                break;

            default:
                acum = parseFloat(display.value);
                break;
        }
        display.value = acum;

        fromOp = true;

        switch (value) {
            case "+":
                lastOp = "sum";
                break;

            case "-":
                lastOp = "subt";
                break;
                
            case "*":
                lastOp = "mult";
                break;

            case "/":
                lastOp = "div";
                break;

            default:
                lastOp = "equal";
                fromOp = false;
                break;
        }
    }

    function doSqrt() {
        switch (lastOp) {
            case "sum":
                display.value = parseFloat(acum) + Math.sqrt(parseFloat(display.value));
                break;

            case "subt":
                display.value = parseFloat(acum) - Math.sqrt(parseFloat(display.value));
                break;
                
            case "mult":
                display.value = parseFloat(acum) * Math.sqrt(parseFloat(display.value));
                break;

            case "div":
                display.value = parseFloat(acum) / Math.sqrt(parseFloat(display.value));
                break;

            default:
                display.value = Math.sqrt(parseFloat(display.value));
                break;
        }

        acum = display.value;

        lastOp = "sqrt";
    }

    function doPower() {
        switch (lastOp) {
            case "sum":
                display.value = parseFloat(acum) + Math.pow(parseFloat(display.value), 2);
                break;

            case "subt":
                display.value = parseFloat(acum) - Math.pow(parseFloat(display.value), 2);
                break;
                
            case "mult":
                display.value = parseFloat(acum) * Math.pow(parseFloat(display.value), 2);
                break;

            case "div":
                display.value = parseFloat(acum) / Math.pow(parseFloat(display.value), 2);
                break;

            default:
                display.value = Math.pow(parseFloat(display.value), 2);
                break;
        }

        acum = display.value;

        lastOp = "pow";
    }
}

