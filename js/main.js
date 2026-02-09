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

// Compatibility Note Toggle
const compatToggle = document.getElementById('compatToggle');
const compatNote = document.getElementById('compatNOte');

if (compatToggle && compatNote) {
    compatToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isHidden = compatNote.style.display === 'none';
        compatNote.style.display = isHidden ? 'block' : 'none';
        compatToggle.textContent = isHidden ? 'Hide Compatibility Information' : 'Read Compatibility Information';
    });
}
