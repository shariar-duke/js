// Node class to represent each element in the linked list
class Node {
  constructor(data) {
    this.data = data; // Value of the node
    this.next = null; // Pointer to the next node, initially null
  }
}

// Singly Linked List class to manage nodes
class SinglyLinkedList {
  constructor() {
    this.head = null; // Head of the list, initially null
  }

  // Add a node to the end of the list (Insert)
  append(data) {
    const newNode = new Node(data);

    // If the list is empty, make the new node the head
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // Otherwise, traverse the list and append the new node at the end
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Print the list (for visualization)
  printList() {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }

  // Insert at the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Delete a node by value
  delete(data) {
    if (this.head === null) return;

    // If the head node itself contains the data
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.data !== data) {
      current = current.next;
    }

    // If the data is found
    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  // Search for a value in the list
  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true; // Data found
      }
      current = current.next;
    }
    return false; // Data not found
  }
}

// Example usage:
const list = new SinglyLinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log("List after appending elements:");
list.printList(); // Output: 10 -> 20 -> 30

list.prepend(5);
console.log("List after prepending 5:");
list.printList(); // Output: 5 -> 10 -> 20 -> 30

list.delete(20);
console.log("List after deleting 20:");
list.printList(); // Output: 5 -> 10 -> 30

console.log("Searching for 10 in the list:", list.search(10)); // Output: true
console.log("Searching for 100 in the list:", list.search(100)); // Output: false
