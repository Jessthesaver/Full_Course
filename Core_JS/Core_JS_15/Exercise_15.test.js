const findIndexElement = require("./Exercise_15");

test("Basic test", () => {
  let array = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13];
  const output = findIndexElement(array);
  expect(output).toBe(6);
});

test("Find balance at 2nd position in a lenght 3 array", () => {
  let array = [1, 1, 2];
  const output = findIndexElement(array);
  expect(output).toBe(1);
});

test("A failure test", () => {
  let array = [1, 2, 3, 5, 9, 9, 2, 8, 10, 12];
  const output = findIndexElement(array);
  expect(output).toBe(-1);
});
