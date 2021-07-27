"use strict"
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const register = document.querySelector(".register");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const containSymbol = document.querySelector(".contains-symbol");
const noMatch = document.querySelector(".do-not-match");
const checkBox = document.querySelector(".check-box");
const passwordRequirement = document.querySelector(".password-req");
const minPassword = document.querySelector(".atleast");
const email = document.querySelector(".email");
let digit = /\d/;
let symbol = /@\/&\$/;
let alphabets = /[:alpha:]+/;
let name = firstName.value + lastName.value;
var allSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
let error = 1;
let j;

let obj = {
    email: "kalyan",
    password: "kalyan"
}

const forName = (e) => {

    let i = 0;
    j = i;
    let name = firstName.value + lastName.value;

    if (digit.test(firstName.value)) {
        firstName.value = "";

        firstName.style.borderColor = "red";
        error = 1;
        e.preventDefault();
    } else {
        error = 0;
    }
    if (digit.test(lastName.value)) {
        lastName.value = "";

        lastName.style.borderColor = "red";
        error = 1;

        e.preventDefault();
    } else {
        error = 0;
    }
    if (digit.test(name) || symbol.test(firstName.value)) {
        containSymbol.classList.remove("hidden");
    } else {
        containSymbol.classList.add("hidden");
        error = 0;
    }

    if (confirmPassword.value.length > 0) {
        if (password.value != confirmPassword.value) {
            noMatch.classList.remove("hidden");
            error = 1;
            confirmPassword.style.borderColor = "red";
            confirmPassword.value = "";
            e.preventDefault();
        } else {
            error = 0;
            noMatch.classList.add("hidden");
        }
    }
    if (password.value.length > 0) {
        if (password.value.length >= 8) {
            minPassword.classList.add("hidden");
            if (!symbol.test(password.value) && !digit.test(password.value)) {
                console.log("no symbol or caps");
                password.value = "";
                confirmPassword.value = "";
                passwordRequirement.classList.remove("hidden");
                password.style.borderColor = "red";
                e.preventDefault();
                error = 1;
            } else {
                error = 0;
                passwordRequirement.classList.add("hidden");

            }
        } else {
            minPassword.classList.remove("hidden");
            error = 1;
            e.preventDefault();
        }

    }

    if (checkBox.checked) {
        error = 0;
        console.log(checkBox.value);

    } else {
        error = 1;
        e.preventDefault();
    }


};



register.addEventListener("click", forName);

function showPassword() {
    let eyeSlash = document.getElementById("eye");

    if (eyeSlash.classList.contains("bi-eye-slash")) {
        eyeSlash.classList.remove("bi-eye-slash");
        eyeSlash.classList.add("bi-eye");
        password.type = 'password'
    } else {
        eyeSlash.classList.remove("bi-eye");
        eyeSlash.classList.add("bi-eye-slash");
        password.type = 'text'
    }

}