import createLinkedList from "../Core_JS_16/createList";
import isPalindrome from "./Exercise_17";

test("Basic test to prove the algorithm functionality using a success case palindrome array", () => {
  const array = [1, 6, 4, 5, 4, 6, 1];
  const linkedList = createLinkedList(array);

  const isPalin = isPalindrome(linkedList);
  expect(isPalin).toBe(true);
});

test("short palindrome of even length should return true", () => {
  const array = [1, 2, 2, 1];

  const linkedList = createLinkedList(array);
  const isPalin = isPalindrome(linkedList);

  expect(isPalin).toBe(true);
});

test("when the given array is not a palindrome should return false", () => {
  const array = [1, 2, 3, 1];

  const linkedList = createLinkedList(array);
  const isPalin = isPalindrome(linkedList);

  expect(isPalin).toBe(false);
});
