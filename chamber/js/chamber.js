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



/*
function displaybanner(){
	banner= documentgetElementById('banner')

	const banner = new Date();
const invitation= banner.getDay();

if( invitation == 2 || invitation == 3){
 banner.style.display='block'
}
}
*/