// app.js
document.addEventListener("DOMContentLoaded", function () {
    // Navigation toggle for mobile
    const navToggle = document.getElementById("nav-toggle");
    const navContent = document.getElementById("nav-content");

    if (navToggle && navContent) {
        navToggle.addEventListener("click", function () {
            navContent.classList.toggle("hidden");
        });
    }
});
