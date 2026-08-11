export default {
    "run": function(argv){
let wnd = InitIframeWindow(this, "JSpaint.app", true, "https://jspaint.app")
wnd.resizeable = true
},
"destroy": function(){}
};