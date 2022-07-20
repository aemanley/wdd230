const requestURL = "js/temple.json";
const cards = document.querySelector(".cards");

async function getTemples() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    buildTemplesCards(data);
  } else {
    throw Error(response.statusText);
  }
}

function buildTemplesCards(data) {
  data.temples.forEach((temples) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let ad = document.createElement("p");
    let ph = document.createElement("p");
    let ser = document.createElement("p");
    let ord = document.createElement("p");
    let tcs = document.createElement("p");
    let img = document.createElement("img");

    h2.innerHTML = `${temples.name}`;
    ad.innerHTML = `${temples.adress}`;
    ph.innerHTML = `${temples.telephone}`;
    ser.innerHTML = `${temples.services}`;
    ord.innerHTML = `${temples.ordinanceschedule}`;
    tcs.innerHTML = `${temples.templeclosureschedule}`;
    img.setAttribute("src", temples.image);
   

    card.append(h2);
    cards.append(card);
    cards.append(ad);
    cards.append(ph);
    cards.append(ser);
    cards.append(ord);
    cards.append(tcs);
    cards.append(img);
  });
}
getTemples();
