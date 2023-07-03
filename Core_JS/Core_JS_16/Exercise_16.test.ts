import detectCycle from "./Exercise_16";
import createLinkedList from "./createList";

test("Basic test", () => {
  const linkedList = createLinkedList([1, 2, 2, 3, 3, 6, 7, 2, 1], 3);

  const isCycle = detectCycle(linkedList);

  expect(isCycle).toBe(true);
});

test("Loop at the beginning", () => {
  const linkedList = createLinkedList([1, 2, 2, 3, 3, 6, 7, 2, 1], 1);
  const isCycle = detectCycle(linkedList);

  expect(isCycle).toBe(true);
});

test("No loop", () => {
  const linkedList = createLinkedList([1, 2, 2, 3, 3, 6, 7, 2, 1]);

  const isCycle = detectCycle(linkedList);

  expect(isCycle).toBe(false);
});
