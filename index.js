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

async function lineToHTML(line){
  let items = line.split("\t")
  let html = ``
  switch (items[0][0]) {
        case "i":
         
          if (items[0].length == 1) {
             return `<li><hr></li>`
          } else {
            return `<li>${items[0].substring(1,items[0].length)}</li>`
          }
          break;
        case "1":
          return `<li>📁 <a onclick="navTo('${items[1]}')">${items[0].substring(1,items[0].length)}</a></li>`
        break;
        case "h":
          return `<li>🔗 <a href="${items[1]}">${items[0].substring(1,items[0].length)}</a></li>`
        break;
        case "b":
          return `<li><h2>${items[0].substring(1,items[0].length)}</h2></li>`
        break;
        case "p":
          return `<li><img src="${items[0].substring(1,items[0].length)}" alt="${items[1]}"/></li>`
        break;
        case "e":
          return `<li>⚠️ ${items[0].substring(1,items[0].length)}</li>`
        break;
        case "j":
          if ((items[0].substring(1,items[0].length)).includes("fetch(")) {
            return await lineToHTML(`eJS tried using fetch`)
          }
          let j = eval(items[0].substring(1,items[0].length))
          return `<li>${await lineToHTML(j)}</li>`
        break;
        default:
          return ``;
      }
}


async function parseFile(blob,path) {
    let text = await blob.text()
    let lines = text.split("\n")
    let html = `<h2>${path}</h2><ul>`
    for(let i=0;i<lines.length;i++) {
      html += await lineToHTML(lines[i])
    }

    html+= `</ul>`
    return html
}


navTo("./home.sm")