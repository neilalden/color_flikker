const HEX = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorText = document.getElementById("colorText");
const getColorBtn = document.getElementById("getColorBtn");
getColorBtn.addEventListener("click", () => {
	var color = "#";
	for (let i = 0; i < 6; i++) {
		color += HEX[rand()];
	}
	colorText.innerText = color;
	document.querySelector("body").style.backgroundColor = color;
});
const rand = () => {
	return Math.floor(Math.random() * HEX.length);
};
