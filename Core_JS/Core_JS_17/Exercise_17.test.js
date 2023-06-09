const { createLinkedList } = require("../Core_JS_16/createList");
const isPalindrome = require("./Exercise_17");

test("Basic test to prove the algorithm functionality", () => {
  const array = [1, 6, 4, 5, 4, 6, 1];
  const linkedList = createLinkedList(array);

  const isPalin = isPalindrome(linkedList);
  expect(isPalin).toBe(true);
});

test("Testing a short palindrome of even length", () => {
  const array = [1, 2, 2, 1];

  const linkedList = createLinkedList(array);
  const isPalin = isPalindrome(linkedList);

  expect(isPalin).toBe(true);
});

test("test when the given array is not a palindrome", () => {
  const array = [1, 2, 3, 1];

  const linkedList = createLinkedList(array);
  const isPalin = isPalindrome(linkedList);

  expect(isPalin).toBe(false);
});
