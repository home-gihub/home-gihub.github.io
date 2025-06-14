let audio = document.createElement('audio')
audio.src = "https://home-gihub.github.io/nuke.mp3"
audio.style.display = 'none'
audio.id = "lolonukeaudio"
document.innerHTML += audio.getHTML()
audio.load()
audio.addEventListener('canplaythrough', function(){
    audio.play()
    setTimeout(function(){
        document.body.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=QAv8eX3LJc1mnmHW&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },5000)
})