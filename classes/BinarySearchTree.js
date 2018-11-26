const BSTNode = require('./BSTNode');

class BinarySearchTree {

  constructor () {
    this.root = null;
  }

  add (value) {
    const node = this.root;

    if (node === null) {
      this.root = new BSTNode(value);
      return;
    } else {
      // Recursively traverse tree.
      const searchTree = (node) => {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new BSTNode(value);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new BSTNode(value);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  remove (value) {
    const removeNode = (node, value) => {
      if (node === null)
        return null;

      if (value === node.value) {
        // If the node has no children.
        if (node.left === null && node.right === null)
          return null;
        // If the node has no left child.
        if (node.left === null)
          return node.right;
        // If the node has no right child.
        if (node.right === null)
          return node.left;
        // If the node has two children.
        let tempNode = node.right;
        while (tempNode.left !== null)
          tempNode = tempNode.left;

        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
  }

  findMinimum () {
    let current = this.root;

    while (current.left !== null)
      current = current.left;
    return current.value;
  }

  findMaximum () {
    let current = this.root;

    while (current.right !== null)
      current = current.right;
    return current.value;
  }

  find (value) {
    let current = this.root;

    while (current.value !== value) {
      if (value < current.value)
        current = current.left;
      else 
        current = current.right;
      if (current === null) 
        return null;
    }
    return current;    
  }

  hasValue (value) {
    let current = this.root;

    while (current) {
      if (value === current.value)
        return true;
      if (value < current.value)
        current = current.left;
      else 
        current = current.right;
    }
    return false;
  }
}

module.exports = BinarySearchTree;