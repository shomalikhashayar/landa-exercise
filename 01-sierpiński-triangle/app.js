const textA = document.querySelector(".textA");

let x = 10;
let y = 10;

const dotContainer = document.getElementById("dotContainer");

function rollDice(i) {
  const result = Math.floor(Math.random() * 6) + 1;

  if (result === 1 || result === 2) {
    x = (x + textA.offsetLeft) / 2;
    y = (y + textA.offsetTop) / 2;
  } else if (result === 3 || result === 4) {
    x = (x + dotB.offsetLeft) / 2;
    y = (y + dotB.offsetTop) / 2;
  } else if (result === 5 || result === 6) {
    x = (x + dotC.offsetLeft) / 2;
    y = (y + dotC.offsetTop) / 2;
  }
  if (i > 200) {
    drawDot(x, y);
  }
}

function drawDot(x, y) {
  const newTDot = document.createElement("span");
  newTDot.className = "dot";
  newTDot.style.backgroundColor = "grey";
  newTDot.style.top = y + "px";
  newTDot.style.left = x + "px";
  newTDot.style.transform = "translate(-50%, -50%)";

  dotContainer.appendChild(newTDot);
}

for (let i = 0; i < 3000; i++) {
  rollDice(i);
}
