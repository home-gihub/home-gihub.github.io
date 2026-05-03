function maketext(text) {
    output = ""
    for (i=0;i<=50;i++) {
        if (i<50) {
            output += `<div class="zoomtext" style="position:relative;z-index:${i};left:${100-i*1}pt;margin-top:-${i*1.30}pt;top:${i}px;color:rgb(${(i/50)*128},${(i/50)*128},${(i/50)*128});font-size:${i}pt;">${text}</div>`
        } else {
              output += `<div class="zoomtext" style="position:relative;z-index:${i};left:${100-i*1}pt;margin-top:-${i*1.30}pt;top:${i}px;color:rgb(0,0,0);font-size:${i}pt;">${text}</div>`
        }
    }

    document.getElementById("output").value = output
    document.getElementById("preview").innerHTML = output
}

document.getElementById("make").addEventListener("click", function(){
    maketext(document.getElementById("text").value)
})