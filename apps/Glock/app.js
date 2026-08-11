export default {
    "run": function(argv){
let wind = InitWindow(this, "Glock", true)
for (let i=0;i<Windows.length;i++) {
    let dv = document.createElement('div')
    let taskname = document.createElement('p')
    taskname.innerText = Windows[i].title
    let killbtn = document.createElement("button")
    killbtn.onclick = function(){
        Windows[i].close()
        wind.close()
    }
    killbtn.innerText = "Public execution"
    dv.style.width = "fit-content"
    dv.appendChild(killbtn)
    dv.appendChild(taskname)
    wind.contentdom.appendChild(dv)
}
},
"destroy": function(){}
}