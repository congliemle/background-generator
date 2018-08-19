var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".button");

function randomHexColor() {
	return `#${(Math.random().toString(16) + "000000").slice(2, 8)}`;
}

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = `${body.style.background}`;
}

function randomGradient() {
    color1.value = randomHexColor();
    color2.value = randomHexColor();
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomGradient);