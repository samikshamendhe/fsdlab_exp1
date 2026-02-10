function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let phone = document.getElementById("phone").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("cpassError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";

    let valid = true;

    if(name == "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    }

    if(email == "" || !email.includes("@")) {
        document.getElementById("emailError").innerHTML = "Enter valid email";
        valid = false;
    }

    if(password.length < 6) {
        document.getElementById("passError").innerHTML = "Password must be at least 6 characters";
        valid = false;
    }

    if(password !== cpassword) {
        document.getElementById("cpassError").innerHTML = "Passwords do not match";
        valid = false;
    }

    if(phone.length != 10 || isNaN(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter valid 10 digit phone number";
        valid = false;
    }

    if(valid) {
        alert("Registration Successful!");
    }

    return valid;
}
