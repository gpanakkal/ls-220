class ListNode {
  constructor(data, next) {
    this.val = data === undefined ? 0 : data;
    this.next = next === undefined ?  null : next;
  }
}

const mapToLinkedList = (items) => {
  const nodes = items.map((data) => new ListNode(data));
  nodes.forEach((node, i) => {
    if (i === nodes.length - 1) return;
    node.next = nodes[i + 1];
  });
  return nodes[0];
}
