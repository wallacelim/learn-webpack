import _ from "lodash";
import "./style.css";
import MyIcon from "./icon.png";
import MyData from "./data.xml";
// NOTE: only default exports from JSON files can be used

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon = new Image(400);
  myIcon.src = MyIcon;

  element.appendChild(myIcon);

  console.log(MyData);

  return element;
}

document.body.appendChild(component());
