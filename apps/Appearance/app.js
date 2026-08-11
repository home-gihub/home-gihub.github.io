export default {
    "run": function(argv){
wind = InitWindow(this, "Appearance", true)
let prev = document.createElement('img')
prev.style.width = "100px"
prev.style.height = "auto"
let image = ''
let btnsdv = document.createElement('div')
let selbtn = document.createElement('button')
selbtn.innerText = 'Upload image'
let disptp = "tile"
selbtn.onclick = () => {
    var input = document.createElement('input');
input.type = 'file';
disptp = "tile"
input.onchange = e => { 

   // getting a hold of the file reference
   var file = e.target.files[0]; 

   // setting up the reader
   var reader = new FileReader();
   reader.readAsDataURL(file); // this is reading as data url

   // here we tell the reader what to do when it's done reading...
   reader.onload = readerEvent => {
      var content = readerEvent.target.result; // this is the content!
      image = content
      prev.src = image
   }

}
input.click();
}
let setbtn = document.createElement('button')
setbtn.innerText = 'Save (restart required)'
setbtn.onclick = () => {
   let osJSON = JSON.parse(localStorage.getItem("os"))
   osJSON["wallpaper"] = image
   osJSON["wallpaperdisp"] = disptp
   localStorage.setItem("os", JSON.stringify(osJSON))
}
let disptld = document.createElement('button')
disptld.innerText = 'Tile'
disptld.onclick = function(){disptp = "tile"}
let dispstr = document.createElement('button')
dispstr.innerText = 'Stretch'
dispstr.onclick = function(){disptp = "stretch"}
let dispfit = document.createElement('button')
dispfit.innerText = 'Fit'
dispfit.onclick = function(){disptp = "fit"}
let dispcnt = document.createElement('div')
dispcnt.style.display = "inline-block"
dispcnt.style.width = "fit-content"
dispcnt.appendChild(disptld)
dispcnt.appendChild(dispstr)
dispcnt.appendChild(dispfit)
wind.contentdom.appendChild(prev)
wind.contentdom.appendChild(dispcnt)
btnsdv.appendChild(selbtn)
btnsdv.appendChild(setbtn)
wind.contentdom.appendChild(btnsdv)
},
"destroy": function(){}
} ;