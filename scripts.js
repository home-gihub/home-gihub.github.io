function closedlg(dlg) {
    document.getElementById(dlg).className='closing'
    setTimeout(() => {
      document.getElementById(dlg).close() 
        document.getElementById(dlg).className=''
    }, 480);
}

function gowtr(url) {
  document.body.setAttribute("goout", "")
  setTimeout(() => {
      window.location = url
    }, 480);
}