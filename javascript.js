const styleCss = document.createElement("style");
document.head.appendChild(styleCss);

styleCss.sheet.insertRule('#container { display: flex ; flex-wrap: wrap; width: 100%;}', 0)

styleCss.sheet.insertRule('div {flex: 0 1 calc(100%/16); height: calc(90vh/16);outline: 1px solid salmon;}', 0)

styleCss.sheet.insertRule('#container div:hover { background-color: #3498db; }', 0);

styleCss.sheet.insertRule('.head { position: absolute; justify-self: anchor-center;top: 0; display:flex; }', 0);

page = document.createElement("div");
document.body.append(page)
page.id = "page"
page = document.getElementById("page")

divHead = document.createElement("div");
page.append(divHead);
divHead.classList.add("head");

button = document.createElement("button");
button.textContent = "Change"
divHead.appendChild(button)

container = document.createElement("div");
document.body.append(container)
container.id = "container"
container = document.getElementById("container")

for (i = 0; i < 16 * 16; i++) {
    content = document.createElement("div");
    container.append(content);
}

