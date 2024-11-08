var newWindow;

window.onload = initialize;

function initialize() {
    document.getElementById("btnOpenWindow").onclick = openWindow;
    document.getElementById("btnCloseWindow").onclick = closeWindow;
}

function openWindow() {
    newWindow = window.open("", "New Window", "width=500px,height=500px,toolbar=yes,menubar=yes");
}

function closeWindow() {
    newWindow.close();
}
function randomPage() {
    var link;
    var randInt = Math.floor(Math.random() * 3);

    switch (randInt) {
        case 0:
            link = "https://outlook.live.com";
            break;
        
        case 1:
            link = "https://mail.google.com";
            break;

        case 2:
            link = "https://mail.yahoo.com";
            break;

        default:
            link = "https://i.pinimg.com/originals/21/70/9c/21709cb5b6c2ebb24950d59d9997b981.jpg";
    }

    window.location = link;
}

function previousPage() {
    window.history.back();
}

function nextPage() {
    window.history.forward();
}