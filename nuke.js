let audio = document.createElement('audio')
audio.src = "https://home-gihub.github.io/nuke.mp3"
audio.style.display = 'none'
audio.id = "lolonukeaudio"
document.body.appendChild(audio)
let rraudio = document.createElement('audio')
rraudio.src = "https://ia802306.us.archive.org/20/items/NeverGonnaGiveYouUp/jocofullinterview41.mp3"
rrudio.style.display = 'none'
rraudio.id = "rraudio"
document.body.appendChild(audio)
document.body.appendChild(rraudio)
let aaudio = document.getElementById('lolonukeaudio')
let rraaudio = document.getElementById('rraudio')
aaudio.load()
rraaudio.load()
aaudio.addEventListener('canplaythrough', function(){
    aaudio.play()
    setTimeout(function(){
            document.body.innerHTML = `<h1>lol</h1>`
            rraaudio.play()
    },5000)
})