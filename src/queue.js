const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor() {
    this.main = new ListNode()
  }

  getUnderlyingList() {
    return this.main
  }

  enqueue(value) {
    if (!this.main.value) {
      this.main.value = value;
      return;
    }

    let node = new ListNode(value);
    let currentNode = this.main;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node

  }

  dequeue() {
    let num = this.main.value
    this.main = this.main.next
    return num
  }
}

module.exports = {
  Queue
};
