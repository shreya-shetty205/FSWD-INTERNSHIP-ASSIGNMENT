document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    if (name === "" || email === "" || password === "") {
        message.className = "error";
        message.innerText = "All fields are required!";
    }
    else if (!email.includes("@") || !email.includes(".")) {
        message.className = "error";
        message.innerText = "Enter a valid email address!";
    }
    else if (password.length < 6) {
        message.className = "error";
        message.innerText = "Password must be at least 6 characters!";
    }
    else {
        message.className = "success";
        message.innerText = "Form submitted successfully!";
    }
});