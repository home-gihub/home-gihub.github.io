var video = document.querySelector('video#video');
var videosrc = document.querySelector('source');
var promise = video.play();

if (promise !== undefined) {
  promise.then(_ => {
    var yes = document.querySelector("input#yes")
yes.addEventListener('click',  function(){
    window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
})

    var no = document.querySelector("input#no")
no.addEventListener('click',  function(){
    videosrc.src = './clickno.mp4'
    video.load()
    video.play()
    document.querySelector('form').remove()
    setTimeout(() => {
        videosrc.src = './whilewait.mp4'
    video.load()
    video.play()
    }, 8000);
})


  }).catch(error => {
    document.body.innerHTML = '<h1>Please enable autoplay!</h1>'
  });
} 
