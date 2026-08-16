audio = document.getElementById('audio')
button = document.getElementById('button')

button.addEventListener('click', function(){
audio.currentTime = 0;
    audio.play()
})