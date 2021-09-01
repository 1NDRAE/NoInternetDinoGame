const gameoverDiv = document.querySelector("#gameover");
let gameover = false;
const gamebodyScreenElement = document.getElementsByClassName("modal");

var modal = document.getElementById("myModal");
var gameModal = document.getElementById("myGameModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

const losingMessageElement = document.getElementById("losingMessage");

function jump(dino) {
    dino.classList.add("jump");
    setTimeout(() => {
        dino.classList.remove("jump");
    }, 1000);
}

function gameOver() {
    losingMessageElement.classList.add("show")
}

btn.onclick = function() {
    console.log("clicked")
    losingMessageElement.classList.remove("show")
}

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(
        window.getComputedStyle(dinoCactus).getPropertyValue("left")
    );
    if (cactusLeft < 120 && cactusLeft > 0 && dinoTop >= 250) {
        gameOver();
    }
}, 10);

document.addEventListener("keypress", (event) => {
    const dino = document.getElementById("dino");
    var dinoCactus = document.getElementById("cactus");
    if (event.code === "Space") {
        jump(dino);
    }
});