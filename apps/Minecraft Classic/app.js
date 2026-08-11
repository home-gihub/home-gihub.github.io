export default {
    "run": function(argv){
let wnd = InitIframeWindow(this, "Minecraft Classic", true, "https://classic.minecraft.net")
wnd.resizeable = true
},
"destroy": function(){}
}