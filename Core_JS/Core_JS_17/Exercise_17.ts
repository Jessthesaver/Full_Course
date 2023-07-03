export default function isPalindrome(linkedList: any) {
  const head = linkedList.data;
  if (!linkedList || !linkedList.next || !head) return true;

  let fast = linkedList;
  let slow = linkedList;
  let temp;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let prev = null;
  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  let left = linkedList;
  let right = prev.next;

  while (right) {
    if (left.data !== right.data) {
      return false;
    }

    left = left.next;
    right = right.next;
  }

  return true;
}
