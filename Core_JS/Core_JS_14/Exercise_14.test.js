const maxRectangle = require("./Exercise_14");

test.skip("Simple cases", () => {
  let matrix = [];

  let maxArea = maxRectangle(matrix);
  expect(maxArea).toBe(0);

  matrix = [[0]];
  maxArea = maxRectangle(matrix);
  expect(maxArea).toBe(0);

  matrix = [[1]];
  maxArea = maxRectangle(matrix);
  expect(maxArea).toBe(1);

  matrix = [
    [1, 0],
    [0, 1],
  ];
  maxArea = maxRectangle(matrix);
  expect(maxArea).toBe(1);

  matrix = [
    [1, 1],
    [1, 1],
  ];
  maxArea = maxRectangle(matrix);
  expect(maxArea).toBe(4);

  matrix = [
    [0, 1],
    [1, 1],
  ];
  maxArea = maxRectangle(matrix);
  expect(maxArea).toBe(2);
});

test.skip("Basic test", () => {
  const matrix = [
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  ];

  const maxArea = maxRectangle(matrix);

  expect(maxArea).toBe(22);
});
