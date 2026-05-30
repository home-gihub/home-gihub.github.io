dlgbtn = document.getElementById("dlgbtn")
captcha = document.getElementById("captcha")
handle = document.getElementById("handle")
lengt = document.getElementById("length")
err = document.getElementById("err")
// dialog
acchandle = document.getElementById("acchandle")
nitrolen = document.getElementById("nitrolen")
cdlgbtn = document.getElementById("cdlgbtn")
dlg =  document.getElementById("dlg")
genbtn = document.getElementById("genbtn")
dlgbtn.onclick = () => {
    if (captcha.value.toUpperCase() != "XY273") {
        err.innerText = "You must solve the captcha"
        return
    }
    if (handle.value == "") {
        err.innerText = "Enter a valid discord handle"
        return
    }

    if (lengt.value == "y") {
        nitrolen.innerText = "1 Year"
    } else {
        nitrolen.innerText = "1 Month"
    }

    acchandle.innerText = "@" + handle.value

    dlg.showModal()
}
genbtn.onclick = () => {
    window.location=`./gen.html?length=${lengt.value}&acc=${encodeURIComponent(handle.value)}`
}
cdlgbtn.onclick = () => {
    dlg.close()
}