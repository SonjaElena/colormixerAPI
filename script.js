let colorcode = document.getElementById("color");
let colorcontainer = document.querySelector("body");

let slred = document.getElementById("red");
let slgreen = document.getElementById("green");
let slblue = document.getElementById("blue");

slred.addEventListener("input", colorChange);
slgreen.addEventListener("input", colorChange);
slblue.addEventListener("input", colorChange);

function colorChange() {
  let vred = slred.value;
  let vgreen = slgreen.value;
  let vblue = slblue.value;

  let rgbvalues = `rgb(${vred},${vgreen},${vblue})`;

  colorcontainer.style.backgroundColor = rgbvalues;

  colorcode.textContent = rgbvalues;
}
