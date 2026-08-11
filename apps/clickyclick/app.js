export default {
    "el": function(){
    let aud = new Audio("./apps/clickyclick/click.mp3")
    aud.currentTime = 0
aud.play()
},
    "run": function(argv){
let wnd = InitWindow(this, "Clickyclick", true)
wnd.contentdom.innerText = 'your mouse is now clicky!'

document.addEventListener('mousedown', this.el)
},
"destroy": function(){
    document.removeEventListener('mousedown', this.el)
}
}