function gowanim(url,ismain) {
    document.getElementById("pagecontainer").removeAttribute("goin")
    document.getElementById("pagecontainer").setAttribute(ismain ? "goout" : "gohome", "")
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
    // Example:setCookie("theme",theme,999999)
    // const docArticle = doc.querySelector('article').innerHTML

    console.log(doc)
  })
  .catch(error => {
     console.error('Failed to fetch page: ', error)
  })
       // window.location=url
    }, 1000);
}



if (localStorage.getItem("theme") == null) {
   console.log("Theme is null. Setting to default...") 
   settheme("green.css", false)
}

document.head.innerHTML +=`<link rel="stylesheet" href="${localStorage.getItem("theme")}"/>` 

function settheme(theme, showdlg) {
    // set theme  
    localStorage.setItem("theme",theme)
    console.log(document.cookie)
    if (showdlg) {
      document.getElementById('reloaddlg').show()
    }
}