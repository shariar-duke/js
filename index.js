class Queue {
  constructor() {
    this.arr = [];
  }

  // Add an element to the end of the queue
  enque(num) {
    this.arr.push(num);
  }

  // Remove the first element from the queue
  deQueue() {
    if (!this.isEmpty()) {
      this.arr.shift();
    } else {
      console.log("Queue is empty");
    }
  }

  // View the entire queue
  showQueue() {
    return this.arr;
  }

  // Get the first element in the queue (without removing it)
  front() {
    if (!this.isEmpty()) {
      return this.arr[0];
    } else {
      console.log("Queue is empty");
      return null;
    }
  }

  // Check if the queue is empty
  isEmpty() {
    return this.arr.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.arr.length;
  }

  // Clear all elements in the queue
  clear() {
    this.arr = [];
  }
}

const queue = new Queue();

// Enqueue some elements
queue.enque(2);
queue.enque(3);
queue.enque(4);
queue.enque(5);
queue.enque(10);

// Dequeue an element
queue.deQueue();

console.log("Queue after deQueue:", queue.showQueue());
console.log("Front element:", queue.front());
console.log("Queue size:", queue.size());
console.log("Is queue empty?", queue.isEmpty());

// Clear the queue
queue.clear();
console.log("Queue after clear:", queue.showQueue());
