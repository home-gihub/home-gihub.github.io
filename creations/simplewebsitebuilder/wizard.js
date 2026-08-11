wizard = [
    {
        "header": "Welcome!",
        "summary": ` Welcome to the simple website builder!
            Before you make your website, you'll need to answer a few questions
            before making your website.`,
        "action": `When you're ready to proceed, press Next`
    },
    {
        "header": "Site layout",
        "summary": `Do you want a navbar, one sidebar, or two sidebars?
        <br>
        <button onclick="siteLayout=0">Navbar</button>
        <button onclick="siteLayout=1">One sidebar (left)</button>
        <button onclick="siteLayout=2">One sidebar (right)</button>
        <button onclick="siteLayout=3">Two sidebars</button>
        `,
        "action": `When you have chosen your layout, press Next`
    },
    {
        "header": "Header",
        "summary": `Do you want a header image?
        <br>
        <button onclick="siteHeader=false">No</button>
        <button onclick="siteHeader=true">Yes</button>
        `,
        "action": `When you have made you choice, press Next`
    },
    {
        "header": "Finish!",
        "summary": `
        Well done! You have completed initial setup for
        your site! 
        `,
        "action": `When you are ready to enter the site editor, press Next`
    }
]
siteLayout=0
currStep = 0


function setWiz(id) {
    document.getElementById("header").innerHTML = wizard[id].header 
    document.getElementById("summary").innerHTML = wizard[id].summary 
    document.getElementById("action").innerHTML = wizard[id].action
    
}

function makeSiteTangible(site) {
    if(siteLayout == 0) {
            site.navbar = {
                "links": [

                ]
            }
    }
    if(siteLayout == 1 || siteLayout == 3) {
            site.lsidebar = {
                "links": [

                ]
            }
    }
    if(siteLayout == 2 || siteLayout == 3) {
           site.rsidebar = {
                "links": [

                ]
            }
    }

    site.colors = [
        "#cccc00",
        "#ffcc00",
        "#ff3300",
        "#000000"
    ]

    site.main = {
        "text": "This is placeholder text"
    }

    return site
}

function tangiblesitetohtml(site){
    html = `
    <html>
    <head>
    </head>
    <body>
    <section>
    <img id="header" src="./placeholder.png"/>
    `
     if (site.navbar != null) {
        html += `<nav id="navbar"  style="background-color:${site.colors[2]};">
        <ul>
        `
        for(i=0;i<site.rsidebar.links.length;i++) {
            html += `<li><a style="color:${site.colors[3]};" href="${site.rsidebar.links[i].href}">${site.rsidebar.links[i].text}</a></li>`
        }
        html += `</ul>
        </nav>`
    }
    if (site.lsidebar != null) {
        html += `<aside id="lsidebar"  style="background-color:${site.colors[2]};">
        <ul>
        `
        for(i=0;i<site.lsidebar.links.length;i++) {
            html += `<li><a style="color:${site.colors[3]};" href="${site.lsidebar.links[i].href}">${site.lsidebar.links[i].text}</a></li>`
        }
        html += `</ul>
        </aside>`
    }

    html += `<main style="background-color:${site.colors[1]};" >
    ${site.main.text}
    </main>`

    if (site.rsidebar != null) {
        html += `<aside id="rsidebar" style="background-color:${site.colors[2]};" >
        <ul>
        `
        for(i=0;i<site.rsidebar.links.length;i++) {
            html += `<li><a style="color:${site.colors[3]};" href="${site.rsidebar.links[i].href}">${site.rsidebar.links[i].text}</a></li>`
        }
        html += `</ul>
        </aside>`
    }
   return html
}

setWiz(0)

function next() {
    currStep = currStep + 1
    if (currStep == wizard.length) {
        site = makeSiteTangible({})
        document.getElementById("page").innerHTML = tangiblesitetohtml(site)
        document.head.innerHTML = `<link rel="stylesheet" href="./site.css">`
        return
    }
    setWiz(currStep)
}

