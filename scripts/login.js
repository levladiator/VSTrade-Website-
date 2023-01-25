const specialChars = "^[^<>{}\"/|;:.,~!?@#$%^=&*\\]\\\\()\\[¿§«»ω⊙¤°℃℉€¥£¢¡®©_+]*$";
const englishAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
const digits = "0123456789";
const englishAlphabetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const englishAlphabetLowercase = "abcdefghijklmnopqrstuvwxyz";
let alertText = "";

function validateForm(){

    let valid = true;
    if(!validateEmail())
        valid = false;
    if(!validatePassword())
        valid = false;

    return valid;

}

function validateEmail(){
    let input = document.forms["login-form"]["email"];
    let val = input.value;
    let ul = document.getElementById("email-div");
    let valid = true;
    ul.hidden = false;
    for(var i = 0; i < ul.children.length; i++)
        ul.children[i].hidden = true;

    if(val.length<=0){
        ul.children[0].hidden = false;
        valid = false;
        input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";
    }
    else {
        input.style.backgroundColor = "rgba(122, 240, 87, 0.579)";
    }

    return valid;
}

function validatePassword() {
    let input = document.forms["login-form"]["password"];
    let pass = input.value;
    let ul = document.getElementById("password-div");
    
    let valid = true;
    ul.hidden = false;
    for(var i = 0; i < ul.children.length; i++) {
        ul.children[i].hidden = true;
    }
    if(pass.length == 0){
        ul.children[0].hidden = false;
        input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";
        return false;
    }

    if(pass.length >= 12){
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
        }
        else {
            valid = false;
            input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";
            ul.children[1].hidden = false;
        }

    }
    else {
        ul.children[1].hidden = false;
        input.style.backgroundColor = "rgba(243, 78, 78, 0.579)";
        valid = false;
    }
   
   

    return valid;
}