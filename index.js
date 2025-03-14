// crating Node element
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
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }
  }
}

const bst = new BinarySearchTree();
bst.addChild(10);
console.log(bst.root);
