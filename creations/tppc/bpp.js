let notifTimeout;
let notifShown = false;
let notifText;

function shownotif(text){
    if(!notifShown || notifText != text) {
        if(!notifShown) {
        notifShown = true;}
        window.top.document.getElementById('notifNoise').play()
    }
    try{
    clearTimeout(notifTimeout)
    } finally {
    }
    window.top.document.getElementById("notif").innerHTML = text
    window.top.document.getElementById("notif").className = 'notif'
    notifTimeout = setTimeout(function(){
        window.top.document.getElementById("notif").className = 'notif hidden'
        notifShown = false
    }, 2000)
    notifText=text;
}
setTimeout(function(){
shownotif("Saving content. Please don't <br> turn off your system.")
setTimeout(function(){
      window.top.document.getElementById('mcmp').play()
}, 2000)}, 2000)