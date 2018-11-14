class Node {
  
  constructor (data, left = null, right = null) {
    this._data = data;
    this._left = left;
    this._right = right;
  }
}

module.exports = Node;