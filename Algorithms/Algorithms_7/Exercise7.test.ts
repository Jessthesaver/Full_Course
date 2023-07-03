import longestRunOfTwoNumbers from "./Exercise7";

test("Test run of the algorithm", () => {
  const input = "1212223311212223";

  expect(longestRunOfTwoNumbers(input)).toBe("1121222");
});

test("Longest run is at the end", () => {
  const input = "121212232322";
  expect(longestRunOfTwoNumbers(input)).toBe("2232322");
});

test("Longest run is in the middle of the string", () => {
  const input = "121234344431212";
  expect(longestRunOfTwoNumbers(input)).toBe("3434443");
});
test("A string of just one number", () => {
  const input = "11111111111";

  expect(longestRunOfTwoNumbers(input)).toBe("11111111111");
});

test("A string that contains a non number character", () => {
  const input = "121212aaa232322";

  expect(() => {
    longestRunOfTwoNumbers(input);
  }).toThrow(new Error("The string contains non numerical characters"));
});

test("A string which longest run is of a non numerical character", () => {
  const input = "121212aaabbbbaaaa";

  expect(() => {
    longestRunOfTwoNumbers(input);
  }).toThrow(new Error("The string contains non numerical characters"));
});
