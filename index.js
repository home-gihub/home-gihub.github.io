function hideallsections(except){
    for(i=1;i<5;i++){
        if(i!=except) {
                document.getElementById('s1').className='section'
    document.getElementById('s2').className='section'
    document.getElementById('s3').className='section'
    document.getElementById('s4').className='section'
        }

    }

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


document.getElementById('blade1').addEventListener('click', function(){
    hideallsections(1)
    document.getElementById('s1').className='section open'
    alignallblades(1)
})

document.getElementById('blade2').addEventListener('click', function(){
    hideallsections(2)
    document.getElementById('s2').className='section open'
     alignallblades(2)
})

document.getElementById('blade3').addEventListener('click', function(){
    hideallsections(3)
    document.getElementById('s3').className='section open'
     alignallblades(3)
})

document.getElementById('blade4').addEventListener('click', function(){
    hideallsections(4)
    document.getElementById('s4').className='section open'
     alignallblades(4)
})