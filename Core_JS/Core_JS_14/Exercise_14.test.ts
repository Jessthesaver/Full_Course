const maxRectangle = require("./Exercise_14");

describe("Simple test cases", () => {
  test("An empty matrix", () => {
    const matrix = [] as any[];

    const maxArea = maxRectangle(matrix);
    expect(maxArea).toBe(0);
  });

  test("A matrix without 1's", () => {
    const matrix = [[0]];
    const maxArea = maxRectangle(matrix);
    expect(maxArea).toBe(0);
  });

  test("An input of just a 1", () => {
    const matrix = [[1]];
    const maxArea = maxRectangle(matrix);
    expect(maxArea).toBe(1);
  });
  test("A 2x2 matrix with an area of 1", () => {
    const matrix = [
      [1, 0],
      [0, 1],
    ];
    const maxArea = maxRectangle(matrix);
    expect(maxArea).toBe(1);
  });

  test("A 2x2 matrix with only 1's", () => {
    const matrix = [
      [1, 1],
      [1, 1],
    ];
    const maxArea = maxRectangle(matrix);
    expect(maxArea).toBe(4);
  });

  test("A 2x2 matrix with a 0 to make the area smaller", () => {
    const matrix = [
      [0, 1],
      [1, 1],
    ];
    const maxArea = maxRectangle(matrix);
    expect(maxArea).toBe(2);
  });
});

test("Test with a more complex matrix, expects an area of 22", () => {
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
