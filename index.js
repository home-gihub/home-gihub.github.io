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
cookies = {"theme":""}
if (document.cookie==null || document.cookie == "null" || document.cookie == "") {
   settheme("purple.css", false)
} else {
 cookies = JSON.parse(document.cookie)
}

document.head.innerHTML +=`<link rel="stylesheet" href="${cookies["theme"]}"/>` 

function settheme(theme, showdlg) {
    
   cookies["theme"] = theme
   console.log(cookies)
    document.cookie = JSON.stringify(cookies)
    console.log(document.cookie)
    if (showdlg) {
      document.getElementById('reloaddlg').show()
    }
}