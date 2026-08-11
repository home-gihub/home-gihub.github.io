export default {
    "run": function(argv){
let wnd = InitIframeWindow(this, 'Music player', true, './apps/Music Player/app.html')
wnd.resizeable = false
},
"destroy": function(){}
}