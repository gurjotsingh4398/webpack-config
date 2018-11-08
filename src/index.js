import a from "./milky.jpeg";
import "./style.css";

function component() {
  let element = document.createElement("div");
  let el = document.createElement("p");

  el.innerHTML = "Hello Webpack";

  const img = new Image();
  img.src = a;

  element.appendChild(img);
  element.appendChild(el);
  return element;
}

document.body.appendChild(component());
