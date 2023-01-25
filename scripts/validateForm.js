const specialChars = "^[^<>{}\"/|;:.,~!?@#$%^=&*\\]\\\\()\\[¿§«»ω⊙¤°℃℉€¥£¢¡®©_+]*$";
const englishAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
const digits = "0123456789";
const englishAlphabetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const englishAlphabetLowercase = "abcdefghijklmnopqrstuvwxyz";

let alertText = "";

function validateForm() {
    var valid = true;

    if(!validateName()) valid = false;
    if(!validateUserId()) valid = false;
    if(!validateEmail()) valid = false;
    if(!validateCountry()) valid = false;
    if(!validateLanguage()) valid = false;
    if(!validateSex()) valid = false;
    if(!validateZipcode()) valid = false;
    if(!validatePassword()) valid = false;

    if(valid == true) {
        alert(alertText);
    }

    alertText = "";

    return valid;
}

function validateName() {
    let input = document.forms["register-form"]["name"];
    let val = input.value;
    let ul = document.getElementById("name-div");

    var valid = true;

    for(var i = 0; i < ul.children.length; i++) {
        ul.children[i].hidden = true;
    }

    if(val.length == 0) {
        ul.children[0].hidden = false;
        valid = false;
    }
    for(var i = 0; i < val.length; i++)  {
        if(englishAlphabet.search(val.charAt(i)) == -1) {
            ul.children[1].hidden = false;
            valid = false;
            break;
        }
    }

    ul.hidden = false;
    
    if(valid == true) {
        ul.children[2].hidden = false;
        input.style.backgroundColor = "rgba(122, 240, 87, 0.579)";
        alertText += "Your name: " + val + "\n";
    } else {
        input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";
    }
    
    return valid;
}

function validateUserId() {
    let input = document.forms["register-form"]["user-id"];
    let val = input.value;
    let ul = document.getElementById("user-id-div");

    var valid = true;

    for(var i = 0; i < ul.children.length; i++) {
        ul.children[i].hidden = true;
    }

    if(val.length < 5 || val.length > 12) {
        ul.children[0].hidden = false;
        valid = false;
    }

    if(val.length == 0 || val.charAt(0) != val.charAt(0).toUpperCase()) {
        ul.children[1].hidden = false;
        valid = false;
    }

    if(val.length == 0 || (specialChars.search(val.charAt(val.length - 1)) == -1 && 
    digits.search(val.charAt(val.length - 1)) == -1)) {
        ul.children[2].hidden = false;
        valid = false;
    }

    ul.hidden = false;
    
    if(valid == true) {
        ul.children[3].hidden = false;
        input.style.backgroundColor = "rgba(122, 240, 87, 0.579)";
        alertText += "Your username: " + val + "\n";
    } else {
        input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";
    }

    return valid;
}

function validateEmail() {
    let input = document.forms["register-form"]["email"];
    let val = input.value;
    let ul = document.getElementById("email-div");

    var valid = true;

    for(var i = 0; i < ul.children.length; i++) {
        ul.children[i].hidden = true;
    }

    if(val.length == 0) {
        valid = false;
    }

    ul.hidden = false;

    if(valid == false) {
        ul.children[0].hidden = false;
        input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";

    } else {
        ul.children[1].hidden = false;
        input.style.backgroundColor = "rgba(122, 240, 87, 0.579)";
        alertText += "Your email: " + val + "\n";

    }

    return valid;
}

function validateCountry() {
    let input = document.forms["register-form"]["country"];
    let val = input.value;
    let ul = document.getElementById("country-div");

    var valid = true;

    ul.hidden = true;

    for(var i = 0; i < ul.children.length; i++) {
        ul.children[i].hidden = true;
    }

    if(val == 0) {
        valid = false;
    }

    if(valid == false) {
        ul.hidden = false;
        ul.children[0].hidden = false;
        input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";

    } else {
        alertText += "Your country: " + input.options[val].text + "\n";
        input.style.backgroundColor = "rgba(122, 240, 87, 0.579)";
    }

    return valid;
}

function validateLanguage() {
    let input = document.forms["register-form"]["language"];
    let val = input.value;
    let ul = document.getElementById("language-div");

    var valid = true;

    ul.hidden = true;

    for(var i = 0; i < ul.children.length; i++) {
        ul.children[i].hidden = true;
    }

    if(val == 0) {
        valid = false;
    }

    if(valid == false) {
        ul.hidden = false;
        ul.children[0].hidden = false;
        input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";

    } else {
        alertText += "Your language: " + input.options[val].text + "\n"; 
        input.style.backgroundColor = "rgba(122, 240, 87, 0.579)";
    }

    return valid;
}

function validateSex() {
    let input = document.forms["register-form"]["sex"]
    let val = input.value;
    let ul = document.getElementById("sex-div");

    var valid = true;

    ul.hidden = true;

    for(var i = 0; i < ul.children.length; i++) {
        ul.children[i].hidden = true;
    }

    if(val == 0) {
        valid = false;
    }

    if(valid == false) {
        ul.hidden = false;
        ul.children[0].hidden = false;
        input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";

    } else {
        alertText += "Your sex: " + input.options[val].text + "\n"; 
        input.style.backgroundColor = "rgba(122, 240, 87, 0.579)";
    }

    return valid;
}

function validateZipcode() {
    let input = document.forms["register-form"]["zipcode"];
    let val = input.value;
    let ul = document.getElementById("zipcode-div");

    var valid = true;

    for(var i = 0; i < ul.children.length; i++) {
        ul.children[i].hidden = true;
    }

    if(val.length != 6) {
        valid = false;
    } else {
        for(var i = 0; i < 4; i++)  {
            if(digits.search(val.charAt(i)) == -1) {
                valid = false;
                break;
            }
        }
        if(englishAlphabetUppercase.search(val.charAt(4)) == -1 ||
        englishAlphabetUppercase.search(val.charAt(5)) == -1) {
            valid = false;
        }
    }

    ul.hidden = false;

    if(valid == true) {
        ul.children[1].hidden = false;
        input.style.backgroundColor = "rgba(122, 240, 87, 0.579)";
        alertText += "Your Zipcode: " + val + "\n"; 

    } else {
        ul.children[0].hidden = false;
        input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";

    }

    return valid;
}

function validatePassword() {
    let input = document.forms["register-form"]["password"];
    let pass = input.value;
    let ul = document.getElementById("password-div");
    
    let valid = true;
    
    for(var i = 0; i < ul.children.length; i++) {
        ul.children[i].hidden = true;
    }

    if(pass.length >= 12){
        input.style.backgroundColor = "rgba(122, 240, 87, 0.579)";
        let okLower = false;
        let okUpper = false;
        let okNumber = false;
        let okSpecial = false;
        for (let i=0; i<pass.length;i++){
            if(englishAlphabetLowercase.search(pass.charAt(i))!=-1)
                okLower = true;
            if(englishAlphabetUppercase.search(pass.charAt(i))!=-1)
                okUpper = true;
            if(digits.search(pass.charAt(i))!=-1)
                okNumber = true;
            if(specialChars.search(pass.charAt(i))!=-1)
                okSpecial = true;
        }
        if(okLower == true && okUpper == true && okNumber == true && okSpecial == true){ 
            input.style.backgroundColor = "rgba(122, 240, 87, 0.579)";
            if(pass.length>=14)
                ul.children[3].hidden = false;
            else ul.children[2].hidden = false;
        }
        else {
            valid = false;
            input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";
            ul.children[1].hidden = false;
        }

    }
    else {
        ul.children[0].hidden = false;
        input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";
        valid = false;
    }
   
    ul.hidden = false;

    return valid;
}