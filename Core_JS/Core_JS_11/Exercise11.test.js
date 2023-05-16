/** @jest-environment jsdom */

const { querySelectorAll } = require("./Exercise11");

document.body.innerHTML = `
    <section>
        <div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
        <div id="2" class="note"></div>
        <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
        <div id="4" class="note"></div>
        <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
        <div id="6" class="note"><input type="checkbox" class="is-complete"></div>
        <div class="another"></div>
        <div></div>
    </section>
`;

test("initial test", () => {
  const output = [];
  const nodeList = querySelectorAll("div.note < input.is-complete[checked]");

  for (const element of nodeList) {
    output.push(element.innerHTML);
  }

  expect(output).toEqual([
    '<input type="checkbox" class="is-complete" checked=""> ',
    '<input type="checkbox" class="is-complete" checked="">',
    '<input type="checkbox" class="is-complete" checked="">',
  ]);
});
