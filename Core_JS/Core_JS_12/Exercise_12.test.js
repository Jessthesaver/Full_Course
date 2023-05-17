const isSymmetric = require("./Exercise_12");

test("Symmetric", () => {
  const bTree = "(1,(2,(3),(4,(5))),(2,(3),(4,(5))))";

  const output = isSymmetric(bTree);

  expect(output).toBe(true);
});

test("Another case", () => {
  const bTree = "(A,(B,(X)),(B,(X)))";

  const output = isSymmetric(bTree);

  expect(output).toBe(true);
});

test("Not symmetric", () => {
  const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

  const out = isSymmetric(bTree);
  console.log(out);

  expect(out).toBe(false);
});
