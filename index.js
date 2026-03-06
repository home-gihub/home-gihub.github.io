function hideallsections(except){
                document.getElementById('s1').className='section'
    document.getElementById('s2').className='section'
    document.getElementById('s3').className='section'
    document.getElementById('s4').className='section'
     document.getElementById('bladeSwitch' + String(except)).currentTime = 0;
    document.getElementById('bladeSwitch' + String(except)).play()

    

}

function alignallblades(currentpage){
    for(i=1;i<5;i++){
        if(i>currentpage) {
                document.getElementById('blade' + String(i)).className='blade right'

        } else {
  document.getElementById('blade' + String(i)).className='blade left'

        }

    }

}


function shrinkallblades(){
    for(i=1;i<5;i++){
  document.getElementById('blade' + String(i)).className+=` shrinking`

    }

}


document.getElementById('blade1').addEventListener('click', function(){
    hideallsections(1)
    document.getElementById('s1').className='section open'
    alignallblades(1)
    setTimeout(function(){
        document.getElementById('bladeLand').play()
    },250)
})

document.getElementById('blade2').addEventListener('click', function(){
    hideallsections(2)
    document.getElementById('s2').className='section open'
     alignallblades(2)
     setTimeout(function(){
        document.getElementById('bladeLand').play()
    },250)
})

document.getElementById('blade3').addEventListener('click', function(){
    hideallsections(3)
    document.getElementById('s3').className='section open'
     alignallblades(3)
     setTimeout(function(){
        document.getElementById('bladeLand').play()
    },250)
})

document.getElementById('blade4').addEventListener('click', function(){
    hideallsections(4)
    document.getElementById('s4').className='section open'
     alignallblades(4)
     setTimeout(function(){
        document.getElementById('bladeLand').play()
    },250)
})

function visitsub(link,sec) {
    shrinkallblades()
    document.getElementById('enterSub').play()
    document.getElementById('s'+String(sec)).className="full section"
    setTimeout(function(){window.location = link}, 1010)   
}