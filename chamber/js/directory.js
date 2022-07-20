/*directory page */

const requestURL = "js/data.json";
const cards = document.querySelector(".cards");

async function getBusiness() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    buildBusinessCards(data);
  } else {
    throw Error(response.statusText);
  }
}

function buildBusinessCards(data) {
  data.business.forEach((business) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let phone = document.createElement("p");
    let url = document.createElement("a");
    let img = document.createElement("img");
    let level = document.createElement("p");

    h2.innerHTML = `${business.name}`;
    p.innerHTML = `${business.adress}`;
    phone.innerHTML = `${business.phonenumber}`;
    url.innerHTML = `${business.websiteurl}`;
    img.setAttribute("src", business.imageurl);
    level.innerHTML = ` ${business.membershiplevel}`;

    card.append(h2);
    card.append(img);
    card.appendChild(p);
    card.append(phone);
    cards.append(card);
    card.append(url);
    card.append(level);
  });
}

getBusiness();

//Last modified//
document.querySelector(
  "#updated"
).textContent = `Last updated: ${document.lastModified}`;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

//Hamburguer Button
function toggleMenu() {
  document.getElementById("primarynav").classList.toggle("open");
  document.getElementById("hamburgerbtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerbtn");
x.onclick = toggleMenu;
