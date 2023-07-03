import reverseBlocks from "./Exercise5";

test("Reverse an array", () => {
  const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const blockSize = 3;

  const output = reverseBlocks(testArr, blockSize);

  expect(output).toEqual([2, 1, 0, 5, 4, 3, 8, 7, 6, 9]);
});

test("Testing a block of the array size", () => {
  const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const blockSize = 10;

  const output = reverseBlocks(testArr, blockSize);

  expect(output).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
});

test("Testing a block of size 0", () => {
  const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const blockSize = 0;

  expect(() => {
    reverseBlocks(testArr, blockSize);
  }).toThrow(new Error("The blocks can´t be of size 0"));
});

test("test when the blocks size is larger than the array size", () => {
  const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const blockSize = 15;

  expect(() => {
    reverseBlocks(testArr, blockSize);
  }).toThrow(new Error("The blocks can´t be larger than the array"));
});
