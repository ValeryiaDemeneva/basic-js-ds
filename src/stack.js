const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element)
  }

  pop() {
    let num = this.stack[this.stack.length - 1]
    delete this.stack[this.stack.length - 1]
    return num
  }

  peek() {
    let  i = 1;
    let num = this.stack[this.stack.length - i]
    while(!this.stack[this.stack.length - i]) {
      if(this.stack.length - i < 0) break;
      i++
      num = this.stack[this.stack.length - i]
    }
    return num
  }
}
module.exports = {
  Stack
};
