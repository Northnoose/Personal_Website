document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".uit-logo");

    function resizeLogo() {
        if (window.innerWidth < 768) {
            logo.style.width = "100px";
        } else {
            logo.style.width = "150px";
        }
        logo.style.height = "auto";
    }

    resizeLogo();
    window.addEventListener("resize", resizeLogo);
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });
});

