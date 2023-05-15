let homeDisplay = document.getElementById("homeScore")
let guestDisplay = document.getElementById("guestScore")
let homeScore = 0
let guestScore = 0

// Make the home's buttons work
function button1h() {
    homeScore += 1
    homeDisplay.textContent = homeScore
}
function button2h() {
    homeScore += 2
    homeDisplay.textContent = homeScore
}
function button3h() {
    homeScore += 3
    homeDisplay.textContent = homeScore
}

// Make the guest's buttons work
function button1g() {
    guestScore += 1
    guestDisplay.textContent = guestScore
}
function button2g() {
    guestScore += 2
    guestDisplay.textContent = guestScore
}
function button3g() {
    guestScore += 3
    guestDisplay.textContent = guestScore
}

// Restart the game
function reset() {
    homeScore = 0
    guestScore = 0
    homeDisplay.textContent = 0
    guestDisplay.textContent = 0
}
