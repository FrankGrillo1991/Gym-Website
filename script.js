//Js
document.querySelector(".mobile-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("active");
});

// Make mobile menu accessible with keyboard
const mobileBtn = document.querySelector(".mobile-btn");
mobileBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        document.querySelector(".menu").classList.toggle("active");
    }
});

const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message"); 
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();  // Stops form submission

    // Simple regex for email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.value.trim() === "") {
        showMessage("Please enter your name.", "error")
    } else if (!emailPattern.test(email.value.trim())) {
        showMessage("Please enter a valid email address.", "error");
    } else if (message.value.trim().length < 10) {
        showMessage("Message should be at least 10 characters.", "error");
    } else {
        showMessage("Thank you! Your message has been sent.", "success");
        form.reset(); // Reset the form
    }
});

function showMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.style.color = type === "error" ? "red" : "green"
}