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

function makeSiteTangible() {
    site = {}
    switch (siteLayout) {
        case 0:
            site.navbar = {
                "links": [

                ]
            }
            break
        case 1:
        case 3:
            site.lsidebar = {
                "links": [

                ]
            }
            
        case 2:
        case 3:
            site.rsidebar = {
                "links": [

                ]
            }
            break
    }

    site.main = {
        "text": "This is placeholder text"
    }
}

setWiz(0)

function next() {
    currStep = currStep + 1
    if (currStep == wizard.length) {
        site = makeSiteTangible()
    }
    setWiz(currStep)
}