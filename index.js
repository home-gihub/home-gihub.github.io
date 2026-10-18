async function open(path) {
  return fetch(path).then((res) => {
    if (!res.ok) {
      throw new Error("Couldn't access file");
    } else {
      return res.blob();
    }
  });
}

async function navTo(path) {
  let html = await parseFile(await open(path), path)
  document.getElementById("content").innerHTML = html
}


async function parseFile(blob,path) {
    let text = await blob.text()
    let lines = text.split("\n")
    let items = [];
    let html = `<h2>${path}</h2><ul>`
    lines.forEach(element => {
      console.log(items)
      items.push(element.split("\t"))
    });
    items.forEach(element => {
      switch (element[0][0]) {
        case "i":
          html+=`<li>${element[0].substring(1,element[0].length)}</li>`
          break;
        case "1":
          html+=`<li>📁 <a onclick="navTo('${element[2]}${element[1]}')">${element[0].substring(1,element[0].length)}</a></li>`
        break;
        case "h":
          html+=`<li>📄 <a href="${element[2]}${element[1]}">${element[0].substring(1,element[0].length)}</a></li>`
        break;
        default:
          break;
      }
    });

    html+= `</ul>`
    return html
}


navTo("./home.gopher")