class Queue {
  constructor() {
    this.arr = [];
  }

  enque(num) {
    this.arr.push(num);
  }

  deQueue() {
    this.arr.shift();
  }

  showQueue() {
    return this.arr;
  }
}

const queue = new Queue();

// Enquee
queue.enque(2);
queue.enque(3);
queue.enque(4);
queue.enque(5);
queue.enque(10);

//deQuee
queue.deQueue();

console.log(queue.showQueue());
