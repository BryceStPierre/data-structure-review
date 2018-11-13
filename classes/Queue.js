class Queue {

  constructor () {
    this._storage = [];
  }

  // Adds an element to the queue.
  enqueue (value) {
    this._storage.push(value);
  }

  // Removes an element from the queue (with first in, first out).
  dequeue (value) {
    return this._storage.shift();
  }

  // Returns the front of the queue.
  front () {
    return this._storage.length >= 1 ? this._storage[0] : null;
  }

  // Returns the elements in the queue.
  values () {
    return this._storage;
  }

  // Returns length of the queue.
  length () {
    return this._storage.length;
  }

  // Checks if the queue is empty.
  isEmpty () {
    return this._storage.length === 0;
  }
}

module.exports = Queue;