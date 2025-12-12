const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    // Toggle 'active' class on hamburger and nav menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
