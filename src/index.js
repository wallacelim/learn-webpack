import _ from "lodash";

import "./style.css";
import MyIcon from "./icon.png";
import MyData from "./data.xml";
// NOTE: only default exports from JSON files can be used
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  // Example for loading styles
  element.classList.add("hello");

  // Example for loading images
  const myIcon = new Image(400);
  myIcon.src = MyIcon;

  // Example for loading data
  console.log(MyData);

  // Example for output management
  const button = document.createElement("button");
  button.innerHTML = "Click me and then check the console!";
  button.onclick = printMe;

  element.appendChild(button);
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
