const links = document.querySelectorAll(".nav-link");
const menu = document.querySelector("#navbarSupportedContent");
links.forEach((link) => {
    link.addEventListener("click", (e) => {
       
            menu.classList.toggle("show");   
    });
})