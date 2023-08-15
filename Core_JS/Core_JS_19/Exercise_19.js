const { resolve } = require("path");

(function (global) {
  let originalSetTimeout = global.setTimeout;
  let root = document.getElementById("results");
  const result = (text, pass) => {
    const el = document.createElement("li");
    el.textContent = text;
    pass !== undefined && (el.style.color = pass ? "green" : "red");
    return el;
  };
  const assert = (pass, message) => root.appendChild(result(message, pass));
  function test(description, testBlock) {
    const parent = root;

    root = assert(undefined, description).appendChild(
      document.createElement("ul")
    );
    testBlock();
    root = parent;
  }

  const setTimeout = async (...args) => {
    const [callback, delay, caption, pass] = args;

    let temp = root;

    await new Promise((resolve) => {
      return originalSetTimeout(resolve, delay);
    });

    root = temp;

    callback(caption, pass);
  };

  global.setTimeout = setTimeout;

  global.assert = assert;
  global.test = test;
})(window);
