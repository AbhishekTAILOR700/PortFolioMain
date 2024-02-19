function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// **************************************GHOPER UNCLE

document.addEventListener('mousemove', (e)=>{
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  const anchor = document.getElementById('anchor');
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width/2;
  const anchorY = rekt.top + rekt.height/2;
  // console.log(e);
  
  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  // console.log(angleDeg);

  const eyes = document.querySelectorAll(".eye");

  eyes.forEach(eye =>{
      eye.style.transform = `rotate(${180+angleDeg}deg)`;
  })
});

function angle(cx, cy, ex, ey){
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = rad*180 / Math.PI;
  return deg;
}




// ***************************************************************
const wrapper = document.getElementById("wrapper");

const rand = (min,max) => Math.floor(Math.random() * (max - min +1) + min);

const UniqueRand = (min,max,prev) => {
	let next = prev;
	
	while(prev === next) next = rand(min,max);
	
	return next;
}

const  combinations = [
	{ configuration: 1, roundness:1 },
	{ configuration: 1, roundness: 2 },
	{ configuration: 1, roundness: 4 },
	{ configuration: 2, roundness: 2 },
	{ configuration: 2, roundness: 3 },
	{ configuration: 3, roundness: 3 }
];

let prev = 0;

setInterval(() => {
	const index = UniqueRand(0, combinations.length-1, prev),
		 combination = combinations[index];
	
	wrapper.dataset.configuration = combination.configuration;
	wrapper.dataset.roundness = combination.roundness;
	
	prev=index;
}, 
	3000);


  // ***************************************Adding Year;
  // const d = new Date();
  // let currYear = d.getFullYear();
  // document.querySelector(".footerYear").textContent = "Copyright © ${year} Abhishek Tailor";
// document.getElementById("demo").innerHTML = year;
