import printTree from "./Exercise10";

test("Infix test drive ", () => {
  const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

  expect(printTree(bTree)).toStrictEqual([
    "D",
    "B",
    "E",
    "A",
    "H",
    "F",
    "I",
    "C",
    "G",
    "J",
  ]);
});

test("Prefix test drive ", () => {
  const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

  expect(printTree(bTree, "prefix")).toStrictEqual([
    "A",
    "B",
    "D",
    "E",
    "C",
    "F",
    "H",
    "I",
    "G",
    "J",
  ]);
});

test("Postfix test drive", () => {
  const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
  expect(printTree(bTree, "postfix")).toStrictEqual([
    "D",
    "E",
    "B",
    "H",
    "I",
    "F",
    "J",
    "G",
    "C",
    "A",
  ]);
});

test("Invalid trees", () => {
  expect(() => printTree("(a", "infix")).toThrow(Error);
  expect(() => printTree("a,b)", "infix")).toThrow(Error);
  expect(() => printTree("a)")).toThrow(Error);
  expect(() => printTree("()))", "infix")).toThrow(Error);
  expect(() => printTree("(()()())", "infix")).toThrow(Error);
  expect(() => printTree("(a),()", "infix")).toThrow(Error);
});
