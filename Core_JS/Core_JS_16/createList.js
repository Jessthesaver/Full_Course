class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

const createLinkedList = (array, loopPosition = null) => {
  let linkedList = new Node(array[0]);

  let temp = linkedList;

  let loop;

  if (loopPosition === 0) {
    loop = linkedList;
  }

  let i = 0;
  while (i < array.length) {
    i++;
    temp.next = new Node(array[i]);
    temp = temp.next;
    if (loopPosition === i) {
      loop = temp;
    }
    // i++;
  }

  if (loopPosition) {
    temp.next = loop;
  }

  return linkedList;
};

module.exports = { createLinkedList };
