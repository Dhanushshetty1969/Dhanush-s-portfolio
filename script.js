document.addEventListener("DOMContentLoaded", function () {
    new Typed('#element', {
        strings: ['Web Developer.', 'AI Developer.', 'ML Engineer.'],
        typeSpeed: 80,
        loop: true
    });

});



document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".right ul li a");
    const currentPath = window.location.pathname.split("/").pop() || "index.html"; // Extracts the current page filename

    links.forEach(link => {
        if (link.getAttribute("href").includes(currentPath)) {
            link.classList.add("active"); // Adds active class to current page link
        }
    });
});

const toggleSwitch = document.getElementById('theme-toggle');
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded, hiding preloader in 1 second...");

    setTimeout(() => {
        let preloader = document.querySelector(".loader-container");
        if (preloader) {
            preloader.classList.add("disappear");
            console.log("Preloader hidden");
        } else {
            console.log("Preloader not found!");
        }
    }, 1000); // Keep preloader for 1 second
});




document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-theme");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-theme") ? "enabled" : "disabled");
    });

    // Highlight active nav link
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".right ul li a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});


document.getElementById("theme-toggle").addEventListener("change", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});
