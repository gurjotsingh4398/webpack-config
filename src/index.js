import a from "./milky.jpeg";

function component() {
  let element = document.createElement("div");

  element.innerHTML = "Hello Webpack";

  const img = new Image();
  img.src = a;

  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
