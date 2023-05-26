const button = document.querySelector(".button");
const container = document.querySelector(".container");
const template = document.querySelector(".template").content;

button.addEventListener("click", () => {
  const input = document.querySelector(".input");
  const container = document.querySelector(".container");

  if (input.value > 10) {
    if (container) {
      container.style.display = "none";
    }

    const error = document.createElement;
    error.setAttribute("class", "error");
    error.innerHTML = "The input is too large!";
    document.body.appendChild(error);
  } else if (input.value && input.value < 11) {
    const error = document.querySelector(".error");
    if (error && container) {
      container.style.display = "flex";
      error.style.display = "none";
    }
    const deep = input.value;
    makeTriangle(deep);
  }
});

const addDivs = (root) => {
  const emptyDivs = [...root.querySelectorAll(".fill:empty")];

  emptyDivs.forEach((div) => {
    const fragment = document.createDocumentFragment();

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);

    div.appendChild(fragment);
  });
};

const triangle = (n) => {
  return (fn) => {
    if (n > 0) {
      fn();
      triangle(n - 1)(fn);
    }
  };
};

const makeTriangle = (n) => {
  const containerTemplate =
    document.querySelector(".containerTemplate").content.firstElementChild;

  const containerClone = containerTemplate.cloneNode(true);

  triangle(n)(() => addDivs(containerClone));

  container.replaceChildren(containerClone);
};
