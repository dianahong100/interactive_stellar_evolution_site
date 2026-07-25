document.getElementById("mass-generator-btn").onclick = function () {
    console.log("clidked")
    let size = randMass()

    if (size == "small") {
        console.log("new tab small")
        window.location.href ='red_giant.html'
    }
    else{
        console.log("new tab big")
        window.location.href ='supergiant.html'
    }
}


function randMass() {
    let mass = Math.random()

    // ~95% stars below 8 solar mass (not big)
    // adjusted to only 80%
    if (mass < 0.70) {
        console.log("small")
        return "small"
    }
    else {
        console.log("large")
        return "large"
    }
}