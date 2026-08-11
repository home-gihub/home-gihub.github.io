
export default {
    "run": function(argv){
let wnd = InitIframeWindow(this, 'Textarea', true, './apps/Textarea/app.html')
wnd.resizeable = true
},
"destroy": function(){}
}