import isSymmetric from "./Exercise_12";

test("Symmetric", () => {
  const bTree = "(1,(2,(3),(4)),(2,(4),(3)))";

  const output = isSymmetric(bTree);

  expect(output).toBe(true);
});

test("Another case", () => {
  const bTree = "(A,(B),(B))";

  const output = isSymmetric(bTree);

  expect(output).toBe(true);
});

test("Not symmetric", () => {
  const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

  const out = isSymmetric(bTree);

  expect(out).toBe(false);
});
