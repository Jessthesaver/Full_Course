import mergeArrays from "./Exercise4";

test("Both arrays are the same", () => {
  const smallArr = [0, 1, 2, 3];
  const largeArr = [0, 1, 2, 3].concat(new Array(4));

  const largeArraySize = largeArr.length;

  mergeArrays(largeArr, smallArr);

  expect(largeArraySize === largeArr.length).toBe(true);

  expect(largeArr).toEqual([0, 0, 1, 1, 2, 2, 3, 3]);
});

test("The output array is already ordered", () => {
  const smallArr = [4, 5, 6];
  const largeArr = [0, 1, 2, 3].concat(new Array(3));

  const largeArrSize = largeArr.length;
  mergeArrays(largeArr, smallArr);

  expect(largeArrSize === largeArr.length).toBe(true);

  expect(largeArr).toEqual([0, 1, 2, 3, 4, 5, 6]);
});
