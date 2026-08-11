export default {
    "run": function(argv){
        let wnd = InitIframeWindow(this, "rng.exe", true, './apps/rng.exe/app.html')
        wnd.resizeable = true
    },
    "destroy": function() {

    }
}
