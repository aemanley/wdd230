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
    let name = document.createElement("h2");
    let cih = document.createElement("h3");
    let ad = document.createElement("p");
    let ph = document.createElement("p");
    let sh = document.createElement("h3");
    let ser = document.createElement("p");
    let sch = document.createElement("h3");
    let ord = document.createElement("p");
    let csch = document.createElement("h3");
    let tcs = document.createElement("p");
    let img = document.createElement("img");

    name.innerHTML = `${temples.name}`;
    cih.innerHTML = `${temples.contactinfoh3}`;
    ad.innerHTML = `${temples.adress}`;
    ph.innerHTML = `${temples.telephone}`;
    sh.innerHTML = `${temples.servicesh3}`;
    ser.innerHTML = `${temples.services}`;
    sch.innerHTML = `${temples.schedulesh3}`;
    ord.innerHTML = `${temples.ordinanceschedule}`;
    csch.innerHTML = `${temples.closeschedulesh3}`;
    tcs.innerHTML = `${temples.templeclosureschedule}`;
    img.setAttribute("src", temples.image);

    card.append(name);
    cards.append(card);
    card.append(img);
    card.append(cih);
    card.append(ad);
    card.append(ph);
    card.append(sh);
    card.append(ser);
    card.append(sch);
    card.append(ord);
    card.append(csch);
    card.append(tcs);
   
  });
}
getTemples();
