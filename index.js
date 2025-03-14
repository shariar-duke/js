// Creating Node element
class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addChild(value) {
    if (!this.root) {
      this.root = new Node(value);
      return `Node ${value} added as root`;
    }

    let currentNode = this.root;

    while (true) {
      if (currentNode.value === value) {
        console.log("Duplicate Node not allowed");
        return "Duplicate Node is not allowed";
      }

      if (value < currentNode.value) {
        // Move to the left child
        if (!currentNode.leftChild) {
          currentNode.leftChild = new Node(value);
          return `Node ${value} added to the left of ${currentNode.value}`;
        }
        currentNode = currentNode.leftChild;
      } else {
        // Move to the right child
        if (!currentNode.rightChild) {
          currentNode.rightChild = new Node(value);
          return `Node ${value} added to the right of ${currentNode.value}`;
        }
        currentNode = currentNode.rightChild;
      }
    }
  }
}

// Example usage
const bst = new BinarySearchTree();
console.log(bst.addChild(10)); // Node 10 added as root
console.log(bst.addChild(5)); // Node 5 added to the left of 10
console.log(bst.addChild(15)); // Node 15 added to the right of 10
console.log(bst.addChild(5)); // Duplicate Node not allowed

console.log(bst.root);
