function gowanim(url) {
    document.getElementById("pagecontainer").removeAttribute("goin")
    document.getElementById("pagecontainer").setAttribute("goout", "")
    setTimeout(() => {
        window.location=url
    }, 1500);
}