class Stack {

  constructor () {
    this._storage = [];
  }

  // Pushes a new value onto the stack.
  push (value) {
    this._storage.push(value);
  }

  // Pops a value from the stack.
  pop () {
    return this._storage.pop();
  }

  // Returns value last pushed to the stack.
  peek () {
    return this._storage[this._storage.length - 1];
  }

  // Returns the length of the stack.
  length () {
    return this._storage.length;
  }

  // Checks if the stack is empty.
  isEmpty () {
    return this._storage.length === 0;
  }
}

module.exports = Stack;