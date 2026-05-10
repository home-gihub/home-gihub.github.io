function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


function gowanim(url) {
    document.getElementById("pagecontainer").removeAttribute("goin")
    document.getElementById("pagecontainer").setAttribute("goout", "")
    setTimeout(() => {
        fetch(url)
  .then(response => {
    // When the page is loaded convert it to text
    return response.text()
  })
  .then(html => {
    // Initialize the DOM parser
    const parser = new DOMParser()

    // Parse the text
    const doc = parser.parseFromString(html, "text/html")
       document.getElementsByTagName("title")[0].innerText = doc.getElementsByTagName("title")[0].innerText
 
    document.body=doc.body
    // You can now even select part of that html as you would in the regular DOM
    // Example:
    // const docArticle = doc.querySelector('article').innerHTML

    console.log(doc)
  })
  .catch(error => {
     console.error('Failed to fetch page: ', error)
  })
       // window.location=url
    }, 1000);
}
if (document.cookie==null || document.cookie == "null" || document.cookie == "") {
   settheme("purple.css", false)
}

document.head.innerHTML +=`<link rel="stylesheet" href="${getCookie("theme")}"/>` 

function settheme(theme, showdlg) {
    // set theme  
   setCookie("theme",theme,999999999)
    console.log(document.cookie)
    if (showdlg) {
      document.getElementById('reloaddlg').show()
    }
}