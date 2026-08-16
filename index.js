currPage = 0
limitPage = 1
document.getElementById("npbtn").onclick = () => {
    if (currPage == limitPage) 
        return

    document.getElementById(`page${currPage}`).setAttribute("hidden", "")
    document.getElementById(`pagen${currPage}`).setAttribute("inactive", "")
    currPage++
    document.getElementById(`page${currPage}`).removeAttribute("hidden")
    document.getElementById(`pagen${currPage}`).removeAttribute("inactive")
    
}

document.getElementById("lpbtn").onclick = () => {
    if (currPage == 0) 
        return

    document.getElementById(`page${currPage}`).setAttribute("hidden", "")
    document.getElementById(`pagen${currPage}`).setAttribute("inactive", "")
    currPage--
    document.getElementById(`page${currPage}`).removeAttribute("hidden")
      document.getElementById(`pagen${currPage}`).removeAttribute("inactive")
    
}



pagination = document.createElement("div")
pagination.classList.add("pagen")

for (let i=0;i<=limitPage;i++){
    let clone = pagination.cloneNode(true);
    clone.id = `pagen${i}`
    clone.setAttribute("inactive", "")
    document.getElementById("pages").appendChild(clone)
}

document.getElementById(`pagen${currPage}`).removeAttribute("inactive")

emptyapp = {"icon": "", "link": ""}

function addblankapps(arr, num) {

for (let i=0;i<=num;i++){
    arr.push(emptyapp)
}
}

// apps manifests
apps = [
    {"icon": "./3dtxtmkr.png", "link": "./creations/zoommaker/index.html", "title": "3D text maker"},
    {"icon": "./shopbingb.png", "link": "./creations/shopbingbong/index.html", "title": "Shop chime sim"},
    {"icon": "./srngfldpd.png", "link": "./creations/springfieldpolicedepartment/index.html", "title": "Springfield police deparment"},
        {"widget": `<div class="widget2x1 welcome"><p>Welcome</p>Welcome to my website! <br>
Here, you can find all the things I have made. <br>
Just click on an icon to open!</div>`},
    null,
    {"icon": "./evilspotify.png", "link": "./creations/evilspotify/index.html", "title": "Evil spotify"},
    {"icon": "./echkatrd.png", "link": "./creations/emmergencycheckatrade/index.html", "title": "Emergency checkatrade"}
]

addblankapps(apps, 14 - apps.length )
addblankapps(apps, 14)

// just go through them all and add them
let page = 0
let i = 0
let actuali = 0

// ye totaly safe m9 trust me i am the kwik skoper 900
while (true) {
    if (actuali >= apps.length) 
        break
    else if (apps[actuali] === null) 
        elm = `<div class="empty"></div>`
    else if (apps[actuali]["widget"]) 
        elm = apps[actuali]["widget"]
    else if (apps[actuali]["link"] == "" ) 
        elm = `<a></a>`
    else
        elm = `<a href="${apps[actuali]["link"]}"><img src="${apps[actuali]["icon"]}"><p>${apps[actuali]["title"]}</p></a>`
    document.getElementById(`page${page}`).innerHTML += elm

    i++
    actuali++ 
    if (i >= 15) {
        i=0;
        page++
    }
}