let mouseClicks = 1;
let timeSpent = 0;
let keyPresses = 0;
let charsTyped = 0;
let start = Date.now();

function countCharsTyped() {
    charsTyped += document.forms["register-form"]["name"].value.length;
    charsTyped += document.forms["register-form"]["user-id"].value.length;
    charsTyped += document.forms["register-form"]["email"].value.length;
    charsTyped += document.forms["register-form"]["password"].value.length;
    charsTyped += document.forms["register-form"]["address"].value.length;
    charsTyped += document.forms["register-form"]["zipcode"].value.length;
    charsTyped += document.forms["register-form"]["aboutyou"].value.length;
    return charsTyped;
}
 
function countMouseClicks() {
    mouseClicks ++;
}

function countKeyPresses() {
    keyPresses ++;
}

function startTimer() {
    start = Date.now();
}

function countTimeSpent() {
    var time = (Date.now() - start) / 1000;
    var ans = "";
    if(parseInt(time / 60) > 0) ans += parseInt(time / 60) + " minutes and ";
    ans += parseInt(time % 60) + " seconds";
    return ans;
}

function showInfo() {
    let info = document.getElementById("infoBox");

    document.getElementById("totalMouseClicks").innerHTML = mouseClicks;
    document.getElementById("totalTimeSpent").innerHTML = countTimeSpent();
    document.getElementById("totalKeyPresses").innerHTML = keyPresses;
    document.getElementById("totalCharsTyped").innerHTML = countCharsTyped();

    info.hidden = false;

    mouseClicks = 0;
    keyPresses = 0;
    charsTyped = 0;
    start = Date.now();
}