const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

/* -------- SHOW / HIDE PASSWORD -------- */

function togglePassword(id) {
    let field = document.getElementById(id);
    field.type = field.type === "password" ? "text" : "password";
}

/* -------- PASSWORD STRENGTH -------- */

function checkStrength() {
    let password = document.getElementById("regPassword").value;
    let strengthText = document.getElementById("strengthText");

    if (password.length < 6) {
        strengthText.innerText = "Weak";
        strengthText.style.color = "red";
    }
    else if (password.length <= 9) {
        strengthText.innerText = "Medium";
        strengthText.style.color = "orange";
    }
    else {
        strengthText.innerText = "Strong";
        strengthText.style.color = "green";
    }
}

/* -------- LOGIN VALIDATION -------- */

if (document.getElementById("loginForm")) {

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = loginEmail.value.trim();
    let password = loginPassword.value.trim();
    let valid = true;

    loginEmailError.innerText = "";
    loginPasswordError.innerText = "";

    if (email === "" || !email.match(emailPattern)) {
        loginEmailError.innerText = "Valid email required";
        valid = false;
    }

    if (password.length < 6) {
        loginPasswordError.innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if (valid) {
        alert("Login Successful!");
        this.reset();
    }
});

}

/* -------- REGISTER VALIDATION -------- */

if (document.getElementById("registerForm")) {

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    document.querySelectorAll(".error").forEach(el => el.innerText = "");

    if (regUsername.value.trim() === "") {
        regUsernameError.innerText = "Username required";
        valid = false;
    }

    if (regEmail.value.trim() === "" || !regEmail.value.match(emailPattern)) {
        regEmailError.innerText = "Valid email required";
        valid = false;
    }

    if (regPassword.value.length < 6) {
        regPasswordError.innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if (regDob.value === "") {
        regDobError.innerText = "Date of Birth required";
        valid = false;
    }

    if (regState.value.trim() === "") {
        regStateError.innerText = "State required";
        valid = false;
    }

    if (regCountry.value.trim() === "") {
        regCountryError.innerText = "Country required";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
        window.location.href = "login.html";
    }

});

}