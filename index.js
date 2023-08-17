const container = document.querySelector(".container")
const rectContainer = container.getBoundingClientRect()

const playerBox = document.querySelector(".player-box")
playerBox.style.width = rectContainer.width + "px"

const player = document.querySelector("#player")

const slider = document.querySelector(".slider")
const sliderFill = document.querySelector(".slider-fill")

// VARIABLES

// CONSTANTS

// EVENT LISTENERS

player.oninput = () => sliderFill.style.width = player.value + "%"
player.addEventListener("mouseup", () => {
    console.log(player.value)
    slider.classList.add("slider-mouse-up")
    sliderFill.classList.add("slider-fill-mouse-up")
    slider.disabled = true
    sliderFill.disabled = true
})
