import isSameLevel from "./Exercise_13";

test("Initial test of the algorithm", () => {
  const bTree = "(1,(2,(3),(4,(5))),(6,(7),(8,(9))))";

  const output = isSameLevel(bTree, "9", "5");

  expect(output).toBe("Numbers found at the same level");
});

test("Simple cases", () => {
  const bTree = "(1,(3))";
  const bTree2 = "(1)";
  const bTree3 = "";

  const test1 = isSameLevel(bTree, "1", "3");

  const test2 = isSameLevel(bTree2, "1", "1");

  const test3 = isSameLevel(bTree3, "0", "0");

  expect(test1).toBe("Numbers not found at the same level");

  expect(test2).toBe("Numbers not found at the same level");

  expect(test3).toBe("Invalid Tree structure");
});
