import _ from "lodash";

function getComponent() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return import(/* webpackChunkName: "lodash" */ "lodash")
    .then(({ default: _ }) => {
      const element = document.createElement("div");
      element.innerHTML = _.join(["Hello", "Webpack"], " ");
      return element;
    })
    .catch((error) => "An error occured while loading the component");
}

getComponent().then((component) => document.body.appendChild(component));
