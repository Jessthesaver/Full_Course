const mergeArrays = require("./Exercise4");

test.skip("The first array isnt sorted", () => {
  const largeArray = [9, 3, 5, 2, 6].concat(new Array(5));
  const smallArray = [0, 1, 4, 7, 8];

  const largeArraySize = largeArray.length;

  mergeArrays(largeArray, smallArray);
  expect(largeArraySize === largeArray.length).toBe(true);
  expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test.skip("The base array contains empty spaces", () => {
  const largeArray = [, , 3, 5, 2].concat(new Array(3));
  const smallArray = [0, 1, 4];

  mergeArrays(largeArray, smallArray);

  expect(largeArray).toEqual([0, 1, 2, 3, 4, 5]);
});

test.skip("The second array contains empty spaces", () => {
  const smallArr = [0, 7, ,];
  const largeArr = [0, 2, 4, 7].concat(new Array(2));

  const result = mergeArrays(largeArr, smallArr);

  expect(largeArr).toEqual([0, 0, 2, 4, 7, 7]);
});

test.skip("Both arrays contain empty spaces", () => {
  const smallArr = [0, 7, ,];
  const largeArr = [0, 2, 4, 7, ,].concat(new Array(2));

  const output = mergeArrays(largeArr, smallArr);

  expect(largeArr).toEqual([0, 0, 2, 4, 7, 7]);
});

test.skip("Both arrays are the same", () => {
  const smallArr = [0, 1, 2, 3];
  const largeArr = [0, 1, 2, 3].concat(new Array(4));

  const largeArraySize = largeArr.length;

  mergeArrays(largeArr, smallArr);

  expect(largeArraySize === largeArr.length).toBe(true);

  expect(largeArr).toEqual([0, 0, 1, 1, 2, 2, 3, 3]);
});

test.skip("The output array is already ordered", () => {
  const smallArr = [4, 5, 6];
  const largeArr = [0, 1, 2, 3].concat(new Array(3));

  const largeArrSize = largeArr.length;
  mergeArrays(largeArr, smallArr);

  expect(largeArrSize === largeArr.length).toBe(true);

  expect(largeArr).toEqual([0, 1, 2, 3, 4, 5, 6]);
});

test.skip("The arrays have multiple repeated elements", () => {
  const smallArr = [2, 2, 2, 1, 1];
  const largeArr = [0, 0, 0, 1, 1, 1, 2, 2].concat(new Array(5));

  mergeArrays(largeArr, smallArr);

  expect(largeArr).toEqual([0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2]);
});

test("One of the arrays contains a non numerical character", () => {
  const smallArr = [4, 5, 6, "a"];
  const largeArr = [0, 1, 2, 3].concat(new Array(3));

  expect(() => {
    mergeArrays(largeArr, smallArr);
  }).toThrow(new Error("The arrays must be composed of numerical characters"));
});
