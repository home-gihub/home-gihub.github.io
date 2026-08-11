export default {
    "run": function(argv){
let wnd = InitIframeWindow(this, 'System Explorer', false, './apps/explore/explore.html')
wnd.resizeable = true
},
"destroy": function(){
    window.navigation.reload()
}
}