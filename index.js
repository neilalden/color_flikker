const HEX = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorText = document.getElementById("colorText");
const getColorBtn = document.getElementById("getColorBtn");
const goCrazyBtn = document.getElementById("go-crazy-btn");
let isGoingCrazy = true;
let int;
getColorBtn.addEventListener("click", () => {
	generateColor();
});
goCrazyBtn.addEventListener("click", () => {
	isGoingCrazy = !isGoingCrazy;
	if (isGoingCrazy) {
		clearInterval(int);
		goCrazyBtn.setAttribute("style", "color:crimson;border: 1px solid crimson");
		getColorBtn.disabled = false;
	} else {
		int = setInterval(() => {
			generateColor();
		}, 300);
		goCrazyBtn.setAttribute("style", "color: white;background-color: crimson;");
		getColorBtn.disabled = true;
	}
});
const generateColor = () => {
	var color = "#";
	for (let i = 0; i < 6; i++) {
		color += HEX[rand()];
	}
	colorText.innerText = color;
	document.querySelector("body").style.backgroundColor = color;
};
const rand = () => {
	return Math.floor(Math.random() * HEX.length);
};
