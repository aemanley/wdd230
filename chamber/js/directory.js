/*directory page */

const requestURL = "js/data.json";
const cards = document.querySelector(".cards");

async function getBusiness() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    buildBusinessCards(data);
  } 
 else {
    throw Error(response.statusText);
  }
}

function buildBusinessCards(data) {
  data.business.forEach(business => {
    let card =document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let phone = document.createElement("p");
    let url = document.createElement("a");
    let img = document.createElement("img");

    h2.innerHTML = `${business.name}`;
    p.innerHTML = `${business.adress}  ${business.membershiplevel}`;
    phone.innerHTML = `${business.phonenumber}`;
    url.innerHTML = `${business.websiteurl}`;
    img.setAttribute("src", business.imageurl);

    card.append(h2);
    card.appendChild(p);
    card.append(phone);
    cards.append(card);
    card.append(url);
    card.append(img);
  });
}

getBusiness();
