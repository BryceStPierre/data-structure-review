class Node {

  constructor (element) {
    this._element = element;
    this._next = null;
  }

  set element (e) {
    this._element = e;
  }

  get element () {
    return this._element;
  }

  set next (n) {
    this._next = n;
  }

  get next () {
    return this._next;
  }
}

module.exports = Node;