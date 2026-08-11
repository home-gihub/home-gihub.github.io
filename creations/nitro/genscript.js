url = window.location.toString()
let paramString = url.split('?')[1];
let queryString = new URLSearchParams(paramString);
let nitrol = queryString.get("length")
let acch = queryString.get("acc")
document.getElementById("acc").innerText = acch

setTimeout(() => {
    document.getElementById("btncnt").removeAttribute("hidden")
}, 1000)

document.getElementById("btn").onclick = () => {
    window.location = "./prank.html"
}