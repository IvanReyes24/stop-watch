let start = document.querySelector(".start-btn");
let pauseResume = document.querySelector(".pauseResume-btn");
let reset = document.querySelector(".reset-btn");

let miliSec = document.querySelector(".miliSec");
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");

let timer = null;
let startTime = 0;
let elapseTime = 0;
let isRunning = false;

function startFunction(){
	if(!isRunning){
		startTime = Date.now() - elapseTime;
		timer = setInterval(update,10)
		isRunning = true;
	}
}

function pauseFunction(){
	if(isRunning){
		clearInterval(timer);
		isRunning = false
	}else{
		startFunction();
	}
}

function resetFunction(){
	clearInterval(timer)
	timer = null;
	elapseTime = 0;
	startTime = 0;
	isRunning = false;
	miliSec.textContent = "00";
	seconds.textContent = "00";
	minutes.textContent = "00";
	hours.textContent = "00";
}

function update(){
	let currentDate = Date.now();
	elapseTime = currentDate - startTime;

	let toHr = Math.floor(elapseTime / (1000 * 60 * 60));
	let toMin = Math.floor(elapseTime / (1000 * 60) % 60);
	let toSec = Math.floor(elapseTime / 1000 % 60)
	let toMili = Math.floor(elapseTime % 1000 / 10);

	toHr = String(toHr).padStart(2, "0")
	toMin = String(toMin).padStart(2, "0")
	toSec = String(toSec).padStart(2, "0")
	toMili = String(toMili).padStart(2, "0")

	miliSec.textContent = toMili;
	seconds.textContent = toSec;
	minutes.textContent = toMin;
	hours.textContent = toHr;

}


start.addEventListener("click",()=>{
	pauseResume.classList.add("show-btn");
	reset.classList.remove("hide-btn");
	reset.classList.add("show-btn");
	start.classList.remove("show-btn")
	start.classList.add("hide-btn");
	pauseResume.classList.remove("hide-btn");
})

pauseResume.addEventListener("click", ()=>{
	let resume = document.querySelector(".resume");
	let pause = document.querySelector(".pause");

		resume.classList.toggle("show-btn")
		pause.classList.toggle("hide-btn")
})

reset.addEventListener("click",()=>{
	pauseResume.classList.add("hide-btn");
	reset.classList.remove("show-btn");
	reset.classList.add("hide-btn");
	start.classList.remove("hide-btn")
	start.classList.add("show-btn");
})


