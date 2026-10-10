disk = {
    "creations": {
        "checker.site": null,
        "emmergencycheckatrade.site": null,
        "evilspotify.site": null,
        "imagewebpage.site": null,
        "premium.site": null,
        "ProtectedValue.site": null,
        "shopbingbong.site": null,
        "springfieldpolicedepartment.site": null,
        "windowshops.site": null,
        "zoommaker.site": null,
},
"README.txt": null,
}
path = ["creations"]
Filehandlers = {
    "site": (p,dir) => {
            window.location = `./${p.join('/')}/${dir.substring(0,dir.length-5)}/index.html`
    }
}

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

FilePreviewhandlers = {
    "site": async (p,dir) => {
            let icon = await fetch(`./${p.join('/').substring(0,p.join('/').length - 5)}/icon.png`).then(
                (resp) => {
                    if(!resp.ok) {
                        return null
                    } else {
                        return resp.blob()
                    }
                }
            )
        if (icon != null) { icon = await(blobToBase64(icon)) }

            return `
            ${icon != null ? `<img class="icon" src="${icon}"/>` : "[ Missing icon ]"}
            <p>${dir}</p>
            Site
            `
    },
    "txt": async (p,dir) => {
        let txt =  await fetch(`./${p.join('/')}`)
        .then(resp => resp.text())

            return `
            <p class="filecontents">${txt}</p>
            `
    }
}


function getDir(p) {
    let current = disk
    for(let i=0;i<p.length;i++){
        current = current[p[i]]
    }
    return current
}

function upddirlist() {
    let el = document.getElementById("files")
    let html = ``
    let dir = getDir(path)
    dir[".."] = -1
    console.info(`Loading: ${path}, got ${JSON.stringify(dir)}`)
    Object.keys(dir).forEach(element => {
        html += `<li onmouseover="preview('${element}')" onclick="goto('${element}')">${element}</li>`
    });
    el.innerHTML=html
}

function updbreadcrumbs() {
    let el = document.getElementById("path")
    el.innerText = "root:/" + path.join("/")
}

// function to open a directoy relative to the current one
function goto(dir) {
    let p = path.slice()
    p.push(dir)
    if (getDir(p) == -1) {
        path.pop()
    } else if (getDir(p) == null) {
        let ex = dir.split(".")
        ex=ex[ex.length-1]
        console.info(`finding a handler to open file with extention ${ex}`)
        if (Filehandlers[ex]) {
            Filehandlers[ex](path,dir)
        } else {
            alert("Cannot open: is a file; no handlers were found")
        }
    } else {
        path.push(dir)
    }

    upddirlist()
    updbreadcrumbs()
}

// function to grab the preview of a file
// then place it in the dom
async function preview(file) {
    let el = document.getElementById("preview")
    // p is the path of the file including the actual file itself
    let p = path.slice()
    p.push(file)
    // if (file has extension) and (extension has preview)
    // then set the preview to the found one
    // else
    // set the preview to a generic one
    if(FilePreviewhandlers[file.split(".")[file.split(".").length-1] ]) {
        text = await FilePreviewhandlers[file.split(".")[file.split(".").length-1] ](p, file)
    } else {
    text = `<p>${file}</p>
    <p>
Type: ${
    
    getDir(p) == null 
    ? file.includes(".") 
        ? file.split(".")[file.split(".").length-1] 
            : "File"
        : "Directory" } </p> `
        }
    el.innerHTML=text
}

upddirlist()
updbreadcrumbs()
