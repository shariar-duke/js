// Node class for Doubly Linked List
class Node {
  constructor(data) {
    this.data = data; // Node value
    this.next = null; // Pointer to the next node
    this.prev = null; // Pointer to the previous node
  }
}

// Doubly Linked List class
class DoublyLinkedList {
  constructor() {
    this.head = null; // Points to the first node
    this.tail = null; // Points to the last node
  }

  // Add a node at the end (Append)
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = newNode; // First node becomes head and tail
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode; // Update tail
  }

  // Add a node at the beginning (Prepend)
  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = newNode; // First node becomes head and tail
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode; // Update head
  }

  // Delete a node by value
  delete(data) {
    if (!this.head) return; // List is empty

    // If head contains the data
    if (this.head.data === data) {
      // If it's the only node in the list
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return;
    }

    let current = this.head;
    while (current && current.data !== data) {
      current = current.next;
    }

    // If node not found
    if (!current) return;

    // If deleting the last node
    if (current === this.tail) {
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null; // Fix stale reference
      return;
    }

    // Remove the node in the middle
    current.prev.next = current.next;
    current.next.prev = current.prev;
  }

  // Search for a value in the list
  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  // Print the list from head to tail
  printList() {
    if (!this.head) {
      console.log("Forward: List is empty");
      return;
    }

    let current = this.head;
    let result = [];

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    console.log("Forward:", result.join(" ⇄ "));
  }

  // Print the list in reverse (tail to head)
  printReverse() {
    if (!this.tail) {
      console.log("Reverse: List is empty");
      return;
    }

    let current = this.tail;
    let result = [];

    while (current) {
      result.push(current.data);
      current = current.prev;
    }

    console.log("Reverse:", result.join(" ⇄ "));
  }
}

// Example usage:
const dll = new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);
console.log("List after appending:");
dll.printList(); // 10 ⇄ 20 ⇄ 30

dll.prepend(5);
console.log("List after prepending 5:");
dll.printList(); // 5 ⇄ 10 ⇄ 20 ⇄ 30

dll.delete(20);
console.log("List after deleting 20:");
dll.printList(); // 5 ⇄ 10 ⇄ 30

console.log("Searching for 10:", dll.search(10)); // true
console.log("Searching for 100:", dll.search(100)); // false

console.log("Reverse Order:");
dll.printReverse(); // 30 ⇄ 10 ⇄ 5
