const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}

function changeBG() {
  //get random number between 0 - 3
  const randomNumber = getRandomNumber()
  console.log(randomNumber)
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
}

btn.addEventListener("click", changeBG)
