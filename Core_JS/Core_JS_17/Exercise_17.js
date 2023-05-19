let reverse = (head) => {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  head = prev;
  return head;
};

const isPalindrome = function (linkedList) {
  let current = linkedList;
  let copy = JSON.parse(JSON.stringify(linkedList));
  let reversed = reverse(copy);
  reversed = reversed.next;

  while (current) {
    if (current.data !== reversed?.data) {
      return false;
    }

    current = current.next;
    reversed = reversed?.next;
  }

  return true;
};

module.exports = isPalindrome;
