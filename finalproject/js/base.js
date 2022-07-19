 
/*Last Modified*/
document.querySelector(
    "#updated"
  ).textContent = `Last updated: ${document.lastModified}`;
  
  const datefield = document.querySelector(".date");
  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  datefield.innerHTML = `<em>${fulldate}</em>`;



 

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




