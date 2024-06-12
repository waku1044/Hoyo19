const links = document.querySelectorAll(".nav-link");
const menu = document.querySelector("#navbarSupportedContent");
const navEvento = document.querySelector(".navCatering");
links.forEach((link) => {
    link.addEventListener("click", (e) => {
       
            menu.classList.toggle("show");   
    });
})

if(window.innerWidth >= 992){
    navEvento.innerText = "Eventos";

}
