const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
}

function changeBG() {
  let hexColor = "#"
  for (let p = 0; p < 6; p++) {
    hexColor += hex[getRandomNumber()]
  }

  color.textContent = hexColor
  document.body.style.backgroundColor = hexColor
}

btn.addEventListener("click", changeBG)
