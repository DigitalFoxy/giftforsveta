setInterval(function makeCat() {
	document.getElementById("meow").src = "https://digitalfoxy.github.io/giftforsveta/img/meow-content.png";
	setTimeout(function makeCatDefault() {document.getElementById("meow").src = "https://digitalfoxy.github.io/giftforsveta/img/meow_neutral.png"}, 1000)
},2500);

function makefon1() {
document.getElementById("title").style.background = "linear-gradient(85deg,khaki,cornsilk)"
document.getElementById("footer").style.background = "linear-gradient(-85deg,khaki,cornsilk)"
}
function makefon2() {
document.getElementById("title").style.background = "linear-gradient(85deg,greenyellow,cornsilk)"
document.getElementById("footer").style.background = "linear-gradient(-85deg,greenyellow,cornsilk)"
}
function makefon3() {
document.getElementById("title").style.background = "linear-gradient(85deg,rosybrown,cornsilk)"
document.getElementById("footer").style.background = "linear-gradient(-85deg,rosybrown,cornsilk)"
}

function makeCatMad() {
	document.getElementById("meow").src = "https://digitalfoxy.github.io/giftforsveta/img/meow-mad.png";
}
function makeCatThinking() {
	document.getElementById("meow").src = "https://digitalfoxy.github.io/giftforsveta/img/meow-thinking.png";
}
function makeCatLol() {
	document.getElementById("meow").src = "https://digitalfoxy.github.io/giftforsveta/img/meow-lol.png";
}
function makeCatCrying() {
	document.getElementById("meow").src = "https://digitalfoxy.github.io/giftforsveta/img/meow-crying.png";
}
