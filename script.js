let password = document.querySelector("#password");
let togglePassword = document.querySelector("#togglePassword");
togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Hide";
    }
    else {
        password.type = "password";
        togglePassword.textContent = "Show";
    }
});



password.addEventListener("input", function () {

    let score = 0;

    //regex code 
    let lengthRegex = /.{8,}/;
    let upperRegex = /[A-Z]/;
    let lowerRegex = /[a-z]/;
    let numberRegex = /[0-9]/;
    let specialRegex =  /[^A-Za-z0-9\s]/;



    let length = document.querySelector("#length");
    let uppercase = document.querySelector("#uppercase");
    let lowercase = document.querySelector("#lowercase");
    let number = document.querySelector("#number");
    let special = document.querySelector("#special");

    // code for lenght of the text
    if (lengthRegex.test(password.value)) {
        score++;
        length.textContent = "✓ At least 8 characters";
        length.classList.add("valid");
        length.classList.remove("invalid");
    }
    else {
        length.textContent = "✕  At least 8 characters";
        length.classList.add("invalid");
        length.classList.remove("valid");
    }

    // code for uppercase ofthe text
    if (upperRegex.test(password.value)) {
        score++;
        uppercase.textContent = "✓ One uppercase letter";
        uppercase.classList.add("valid");
        uppercase.classList.remove("invalid");
    }
    else {
        uppercase.textContent = "✗ One uppercase letter";
        uppercase.classList.add("invalid");
        uppercase.classList.remove("valid");

    }

    // code for lowercase text
    if (lowerRegex.test(password.value)) {
        score++;
        lowercase.textContent = "✓ One lowercase letter";
        lowercase.classList.add("valid");
        lowercase.classList.remove("invalid");

    }
    else {
        lowercase.textContent = "✗ One lowercase letter";
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");

    }

    //code for number text


    if (numberRegex.test(password.value)) {
        score++;
        number.textContent = "✓ One number";
        number.classList.add("valid");
        number.classList.remove("invalid");
    }
    else {
        number.textContent = "✗ One number";
        number.classList.add("invalid");
        number.classList.remove("valid");
    }

    // code for special  charactet text
    if (specialRegex.test(password.value)) {
        score++;
        special.textContent = "✓ One special character";
        special.classList.add("valid");
        special.classList.remove("invalid");
    }
    else{
        special.textContent = "✗ One special character";
        special.classList.add("invalid");
        special.classList.remove("valid");
    }

    // code for the  password strenght

    let strengthText = document.getElementById("strengthText")
    if (score <= 1) {
        strengthText.textContent = "Weak"

    }
    else if (score > 1 && score <= 3) {
        strengthText.textContent = "Medium";
    }
    else {
        strengthText.textContent = "Strong";
    }



});
