Windows = []

function invokeExec(path, argv) {
  try {
    app = import(`../${path}`).then(function(a){
      console.log(a.default)
      a.default.run(argv)
    })
  } catch (e) {
    console.error(e)
  }
}

class abswnd {
  handle
  closeable
  #resizeable
  fullscreen
  #title
  #zorder
  contentdom
  headerdom
  dom
  closed
  moveel
  upel
  downel
  offsetx
  offsety
  #app

  set title(t) {
    this.#title = t
    this.headerdom.childNodes[0].innerText = t
  }

  enableDrag() { 
    //topbar can be whatever you want to hold while dragging
    let actualthis = this
this.headerdom.addEventListener("pointerdown",function (e) {mousedown(e, actualthis)})
function mousedown(e, wnd){
wnd.contentdom.style.pointerEvents="none"
      e.preventDefault();
  window.addEventListener("pointermove", mousemove)
  window.addEventListener("pointerup", mouseup)
  let prevX = e.clientX
  let prevY = e.clientY
  for(let i=0;i<Windows.length;i++) {
    if(Windows[i] == null) {
      continue
    } else if (i == wnd.handle) {
      Windows[i].zorder = 2
    } else {
      Windows[i].zorder = 0
    }
  }

  function mousemove(e){
      let newX = e.clientX - prevX
  let newY = e.clientY - prevY
      const rect = wnd.dom.getBoundingClientRect()
  wnd.dom.style.left = rect.left + newX + "px"
  wnd.dom.style.top = rect.top + newY + "px"
  prevX = e.clientX
  prevY = e.clientY
  }
  function mouseup(){
    window.removeEventListener("pointermove", mousemove)
    window.removeEventListener("pointerup", mouseup)
    wnd.contentdom.style.pointerEvents="auto"
  }
}
  }
   
  get title() {return this.#title}

  get resizeable() {return this.#resizeable}

  set zorder(z) {
    this.#zorder = z
    this.dom.style.zIndex=z
  }

  set resizeable(r) {
    this.#resizeable = r
    if (r) {
      this.contentdom.style = "resize: both;overflow: auto;min-width: 100px;min-height: 200px;"
    }
  }

  close() {
       if (this.#app!=null) {
        this.#app.destroy()
      }
      Windows[this.handle] = null
      this.closed = true
    this.dom.remove();

  }

  set app(app) {
        this.#app = app
  }

  addCloseButton() {

  let cbtn= document.createElement('div')
        cbtn.innerText = 'X'
    cbtn.className='windcbtn'
    let actualthis = this
    cbtn.addEventListener('click', function(e){
      if (actualthis.#app!=null) {
        actualthis.#app.destroy()
      }
      Windows[actualthis.handle] = null
      actualthis.closed = true
      actualthis.dom.remove();

    })
    this.headerdom.appendChild(cbtn)
  }
}

function InitWindow(app, title, closeable, fullscreen) {
    wind = document.createElement('div')
      fwnd = new abswnd();

  if(Windows.length == 0) {
    fwnd.handle = 0
    Windows.push(fwnd)
  } else {
    let spacefound = false;
    for(let i=0;i<Windows.length;i++) {
      if (Windows[i] == null) {
        fwnd.handle = i
        spacefound = true
        Windows[i] = fwnd
      } 
    }

    if (!spacefound) {
      
    Windows.push(fwnd)
    fwnd.handle = Windows.length-1
    }
  }

  
    if (title!='') {
    header = document.createElement('div')
    header.innerText = title
    header.className='header'
        wind.appendChild(header)
    }
    content = document.createElement('div')
    content.className='windcnt'
    content.style = `overflow: auto;min-width: 100px;min-height: 200px;`

  
    wind.appendChild(content)
  wind.style = `position:absolute;`
 
  // add the real window to the dom
  document.body.appendChild(wind)

// attach the figurative window to the real window in the dom
  fwnd.dom = wind
  fwnd.headerdom = header
  fwnd.contentdom = content
  fwnd.title = title
  fwnd.resizeable = title != ''


    if (closeable) {
      // this is self explanitory
      fwnd.addCloseButton()
      if (app!=null) {
        fwnd.app = app
      }
    }

  console.log(fwnd)
    if(title!='') {
      // we handle windows without a title as system apps
      content.style+=`resize: both;`
    }

    // yeah we can move it
    fwnd.enableDrag()
    return fwnd
}

function InitIframeWindow(app, title, closeable, src) {
  wnd = InitWindow(app, title, closeable, false)
iframe = document.createElement('iframe')
iframe.setAttribute("src", src)
iframe.style = `width:100%;height:100%;`
wnd.contentdom.appendChild(iframe)
return wnd
}
