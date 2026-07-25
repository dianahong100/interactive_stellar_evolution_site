// ---------------------protostar-----------------------------
const slider = document.getElementById("protostar-temperature")

slider.addEventListener('input', function(event) 
    {
        var temperature = event.target.value
        console.log(temperature)
        if (temperature == 10) {
            window.location.href = "main_sequence.html"
        }
    }
)


// ---------------------index-----------------------------
document.getElementById("compress-nebula-button").onclick = async function () {
    console.log("clidked")
    expand()
    setTimeout(() => {
        console.log("new tab")
        window.location.href ='protostar.html'
    }, 2000)
}


function expand() {
    const img = document.getElementById('nebula-image')
    let scale = 1.0

    function step() {
        console.log("shrinking")
        scale -= 0.01 // 1% shrink per frame
        img.style.transform = `scale(${scale})`

        if (scale > 0.1) { 
        requestAnimationFrame(step) // stop at 10%
        }
    }
    requestAnimationFrame(step)
}