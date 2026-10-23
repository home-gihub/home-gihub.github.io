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
          if (element[0].length == 1) {
             html+=`<li><hr></li>`
          } else {
            html+=`<li>${element[0].substring(1,element[0].length)}</li>`
          }
          break;
        case "1":
          html+=`<li>📁 <a onclick="navTo('${element[1]}')">${element[0].substring(1,element[0].length)}</a></li>`
        break;
        case "h":
          html+=`<li>🔗 <a href="${element[1]}">${element[0].substring(1,element[0].length)}</a></li>`
        break;
        case "b":
          html+=`<li><h2>${element[0].substring(1,element[0].length)}</h2></li>`
        break;
        case "p":
          html+=`<li><img src="${element[0].substring(1,element[0].length)}" alt="${element[1]}"/></li>`
        break;
        case "e":
          html+=`<li>⚠️ ${element[0].substring(1,element[0].length)}</li>`
        break;
        case "j":
          let j = eval(element[0].substring(1,element[0].length))
          html+=`<li>${j}</li>`
        break;
        default:
          break;
      }
    });

    html+= `</ul>`
    return html
}


navTo("./home.sm")