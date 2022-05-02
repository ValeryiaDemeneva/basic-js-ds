const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
      this.data = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.main = null;
  }

  add(data) {
      let newNode = new Node(data);
      if (!this.main) {
          this.main = newNode;
          return;
      }
      let currentNode = this.main;
      while (currentNode) {
          if (currentNode.data < newNode.data) {
              if (!currentNode.right) {
                  currentNode.right = newNode;
                  return;
              }
              currentNode = currentNode.right;
          } else {
              if (!currentNode.left) {
                  currentNode.left = newNode;
                  return;
              }
              currentNode = currentNode.left;
          }
      }
  }

  root() {
      return this.main;
  }

  min() {
      let currentNode = this.main;
      let min = null;
      while (currentNode) {
          min = currentNode.data;
          currentNode = currentNode.left;
      }
      return min;
  }

  max() {
      let currentNode = this.main;
      let max = null;
      while (currentNode) {
          max = currentNode.data;
          currentNode = currentNode.right;
      }
      return max;
  }

  has(data) {
      return this.search(this.main, data);
  }

  remove(data) {
      this.search(this.main, data);
      this.found.data = null;
  }

  find(data) {
      this.found = null;
      this.search(this.main, data);
      return this.found;
  }

  search(node, data, del = false) {
      if (!node) return false;
      if (node.data === data) {
          this.found = node;
          return true;
      }

      if (this.search(node.left, data)) return true;
      if (this.search(node.right, data)) return true;

      return false;
  }
}

module.exports = {
  BinarySearchTree
};