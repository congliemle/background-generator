var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".button");

function randomHexColor() {
	return `#${(Math.random().toString(16) + "000000").slice(2, 8)}`;
}

// function setGradient() {
//     body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
// 	css.textContent = `${body.style.background}`;
// }

function randomGradient(event) {
    if (event.type === "input") {
        body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
        css.textContent = `${body.style.background}`;
    } else {
        color1.setAttribute("value", randomHexColor());
        color2.setAttribute("value", randomHexColor());
        console.log(color1);
        console.log(color2);
        body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
        console.log(body.style.background);
        css.textContent = `${body.style.background}`;
    }  
}

color1.addEventListener("input", randomGradient);

color2.addEventListener("input", randomGradient);

randomButton.addEventListener("click", randomGradient);