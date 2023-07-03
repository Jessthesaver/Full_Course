export default function detectCycle(cycle: any) {
  if (!cycle || !cycle.next || !cycle.next.next) {
    return false;
  }

  let slow = cycle;
  let fast = cycle;

  slow = slow.next;
  fast = fast.next.next;

  while (!!fast && !!fast.next) {
    if (slow == fast) break;

    slow = slow.next;
    fast = fast.next.next;
  }

  if (slow != fast) return false;

  slow = cycle;

  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return true;
}
