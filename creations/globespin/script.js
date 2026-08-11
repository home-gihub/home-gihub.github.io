globecnt = document.getElementById("globecnt")
globeimg = document.getElementById("globeimg")
function getimg(pos) {
    mod = 1 + Math.round((pos/8) % 60)
    if (mod>60) {mod=60}
    numlen = 1
    if (mod > 9) {
        numlen = 2
    }

    string = `00`
    if(numlen==1) {string += `0`}
    string += String(mod)
    string += `.webp`
    return string
}


globecnt.addEventListener("mousemove", function(e){
    x = e.offsetX
    y = e.offsetY
    globeimg.src = getimg(x)
})
