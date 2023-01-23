const specialCharsAndNumbers = "^[^<>{}\"/|;:.,~!?@#$%^=&*\\]\\\\()\\[¿§«»ω⊙¤°℃℉€¥£¢¡®©0-9_+]*$";
const englishAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";

function validateForm() {
    var valid = true;
    if(!validateUserId()) valid = false;
    if(!validateName()) valid = false;

    return valid;
}

function validateUserId() {
    let val = document.forms["register-form"]["user-id"].value;
    let ul = document.getElementById("user-id-div");

    var valid = true;

    for(var i = 0; i < ul.children.length; i++) {
        ul.children[i].hidden = true;
        ul.children[i].style.color = "rgb(162, 26, 26)";
    }

    if(val.length < 5 || val.length > 12) {
        ul.hidden = false;
        ul.children[0].hidden = false;
        valid = false;
    }

    if(val.length == 0 || val.charAt(0) != val.charAt(0).toUpperCase()) {
        ul.hidden = false;
        ul.children[1].hidden = false;
        valid = false;
    }

    if(val.length == 0 || specialCharsAndNumbers.search(val.charAt(val.length - 1)) == -1) {
        ul.hidden = false;
        ul.children[2].hidden = false;
        valid = false;
    }
    
    if(valid == true) {
        ul.hidden = false;
        ul.children[3].hidden = false;
        ul.children[3].style.color = "green";
    }

    return valid;
}

function validateName() {
    let val = document.forms["register-form"]["name"].value;
    let ul = document.getElementById("name-div");

    var valid = true;

    for(var i = 0; i < ul.children.length; i++) {
        ul.children[i].hidden = true;
        ul.children[i].style.color = "rgb(162, 26, 26)";
    }

    if(val.length == 0) {
        ul.hidden = false;
        ul.children[0].hidden = false;
        valid = false;
    }
    for(var i = 0; i < val.length; i++)  {
        if(englishAlphabet.search(val.charAt(i)) == -1) {
            ul.hidden = false;
            ul.children[1].hidden = false;
            valid = false;
            break;
        }
    }
    
    if(valid == true) {
        ul.hidden = false;
        ul.children[2].hidden = false;
        ul.children[2].style.color = "green";
    }

    return valid;
}