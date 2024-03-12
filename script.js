let colorcode = document.getElementById("color");
let colorcontainer = document.querySelector("body");

let hexCode = document.getElementById("color");

let urlApi = "https://x-colors.yurace.pro/api/random";

// Regler
let slred = document.getElementById("red");
let slgreen = document.getElementById("green");
let slblue = document.getElementById("blue");

// Function
async function randomColor(url) {
  try {
    let response = await fetch(url);

    if (response.ok) {
      let data = await response.json();

      hexCode.innerHTML = data.hex;

      let rgbValue = data.rgb;

      colorcontainer.style.backgroundColor = rgbValue;

      let numbers = rgbValue.match(/\d+/g);

      document.getElementById("red").value = numbers[0];
      document.getElementById("green").value = numbers[1];
      document.getElementById("blue").value = numbers[2];
    }
  } catch (err) {
    console.error("Could not catch color", err);
  }
}

randomColor(urlApi);
