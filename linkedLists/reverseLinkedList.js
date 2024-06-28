/*
Given the head of a linked list, reverse the list and return it.

Mental model:
- pointer to the current and previous nodes
- initialize `previous` as a dummy node?
- iterate down the list, 
    - store the current's next node in a variable
    - reassign current.next to previous
- return `current` as it is now the new head
*/
class Node {
  constructor(data, next) {
    this.val = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

const reverseLinkedList = (list) => {
  if (list === null) return null;

  let current = list, previous = null;
  while (current !== null) {
    const temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }

  return previous;
}

// Helper function to print the linked list
function printList(head) {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  return result;
}

// Test case 1
const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);

console.log("Input: 1 -> 2 -> 3 -> 4 -> null");
console.log("Output:", printList(reverseLinkedList(head1)));