

css=document.createElement('link')
css.setAttribute('rel', 'stylesheet')
css.setAttribute('href', 'core.css')
document.head.appendChild(css)
if (localStorage.getItem("os")) {
    osJSON = JSON.parse(localStorage.getItem("os"))
    document.body.style.backgroundImage = osJSON["wallpaper"] == null || osJSON["wallpaper"] == "" ? document.body.style.backgroundImage : `url(${osJSON["wallpaper"]})`
    switch (osJSON["wallpaperdisp"]) {
        case "tile":
            
            break;
        case "stretch":
            document.body.style.backgroundSize = "100vw 100vh"
            break;

         case "fit":
            document.body.style.backgroundSize = "100vw auto"
            document.body.style.backgroundOrigin = "left"
            document.body.style.backgroundPositionY = "center"
            break;
    
        default:
            break;
    }
} else {
    localStorage.setItem("os", JSON.stringify({"wallpaper": null}))
}
invokeExec("./apps/explore/explore.js", [])