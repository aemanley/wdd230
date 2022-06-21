
const images = document.querySelectorAll('img[data-src]')

const preloadingImage = (img) => {
  const src = img.getAttribute('data-src')
  img.src = src
}

const imgOptions = {
  threshold: 0.8,
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      preloadingImage(entry.target)
      imgObserver.unobserve(entry.target)
      entry.target.style.filter = 'blur(0em)'
    }
  })
}, imgOptions)

images.forEach((image) => {
  imgObserver.observe(image)
})




document.querySelector('#updated').textContent=`Last updated: ${document.lastModified}`


const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;




function toggleMenu(){
	document.getElementById('primarynav').classList.toggle("open");
	document.getElementById('hamburgerbtn').classList.toggle("open");
}

const x= document.getElementById('hamburgerbtn')
x.onclick= toggleMenu;


const dayofweek= new Date().getDay();
let bannernot= document.getElementById('banner');
if (dayofweek == 1 || dayofweek == 2){
	bannernot.style.display= "block"
}
else{
	bannernot.style.display="none"
}


// directory page 

const requestURL = 'data.json';
const cards = document.querySelector('.cards');