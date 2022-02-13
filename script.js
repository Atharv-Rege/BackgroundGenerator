var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var gradientCode = document.getElementById("gradientCode");
var c1HEX = document.getElementById("c1HEX");
var c2HEX = document.getElementById("c2HEX");
var buttonCopy = document.querySelector("button");


gradientCode.innerHTML = "Gradient Code: \"linear-gradient(to right, #ff33f8, #ffff00)\"";
c1HEX.innerHTML = "Color 1 Hex Code: \"#ff33f8\"";
c2HEX.innerHTML = "Color 2 Hex Code: \"#ffff00\"";
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	function codeDisplay() {
		gradientCode.innerHTML = 'Gradient Code: "linear-gradient(to right, ' 
		+ color1.value
		+", "
		+ color2.value
		+")\"";
		c1HEX.innerHTML = "Color 1 Hex Code: " + "\"" + color1.value + "\"";
		c2HEX.innerHTML = "Color 2 Hex Code: " + "\"" + color2.value + "\"";
	};
	codeDisplay();
};


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
