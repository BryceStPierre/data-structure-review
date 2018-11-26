const Node = require('./Node');

class LinkedList {

  constructor () {
    this._length = 0;
    this._head = null;
  }

  // Add element to list.
  add (element) {
    let node = new Node(element);

    if (this._head === null) {
      this._head = node;
    } else {
      let currentNode = this._head;

      while (currentNode.next)
        currentNode = currentNode.next;
        
      currentNode.next = node;
    }
    this._length++;
  }

  // Removes element from list.
  remove (element) {
    let currentNode = this._head;
    let previousNode;

    if (currentNode.element === element) {
      this._head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this._length--;
  }

  // Return index for a given element, or -1 if not found.
  indexOf (element) {
    let currentNode = this._head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element)
        return index;
      currentNode = currentNode.next;
    }
    return -1;
  }

  // Return element at index.
  elementAt (index) {
    let currentNode = this._head;
    let count = 0;

    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  // Add element at specific index, returns success value.
  addAt (index, element) {
    let node = new Node(element);

    let currentNode = this._head;
    let previousNode;
    let currentIndex = 0;

    if (index > this._length)
      return false;

    if (index === 0) {
      node.next = currentNode;
      this._head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this._length++;
  }

  // Removes element at specific index.
  removeAt (index) {
    let currentNode = this._head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= this._length)
      return null;

    if (index === 0) {
      this._head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this._length--;
    return currentNode.element;
  }

  // Return the head element of the list.
  head () {
    return this._head;
  }

  // Return the length of the list.
  length () {
    return this._length;
  }

  // Returns boolean for if the list is empty.
  isEmpty () {
    return this._length === 0;
  }
}

module.exports = LinkedList;
