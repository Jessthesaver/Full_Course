class Node {
  data: any;
  next: Node | null;
  constructor(val: any) {
    this.data = val;
    this.next = null;
  }
}

export default function createLinkedList(
  array: number[],
  loopPosition: number | null = null
) {
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
  }

  if (loopPosition) {
    temp.next = loop as Node;
  }

  return linkedList;
}
