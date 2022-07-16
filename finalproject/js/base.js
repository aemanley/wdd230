/*Hamburguer Button*/
const hamburguer =document.querySelector(".hamburguer");
const navMenu =document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})
/* Closes the menu when a link is click*/
document.querySelector("nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))