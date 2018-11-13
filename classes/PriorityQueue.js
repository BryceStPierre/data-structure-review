class PriorityQueue {

  constructor () {
    this._storage = [];
  }

  // Add element to the queue, with priority.
  enqueue (value, priority) { 
    if (this.isEmpty()) {
      this._storage.push({ value, priority });
    } else {
      let added = false;

      for (let i = 0; i < this.length(); i++) {
        if (priority < this._storage[i].priority) {
          this._storage.splice(i, 0, { value, priority });
          added = true;
          break;
        }
      }

      if (!added)
        this._storage.push({ value, priority });
    }
  }

  // Remove an element from the queue, (with first in, first out).
  dequeue (value) {
    return this._storage.shift();
  }

  // Returns the element at the front of the queue.
  front () {
    return this._storage.length >= 1 ? this._storage[0].value : null;
  }

  // Returns the elements in the queue.
  values () {
    return this._storage.map(v => v.value);
  }

  // Returns the size of the queue.
  length () {
    return this._storage.length;
  }

  // Checks if the queue is empty.
  isEmpty () {
    return this._storage.length === 0;
  }
}

module.exports = PriorityQueue;