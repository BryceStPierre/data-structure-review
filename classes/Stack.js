class Stack {

  // Assumption:
  //
  // No space limitation, exploiting JavaScript's Array.
  constructor () {
    this._storage = [];
  }

  push (value) {
    this._storage.push(value);
  }

  pop () {
    return this._storage.pop();
  }

  peek () {
    return this._storage[this._storage.length - 1];
  }

  length () {
    return this._storage.length;
  }

  isEmpty () {
    return this._storage.length === 0;
  }
}

module.exports = Stack;