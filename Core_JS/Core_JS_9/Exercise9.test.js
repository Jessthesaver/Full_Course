const {
  flattenArrayRecursive,
  flattenArrayImperative,
} = require("./Exercise9");
//Implement an array flattening function with recursive and iterative versions. Do not use the built-in function.
const input = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];

/**
 * expected output:
 * [1,2,3,4,5,6,7,8,9,10]
 */

test.skip("Test drive of imperative implementation", () => {
  expect(flattenArrayImperative(input)).toStrictEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
});

test.skip("Test drive of recursive implementation", () => {
  expect(flattenArrayRecursive(input)).toStrictEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
});

test.skip("An array with empty spaces", () => {
  const inputWithEmpty = [1, 2, 3, , [4, 5, [6, [[7]], 8]], [9, 10]];

  expect(flattenArrayImperative(inputWithEmpty)).toStrictEqual([
    1,
    2,
    3,
    "",
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]);
});
test.skip("An array that is already flat", () => {
  const inputFlat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  expect(flattenArrayImperative(inputFlat)).toStrictEqual(inputFlat);

  expect(flattenArrayRecursive(inputFlat)).toStrictEqual(inputFlat);
});
